/*
* Copyright (c) 2012-2017 "JUSPAY Technologies"
* JUSPAY Technologies Pvt. Ltd. [https://www.juspay.in]
* 
* This file is part of JUSPAY Platform.
* 
* JUSPAY Platform is free software: you can redistribute it and/or modify
* it for only educational purposes under the terms of the GNU Affero General
* Public License (GNU AGPL) as published by the Free Software Foundation,
* either version 3 of the License, or (at your option) any later version.
* For Enterprise/Commerical licenses, contact <info@juspay.in>.
* 
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  The end user will
* be liable for all damages without limitation, which is caused by the
* ABUSE of the LICENSED SOFTWARE and shall INDEMNIFY JUSPAY for such
* damages, claims, cost, including reasonable attorney fee claimed on Juspay.
* The end user has NO right to claim any indemnification based on its use
* of Licensed Software. See the GNU Affero General Public License for more details.
* 
* You should have received a copy of the GNU Affero General Public License
* along with this program. If not, see <https://www.gnu.org/licenses/agpl.html>.
*/

package in.juspay.mystique;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.os.Build;
import android.os.Bundle;
import android.util.DisplayMetrics;
import android.util.Log;
import android.view.View;
import android.webkit.ConsoleMessage;
import android.webkit.WebChromeClient;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.FrameLayout;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.Locale;

/**
 * Created by sahebjot on 22/06/16.
 */
public final class DynamicUI {

    private WebView browser;
    private static DuiLogger mLogger;
    private Activity activity;
    private ErrorCallback errCallback;
    private JsInterface jsInterface;
    private FrameLayout container;

    public DynamicUI(Activity activity, FrameLayout container, Bundle args, ErrorCallback errCallback) {
        mLogger = new DuiLogger() {
            @Override
            public void d(String tag, String message) {

            }

            @Override
            public void e(String tag, String message) {

            }

            @Override
            public void i(String tag, String message) {

            }

            @Override
            public void v(String tag, String message) {

            }
        };
        this.errCallback = errCallback;
        if(activity != null && container != null) {
            this.activity = activity;
            this.container = container;
            browser = new WebView(activity.getApplicationContext());
            setupWebview();
            browser.setVisibility(View.GONE);
            this.container.addView(browser);
            browser.getSettings().setJavaScriptEnabled(true);
            jsInterface = new JsInterface(activity, container, this);
            browser.addJavascriptInterface(jsInterface, "Android");
        } else {
            mLogger.e("DynamicUI", "container or activity null");
        }
    }

    public void setWebViewClient(WebViewClient webViewClient) {
        browser.setWebViewClient(webViewClient);
    }

    public void setWebChromeClient(WebChromeClient webChromeClient) {
        browser.setWebChromeClient(webChromeClient);
    }

    private void setupWebview(){
        if(activity != null) {
            String packageName = activity.getPackageName();
            int resId = activity.getResources().getIdentifier("is_dui_debuggable", "string", packageName);
            if(resId!=0){
                String isDebuggable = activity.getString(resId);
                if(isDebuggable!=null && isDebuggable.equalsIgnoreCase("true")){
                    if(Build.VERSION.SDK_INT >= 19) {
                        WebView.setWebContentsDebuggingEnabled(true);
                    }
                    browser.setWebChromeClient(new WebChromeClient());
                    WebViewClient webViewClient = new WebViewClient();
                    browser.setWebViewClient(webViewClient);

                } else {
                    browser.setWebChromeClient(new WebChromeClient(){
                        @Override
                        public boolean onConsoleMessage(ConsoleMessage consoleMessage) {
                            return true;
                        }

                    });
                }
            }

            if(Build.VERSION.SDK_INT >= 16) {
                browser.getSettings().setAllowFileAccessFromFileURLs(true);
                browser.getSettings().setAllowUniversalAccessFromFileURLs(true);
            } else {
            }
        }
    }

    public void destroy() {
        browser.loadDataWithBaseURL("http://juspay.in", "<html></html>", "text/html", "utf-8", null);
        container.removeView(browser);
        browser.stopLoading();
        browser.removeAllViews();
        browser.destroy();
        InflateView.reset();
        activity = null;
        mLogger = null;
    }

    public void addJsToWebView(final String js) {
        if(activity != null) {
            activity.runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    try {
                        if (browser != null) {
                            if (Build.VERSION.SDK_INT >= 19) {
                                browser.evaluateJavascript(js, null);
                            } else {
                                browser.loadUrl("javascript:" + js);
                            }
                        } else {
                            mLogger.e("DynamicUI", "browser null, call start first");
                        }
                    } catch (OutOfMemoryError e) {
                        mLogger.e("DynamicUI", "OutOfMemoryError :" + getStringStackTrace(e));
                        errCallback.onError("addJsToWebView", "" + getStringStackTrace(e));
                    } catch (Exception e) {
                        mLogger.e("DynamicUI", "Exception :" + getStringStackTrace(e));
                        errCallback.onError("addJsToWebView", "" + getStringStackTrace(e));
                    }
                }
            });
        }
    }

    private String getStringStackTrace(Object e) {
        String error = "";
        StackTraceElement[] trace = ((Exception)e).getStackTrace();
        for (int i=0;i<trace.length;i++) {
            error += trace[i].toString() + "\n";
        }
        return error;
    }

    public void loadURL(final String url) {
        if(activity != null) {
            activity.runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    browser.loadUrl(url);
                }
            });
        }
    }

    public JsInterface getJsInterface(){
        return  this.jsInterface;
    }

    @SuppressLint("JavascriptInterface")
    public void addJavascriptInterface(Object object, String reference) {
        browser.addJavascriptInterface(object, reference);
    }

    public static void setLogger(DuiLogger logger) {
        mLogger = logger;
    }

    public static DuiLogger getLogger() {
        return mLogger;
    }

    public void setErrorCallback(ErrorCallback errorCallback) {
        errCallback = errorCallback;
    }

    public void setIntialVariables() {

        JSONObject js = new JSONObject();
        try {
            js.put("brand",String.valueOf(Build.BRAND));
            js.put("model",String.valueOf(Build.MODEL));
            js.put("os_version",String.valueOf(Build.VERSION.RELEASE));
            js.put("locale",Locale.getDefault().getDisplayLanguage());
            js.put("app_name",String.valueOf(activity.getApplicationInfo().loadLabel(activity.getPackageManager())));
            js.put("apiLevel",android.os.Build.VERSION.SDK_INT);

            DisplayMetrics displayMetrics = activity.getResources().getDisplayMetrics();
            js.put("screen_height",String.valueOf(displayMetrics.heightPixels));
            js.put("screen_width",String.valueOf(displayMetrics.widthPixels));
            js.put("screen_ppi",String.valueOf(displayMetrics.xdpi));

            addJsToWebView("window.__DEVICE_DETAILS="+js.toString());

        } catch (JSONException e) {
        }
    }

    public ErrorCallback getErrorCallback() {return errCallback;}

    public void onBackPressed() {
        addJsToWebView("window.onBackpressed()");
    }

    public String getState() throws Exception {
        if(jsInterface != null) {
            return jsInterface.getState();
        } else {
            throw new Exception("JS-Interface not initailised");
        }
    }

    public void setState(String state) throws Exception {
        if(jsInterface != null) {
            jsInterface.setState(state);
        } else {
            throw new Exception("JS-Interface not initailised");
        }
    }

    public void forceSaveState() {
        addJsToWebView("window.callUICallback(forceSaveState,'failure');");
    }

    public void onActivityLifeCycleEvent(String event) {
        this.addJsToWebView("window.onActivityLifeCycleEvent('"+event+"')");
    }

}


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

import android.app.Activity;
import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.os.AsyncTask;
import android.os.Build;
import android.os.Environment;
import android.text.InputFilter;
import android.text.Spanned;
import android.util.Base64;
import android.util.DisplayMetrics;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;

import android.view.WindowManager;
import android.view.inputmethod.InputMethodManager;
import android.webkit.WebView;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.PopupMenu;
import android.widget.Spinner;
import android.widget.Toast;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.regex.Pattern;

/**
 * Created by sahebjot on 4/10/16.
 */

public class JsInterface {
    private Activity activity;
    private Renderer renderer;
    private ViewGroup container;
    private DuiLogger logger;
    private ErrorCallback errCallback;
    private String state;
    private DynamicUI dynamicUI;

    private static final String LOG_TAG = JsInterface.class.getName();

    //Never make it public - Should not be accessible outside this package
    JsInterface(Activity c, ViewGroup container, DynamicUI dynamicUI) {
        activity = c;
        this.dynamicUI = dynamicUI;
        renderer = new Renderer(activity, dynamicUI);
        this.container = container;
        logger = dynamicUI.getLogger();
        errCallback = dynamicUI.getErrorCallback();
    }

    public Renderer getRenderer(){
        return  this.renderer;
    }

    @android.webkit.JavascriptInterface
    public void Render(final String ui, final String callbackName) {
        activity.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                try {
                    renderer.RenderUI(ui, container);
                    if (callbackName != null) {
                        dynamicUI.addJsToWebView("window.callUICallback(" + callbackName + ",'success');");
                    }
                } catch (Exception e) {
                    if (e != null) {
                        String errName = e.getClass().getName();
                        logger.e("ERROR"," excep: fn__Render  - " +  errName + " - " + renderer.getErrorDetails());
                        errCallback.onError("ERROR"," excep: fn__Render  - " +  errName + " - " + renderer.getErrorDetails());
                    }
                    if (callbackName != null) {
                        dynamicUI.addJsToWebView("window.callUICallback(" + callbackName + ",'failure');");
                    }
                }
            }
        });
    }

    @android.webkit.JavascriptInterface
    public void dismissPopUp(){
        renderer.dismissPopUp();
    }
    @android.webkit.JavascriptInterface
    public void throwError(String error) {
        logger.e("throwError", error);
    }

    @android.webkit.JavascriptInterface
    public void addViewToParent(final String parentId, final String ui, final int index, final String callbackName, final boolean replaceChild) {
        activity.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                try {
                    renderer.addViewToParent(parentId, new JSONObject(ui), index, replaceChild);
                    if (callbackName != null) {
                        dynamicUI.addJsToWebView("window.callUICallback('" + callbackName + "','" + "success" + "');");
                    }
                } catch (Exception e) {
                    if (e != null) {
                        String errName = e.getClass().getName();
                        logger.e("ERROR", " excep: fn__addViewToParent  - " + errName + " - " + renderer.getErrorDetails());
                        errCallback.onError("ERROR", " excep: fn__addViewToParent  - " + errName + " - " + renderer.getErrorDetails());
                    }
                    if (callbackName != null) {
                        dynamicUI.addJsToWebView("window.callUICallback('" + callbackName + "','" + "failure" + "');");
                    }
                }
            }
        });
    }

    @android.webkit.JavascriptInterface
    public void addViewToParent(final String parentId, final String ui, final int index, final String callbackName) {
        addViewToParent(parentId, ui, index, callbackName, false);
    }

    @android.webkit.JavascriptInterface
    public void runInUI(final String toRun, final String callbackName, final String lineNo, final String fileName) {
        activity.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                try {
                    renderer.parseAndRunPipe(activity, toRun, lineNo, fileName);
                    if (callbackName != null) {
                        dynamicUI.addJsToWebView("window.callUICallback(" + callbackName + ",'success');");
                    }
                } catch (Exception e) {
                    if (e != null) {
                        String errName = e.getClass().getName();
                        logger.e("ERROR", " excep: fn__runInUI  - " + errName + " - " + renderer.getErrorDetails());
                        errCallback.onError("ERROR", " excep: fn__runInUI  - " + errName + " - " + renderer.getErrorDetails());
                    }

                    if (callbackName != null) {
                        dynamicUI.addJsToWebView("window.callUICallback(" + callbackName + ",'failure');");
                    }
                }
            }
        });
    }

    // backward compat
    @android.webkit.JavascriptInterface
    public void runInUI(final String toRun, final String callbackName) {
        activity.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                try {
                    renderer.parseAndRunPipe(activity, toRun, "", "");
                    if (callbackName != null) {
                        dynamicUI.addJsToWebView("window.callUICallback(" + callbackName + ",'success');");
                    }
                } catch (Exception e) {
                    if (e != null) {
                        String errName = e.getClass().getName();
                        logger.e("ERROR", " excep: fn__runInUI  - " + errName + " - " + renderer.getErrorDetails());
                        errCallback.onError("ERROR", " excep: fn__runInUI  - " + errName + " - " + renderer.getErrorDetails());
                    }

                    if (callbackName != null) {
                        dynamicUI.addJsToWebView("window.callUICallback(" + callbackName + ",'failure');");
                    }
                }
            }
        });
    }

    public void runInUI(final View view, final String toRun) {
        activity.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                try {
                    renderer.parseAndRunPipe(view, toRun, "", "");
                } catch (Exception e) {
                    if (e != null) {
                        String errName = e.getClass().getName();
                        logger.e("ERROR", " excep: fn__runInUI  - " + errName + " - " + renderer.getErrorDetails());
                        errCallback.onError("ERROR", " excep: fn__runInUI  - " + errName + " - " + renderer.getErrorDetails());
                    }
                }
            }
        });
    }

    @android.webkit.JavascriptInterface
    public void run(final String toRun, final String callbackName) {
        try {
            renderer.parseAndRunPipe(activity, toRun, "", "");
            if (callbackName != null) {
                dynamicUI.addJsToWebView("window.callUICallback(" + callbackName + ",'success');");
            }
        } catch (Exception e) {
            if (e != null) {
                String errName = e.getClass().getName();
                logger.e("runInUI", errName);
                errCallback.onError("runInUI", errName + " - " + renderer.getErrorDetails());
            }
            if (callbackName != null) {
                dynamicUI.addJsToWebView("window.callUICallback(" + callbackName + ",'failure');");
            }
        }
    }

    @android.webkit.JavascriptInterface
    public void saveState(String state) {
        this.state = state;
    }

    @android.webkit.JavascriptInterface
    public String getState() {
        if(this.state != null) {
            return this.state;
        } else {
            return "{}";
        }
    }

    @android.webkit.JavascriptInterface
    public void setImage(final int id, final String base64ImageString ) {
        activity.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                try {
                    ImageView image = (ImageView) (activity.findViewById(id));
                    byte[] decodedString = Base64.decode(base64ImageString, Base64.DEFAULT);
                    Bitmap decodedByte = BitmapFactory.decodeByteArray(decodedString, 0, decodedString.length);
                    image.setImageBitmap(decodedByte);

                } catch (Exception e) {
                    if(e != null) {
                        String errName = e.getClass().getName();
                        logger.e("ERROR"," excep: fn__setImage  - " +  errName + " - " + renderer.getErrorDetails());
                        errCallback.onError("ERROR"," excep: fn__setImage  - " +  errName + " - " + renderer.getErrorDetails());
                    }
                }
            }
        });
    }

    @android.webkit.JavascriptInterface
    public void setState(String state) {
        this.state = state;
    }

    @android.webkit.JavascriptInterface
    public String fetchData(String key) {
        return activity.getSharedPreferences("DUI", Context.MODE_PRIVATE).getString(key, "null");
    }

    @android.webkit.JavascriptInterface
    public void saveData(String key, String value) {
        activity.getSharedPreferences("DUI", Context.MODE_PRIVATE).edit().putString(key, value).commit();
    }

    @android.webkit.JavascriptInterface
    public String getScreenDimensions() {
        DisplayMetrics displaymetrics = new DisplayMetrics();
        activity.getWindowManager().getDefaultDisplay().getMetrics(displaymetrics);
        int height = displaymetrics.heightPixels;
        int width = displaymetrics.widthPixels;
        return "{\"width\":"+width+",\"height\":"+height+" }";
    }

    @android.webkit.JavascriptInterface
    public void toggleKeyboard(final int id, final String type) {
        activity.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                View view = activity.findViewById(id);
                InputMethodManager inputMethodManager = (InputMethodManager) activity.getSystemService(Context.INPUT_METHOD_SERVICE);

                if (type.equals("show")) {
                    inputMethodManager.showSoftInput(view, InputMethodManager.SHOW_IMPLICIT);
                } else {
                    inputMethodManager.hideSoftInputFromWindow(view.getWindowToken(), 0);
                }
            }
        });
    }


    @android.webkit.JavascriptInterface
    public void generateUIElement(final String type, final int id, final String[] elements, final String callbackName)
    {
        activity.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                if (type.equals("PopupMenu")) {
                    View view = (View) (activity.findViewById(id));
                    view.setOnClickListener(new View.OnClickListener() {
                        public void onClick(View v) {
                            showPopup(v, elements, callbackName);
                        }
                    });
                }
            }
        });
    }

    public void showPopup(View v, String[] elements, final String callbackName) {
        PopupMenu popup = null;
        if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.HONEYCOMB) {
            popup = new PopupMenu(activity, v);
            for (Integer i = 0; i < elements.length; i++) {
                popup.getMenu().add(Menu.NONE, i, Menu.NONE, elements[i]);
            }

            popup.setOnMenuItemClickListener(new PopupMenu.OnMenuItemClickListener() {
                @Override
                public boolean onMenuItemClick(MenuItem item) {
                    dynamicUI.addJsToWebView("window.callUICallback('" + callbackName + "', '" + item.getItemId() + "');");
                    Toast.makeText(activity, "You Clicked : " + item.getTitle(), Toast.LENGTH_SHORT).show();
                    return true;
                }
            });
            popup.show();
        }
    }

    @android.webkit.JavascriptInterface
    public String getInternalStorageBaseFilePath() {
        return activity.getDir("juspay", Context.MODE_PRIVATE).getAbsolutePath();
    }

    @android.webkit.JavascriptInterface
    public boolean isFilePresent(String filePath) {
        File file = new File(filePath);
        return file.exists();
    }

    @android.webkit.JavascriptInterface
    public void showLoading() {
        activity.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                //SHOW LOADING
            }
        });
    }
}

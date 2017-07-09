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
import android.view.View;
import android.view.ViewGroup;

import org.json.JSONArray;
import org.json.JSONObject;
import java.lang.reflect.Constructor;
import java.lang.reflect.Method;
import java.util.Iterator;


/**
 * Created by sahebjot on 4/10/16.
 */

public class Renderer {
    private InflateView inflateView;
    private Activity mContext;
    private View currentView;
    private View prevView;
    private ViewGroup container;
    private ErrorCallback errCallback;
    private DynamicUI dynamicUI;
    private DuiLogger logger;

    public void dismissPopUp(){
        inflateView.dismissPopUp();
    }
    //Never make it public - Should not be accessible outside this package
    Renderer(Activity c, DynamicUI dynamicUI) {
        this.dynamicUI = dynamicUI;
        long t1 = System.currentTimeMillis();
        mContext = c;
        errCallback = dynamicUI.getErrorCallback();
        logger = dynamicUI.getLogger();
        inflateView =  new InflateView(mContext, logger, errCallback, dynamicUI);
    }

    public void RenderUI(final String ui, ViewGroup container) throws Exception {
        this.container = container;
        final JSONObject jsonUI = new JSONObject(ui);
        currentView = createView(jsonUI);
        if (prevView != null && prevView != currentView) {
            removeViewFromContainer(prevView);
        }
        Render(currentView);
        prevView = currentView;
    }

    public void addViewToParent(String parentStrId, JSONObject ui, int index, boolean replaceChild) throws Exception {
        int parentId = mContext.getResources().getIdentifier(parentStrId, "id", mContext.getPackageName());
        if(index >= 0) {
            ViewGroup parentView = (ViewGroup) mContext.findViewById(parentId);
            if(replaceChild){
                parentView.removeAllViews();
            }
            View toAddToParent = createView(ui);
            if(toAddToParent != null) {
                parentView.addView(toAddToParent, index);
            } else {
                errCallback.onError("ERROR", " isNull : fn__addViewToParent - child null " + getErrorDetails());
            }
        }else {
            if (ui.has("props")) {
                setCurrentNodeDetails(ui.getString("type"), ui.getJSONObject("props"));
            }
            errCallback.onError("ERROR", " isNull : fn__addViewToParent - negative index " + getErrorDetails());
        }
    }

    public void setCurrentNodeDetails(String viewType, JSONObject properties ) throws  Exception {
        inflateView.setCurrView(viewType);

        if (properties.has("node_id")) {
            String viewId = properties.getString("node_id");
            inflateView.setCurrViewId(viewId);
        }

        if (properties.has("__filename")) {
            String __filename = properties.getString("__filename");
            inflateView.setFileOrigin(__filename);
        }
    }

    public View createView(JSONObject ui) throws Exception {
        String viewType = ui.getString("type");
        JSONObject properties = ui.getJSONObject("props");

        if(ui.has("props")) {
            setCurrentNodeDetails(viewType, properties);
        }

        Class<?> cls = Class.forName(viewType);
        Constructor ct = cls.getConstructor(Context.class);
        Object instance;
        instance = ct.newInstance(mContext);
        Iterator<?> keys = properties.keys();
        String key;

        while (keys.hasNext()) {
            key = (String) keys.next();
            inflateView.parseKeys(key, properties, instance);
        }

        JSONArray children;
        JSONObject child;
        children = ui.getJSONArray("children");
        if (children != null && children.length() != 0) {
            for (int i = 0; i < children.length(); i++) {
                child = children.getJSONObject(i);
                View childView = createView(child);
                if(childView != null) {
                    Method addChildMethod = cls.getMethod("addView", View.class);
                    addChildMethod.invoke(instance, childView);
                }
            }
        }

        return (View) instance;
    }


    private View Render(final View viewInstance) {
        if(viewInstance != null) {
            container.addView(viewInstance);
        }else {
            errCallback.onError("ERROR", " isNull : fn__Render -  instance null "+ getErrorDetails());
        }

        return container;
    }

    private void removeViewFromContainer(final View toRemove) {
        int index = container.indexOfChild(toRemove);
        container.removeViewAt(index);
    }

    public String getErrorDetails() {
        return  inflateView.getErrorDetails();
    }

    public Object parseAndRunPipe(Object instance, String toParse, String lineNo, String fileName) throws Exception {
        inflateView.setCurrView("modifyDom");
        inflateView.setCurrViewId("");
        inflateView.setFileOrigin("ln: " + lineNo + " " + fileName);

        return inflateView.parseAndRunPipe(instance, toParse);
    }
}

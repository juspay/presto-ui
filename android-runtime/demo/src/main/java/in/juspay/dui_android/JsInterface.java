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

package in.juspay.dui_android;

import android.app.Activity;
import android.content.Context;
import android.support.v4.view.ViewPager;
import android.webkit.JavascriptInterface;
import android.widget.ListView;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;

import in.juspay.presto.DynamicUI;

import static java.lang.Integer.parseInt;

/**
 * Created by stpl on 24/2/17.
 */

public class JsInterface {

    //private KeyValueStore keyValueStore;
    private final static String LOG_TAG = JsInterface.class.getName();
    private Context context;
    private Activity activity;
    private DynamicUI dynamicUI;
    public JsInterface(Activity activity, DynamicUI dynamicUI) {
        this.context = activity.getApplicationContext();
        this.activity = activity;
        this.dynamicUI = dynamicUI;
    }

    private ArrayList jsonToArrayList(JSONArray jsonArray,String key,String type) throws JSONException {
        ArrayList arrayList = new ArrayList();
        for(int i = 0; i<jsonArray.length();i++){
            JSONObject element = jsonArray.getJSONObject(i);
            if(type.equalsIgnoreCase("Int")){
                arrayList.add(Integer.parseInt(element.getString(key)));
            }else{
                arrayList.add(element.getString(key));
            }
        }
        return arrayList;
    }

    @JavascriptInterface
    public void listViewAdapter(final String id,String text, int itemCount) throws Exception {
        int listViewId = parseInt(id);
        final ListView listView = (ListView) activity.findViewById(listViewId);
        JSONArray jsonArray = new JSONArray(text);
        ArrayList<String> viewJSXArrayList = jsonToArrayList(jsonArray,"view","String");
        ArrayList<String> valueArrayList = jsonToArrayList(jsonArray,"value","String");
        ArrayList<Integer> viewTypeArrayList = jsonToArrayList(jsonArray,"viewType","Int");
        final ListViewAdapter listViewAdapter = new ListViewAdapter(context,itemCount, valueArrayList,viewJSXArrayList,viewTypeArrayList,dynamicUI);
        activity.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                listView.setAdapter(listViewAdapter);
            }
        });
    }

    @JavascriptInterface
    public void viewPagerAdapter(final String id,final String idTab,String viewValues,String titleText) throws Exception {
        int viewPagerId = parseInt(id);
        final int tabLayoutId = parseInt(idTab);
        final ViewPager viewPager = (ViewPager) activity.findViewById(viewPagerId);
        JSONArray jsonArray = new JSONArray(viewValues);
        JSONArray jsonTitleArray = new JSONArray(titleText);
        ArrayList<String> viewJSXArrayList = jsonToArrayList(jsonArray,"view","String");
        ArrayList<String> valueArrayList = jsonToArrayList(jsonArray,"value","String");
        ArrayList<String> titleArrayList = jsonToArrayList(jsonTitleArray,"value","String");
        final ViewPagerAdapter viewPagerAdapter = new ViewPagerAdapter(context, valueArrayList,viewJSXArrayList,titleArrayList,dynamicUI);
        activity.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                viewPager.setAdapter(viewPagerAdapter);
                TabLayout tabLayout = (TabLayout) activity.findViewById(tabLayoutId);
                tabLayout.setupWithViewPager(viewPager);
            }
        });
    }

}

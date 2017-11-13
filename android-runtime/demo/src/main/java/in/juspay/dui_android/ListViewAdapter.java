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


import android.content.Context;
import android.util.Log;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;

import org.json.JSONObject;

import java.util.ArrayList;

import in.juspay.presto.*;

/**
 * Created by stpl on 23/2/17.
 */

public class ListViewAdapter extends ArrayAdapter<String> {

    private int itemCount = 1;


    private final Context context;
    private final ArrayList<String> runInUI;
    private final DynamicUI dynamicUI;
    private final in.juspay.presto.Renderer renderer;
    private final ArrayList<String> views;
    private final ArrayList<Integer> viewTypeList;

    public ListViewAdapter(Context context, int itemCount, ArrayList<String> values, ArrayList<String> view, ArrayList<Integer> viewTypeList, DynamicUI dynamicUI) throws Exception {
        super(context, R.layout.list_view_tem, values);
        this.context = context;
        this.itemCount = itemCount;
        this.runInUI = values;
        this.dynamicUI = dynamicUI;
        this.renderer = dynamicUI.getJsInterface().getRenderer();
        this.views = view;
        this.viewTypeList = viewTypeList;
    }

    static class ViewHolder {
        public View element;
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {
        try {
            ViewHolder viewHolder = null;
            if (convertView == null) {
                convertView = createRowView(parent,position);
                viewHolder = new ViewHolder();
                viewHolder.element = convertView;
                convertView.setTag(viewHolder);
            }
            viewHolder = (ViewHolder) convertView.getTag();
            String toRun = runInUI.get(position);
            toRun = toRun.replace("ctx", "parent");
            dynamicUI.getJsInterface().runInUI(viewHolder.element, toRun);

            return convertView;
        } catch (Exception e) {
            Log.d("BREAK:", e + "");
            return null;
        }
    }

    @Override
    public int getViewTypeCount() {
        return itemCount;
    }

    @Override
    public int getItemViewType(int position) {
        return viewTypeList.get(position);
    }

    private View createRowView(ViewGroup parent, int position) throws Exception {
        final JSONObject myObj = new JSONObject(views.get(position));
        View myView = renderer.createView(myObj);
        return myView;
    }
}
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
import android.support.v4.view.PagerAdapter;
import android.text.SpannableString;
import android.util.SparseArray;
import android.view.View;
import android.view.ViewGroup;

import org.json.JSONObject;

import java.util.ArrayList;

import in.juspay.mystique.DynamicUI;

/**
 * Created by Dayanidhi on 01/03/17.
 */

public class ViewPagerAdapter extends PagerAdapter {
    private Context context;
    private ArrayList<String> runInUI = new ArrayList<>();
    private DynamicUI dynamicUI;
    private in.juspay.mystique.Renderer renderer;
    private ArrayList<String> viewsArrayList;
    private ArrayList<String> titleTextArrayList;

    public ViewPagerAdapter(Context context, ArrayList<String> values, ArrayList<String> view, ArrayList<String> titleText,DynamicUI dynamicUI) {
        this.context = context;
        this.runInUI = values;
        this.dynamicUI = dynamicUI;
        this.renderer = dynamicUI.getJsInterface().getRenderer();
        this.viewsArrayList = view;
        this.titleTextArrayList = titleText;
    }

    @Override
    public int getCount() {
        return runInUI.size();
    }

    @Override
    public boolean isViewFromObject(View view, Object object) {
        return view == object;
    }

    @Override
    public Object instantiateItem(ViewGroup container, int position) {
        View convertView = createRowView(position);
        container.addView(convertView);
        String toRun = runInUI.get(position);
        toRun = toRun.replace("ctx", "parent");
        dynamicUI.getJsInterface().runInUI(convertView, toRun);
        return convertView;
    }

    @Override
    public CharSequence getPageTitle(int position) {
        SpannableString spannableString = new SpannableString(titleTextArrayList.get(position));
        return spannableString;
    }

    @Override
    public void destroyItem(ViewGroup container, int position, Object object) {
       container.removeView((View) object);
    }

    private View createRowView(int position) {
        try {
            final JSONObject myObj = new JSONObject(viewsArrayList.get(position));
            return renderer.createView(myObj);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }

    }
}

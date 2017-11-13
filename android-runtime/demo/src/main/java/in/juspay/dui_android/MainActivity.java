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

import android.os.Build;
import android.os.Bundle;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.support.v7.app.AppCompatActivity;

import android.webkit.WebView;
import android.widget.FrameLayout;

import java.io.File;
import java.io.FileOutputStream;

import in.juspay.presto.*;

public class MainActivity extends AppCompatActivity {

    private static String BASE_URL = "";
    private DynamicUI dynamicUI;
    private JsInterface jsInterface;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Bitmap bm = BitmapFactory.decodeResource(getResources(), R.mipmap.ic_launcher);
        String extStorageDirectory = getApplicationContext().getFilesDir().getAbsolutePath();
        File file = new File(extStorageDirectory, "axis_card_background.png");
        try {
            FileOutputStream outStream = new FileOutputStream(file);
            bm.compress(Bitmap.CompressFormat.PNG, 100, outStream);
            outStream.flush();
            outStream.close();
        } catch (Exception e) {
        }

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
            WebView.setWebContentsDebuggingEnabled(true);
        }

        setContentView(R.layout.activity_main);
        FrameLayout container = (FrameLayout) findViewById(R.id.dui_container);
        dynamicUI = new DynamicUI(this, container, null,new ErrorCallback() {
            @Override
            public void onError(String errorType, String errorMessage) {
            }
        });

        jsInterface = new JsInterface(this,dynamicUI);
        dynamicUI.setLogger(new NewLogger());
        String url = "file:///android_asset/index.html";
        dynamicUI.loadURL(url);
        dynamicUI.addJavascriptInterface(jsInterface, "JBridge");
    }

    @Override
    public void onBackPressed() {
        super.onBackPressed();
        dynamicUI.onBackPressed();
        finish();
    }
}

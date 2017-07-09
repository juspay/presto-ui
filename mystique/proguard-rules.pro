# Copyright (c) 2012-2017 "JUSPAY Technologies"
# JUSPAY Technologies Pvt. Ltd. [https://www.juspay.in]
# 
# This file is part of JUSPAY Platform.
# 
# JUSPAY Platform is free software: you can redistribute it and/or modify
# it for only educational purposes under the terms of the GNU Affero General
# Public License (GNU AGPL) as published by the Free Software Foundation,
# either version 3 of the License, or (at your option) any later version.
# For Enterprise/Commerical licenses, contact <info@juspay.in>.
# 
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  The end user will
# be liable for all damages without limitation, which is caused by the
# ABUSE of the LICENSED SOFTWARE and shall INDEMNIFY JUSPAY for such
# damages, claims, cost, including reasonable attorney fee claimed on Juspay.
# The end user has NO right to claim any indemnification based on its use
# of Licensed Software. See the GNU Affero General Public License for more details.
# 
# You should have received a copy of the GNU Affero General Public License
# along with this program. If not, see <https://www.gnu.org/licenses/agpl.html>.

# Add project specific ProGuard rules here.
# By default, the flags in this file are appended to flags specified
# in /Users/amankasliwal/Library/Android/sdk/tools/proguard/proguard-android.txt
# You can edit the include path and order by changing the proguardFiles
# directive in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# Add any project specific keep options here:

# If your project uses WebView with JS, uncomment the following
# and specify the fully qualified class name to the JavaScript interface
# class:
#-keepclassmembers class fqcn.of.javascript.interface.for.webview {
#   public *;
#}

-renamesourcefileattribute SourceFile
-keepattributes Exceptions,InnerClasses,Signature,Deprecated,SourceFile,LineNumberTable,*Annotation*,EnclosingMethod

-keepclasseswithmembers class in.juspay.mystique.JsInterface {
    public <methods>;
}

-keepclassmembernames class * {
    java.lang.Class class$(java.lang.String);
    java.lang.Class class$(java.lang.String, boolean);
}

-keepclasseswithmembernames class * {
    native <methods>;
}


-keepclassmembers enum * {
    public static **[] values();
    public static ** valueOf(java.lang.String);
}

-keepclassmembers class * implements java.io.Serializable {
    static final long serialVersionUID;
    private static final java.io.ObjectStreamField[] serialPersistentFields;
    private void writeObject(java.io.ObjectOutputStream);
    private void readObject(java.io.ObjectInputStream);
    java.lang.Object writeReplace();
    java.lang.Object readResolve();
}

-keepclasseswithmembers public class in.juspay.mystique.DefaultLogger {
    public <methods>;
}

-keepclasseswithmembers public class in.juspay.mystique.DuiLogger {
    public <methods>;
}

-keepclasseswithmembers public class in.juspay.mystique.DynamicUI {
    public <methods>;
}

-keepclasseswithmembers public interface in.juspay.mystique.ErrorCallback {
    public <methods>;
}

-keepclasseswithmembers public class in.juspay.mystique.DuiInvocationHandler {
    public <methods>;
}

-keepclasseswithmembers public class in.juspay.mystique.InflateView {
    public static void convertAndStoreArray (java.util.ArrayList, java.lang.Class, java.lang.String);
}

-keepclasseswithmembers class in.juspay.mystique.Renderer{
    public android.view.View createView(org.json.JSONObject);
}




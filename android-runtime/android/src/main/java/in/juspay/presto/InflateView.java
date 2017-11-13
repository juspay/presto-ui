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

package in.juspay.presto;

import android.annotation.TargetApi;
import android.app.Activity;
import android.content.Context;
import android.os.Build;
import android.text.Editable;
import android.text.InputFilter;
import android.text.Spanned;
import android.text.TextWatcher;
import android.util.Base64;
import android.util.DisplayMetrics;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.KeyEvent;
import android.view.MotionEvent;
import android.view.View;
import android.widget.AdapterView;
import android.widget.CalendarView;
import android.widget.PopupMenu;
import android.widget.SeekBar;

import org.json.JSONException;
import org.json.JSONObject;

import java.lang.reflect.Array;
import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Hashtable;

import java.util.Map;
import java.util.regex.Pattern;

/**
 * Created by naman_juspay on 9/11/16.
 */

public class InflateView {
    private static float x1,x2; // for swipe handling
    private static float y1, y2; // for swipe handling
    private Activity mContext;
    private PopupMenu popUpMenu;
    private ErrorCallback errCallback;
    private static HashMap<String, Object> state = new HashMap<>();
    private static final String LOG_TAG = InflateView.class.getName();

    private String currViewId = "-1";
    private String lastCommand = "";
    private String currView = "";
    private String fileOrigin = "";

    private DynamicUI dynamicUI;

    // Language Tokens

    private String FUNCTION_ARG_START = ":";
    private String FUNCTION_ARG_SPLIT = ",";
    private Pattern FUNCTION_ARG_SPLIT_ESCAPE = Pattern.compile("(?<!\\\\)" + Pattern.quote(","));
    private String KEYWORD_SPLIT = "->";
    private String ARG_TYPE_SPLIT = "_";
    private String SETTER_EQUALS = "=";
    private Pattern COMMAND_SPLIT = Pattern.compile("(?<!\\\\)" + Pattern.quote(";"));

    private static final Map<Class,Class> PRIMITIVE_TYPES = new Hashtable<>();

    static {
        PRIMITIVE_TYPES.put(Boolean.class, boolean.class);
        PRIMITIVE_TYPES.put(Character.class, char.class);
        PRIMITIVE_TYPES.put(Byte.class, byte.class);
        PRIMITIVE_TYPES.put(Short.class, short.class);
        PRIMITIVE_TYPES.put(Integer.class, int.class);
        PRIMITIVE_TYPES.put(Long.class, long.class);
        PRIMITIVE_TYPES.put(Float.class, float.class);
        PRIMITIVE_TYPES.put(Double.class, double.class);
        PRIMITIVE_TYPES.put(Void.class, void.class);
    }


    private DuiLogger logger;

    //Never make it public - Should not be accessible outside this package
    InflateView(Activity _mContext, DuiLogger _logger, ErrorCallback _errCallback, DynamicUI dynamicUI) {
        this.dynamicUI = dynamicUI;
        mContext = _mContext;
        logger = _logger;
        errCallback = _errCallback;
        // for dynamic proxy
        state.put("duiObj", dynamicUI);
    }

    public static boolean isWrappedPrimitiveType(Class<?> clazz) {
        return PRIMITIVE_TYPES.containsKey(clazz);
    }

    public String getErrorDetails() {
        return currViewId + " - " + currView + "-" + fileOrigin + " - " + lastCommand;
    }

    public Object getStateValFromKey(String key) {
        return state.get(key);
    }

    private Object[] parseArguments(String arguments) {
        ArrayList newArgs = new ArrayList();
        String[] splitArgs;
        if(indexOf(arguments, FUNCTION_ARG_SPLIT, 0) == -1) {
            newArgs.add(getValue(arguments));
        }else {
            splitArgs = FUNCTION_ARG_SPLIT_ESCAPE.split(arguments);
            for(String arg: splitArgs) {
                newArgs.add(getValue(arg));
            }
        }
        return newArgs.toArray();
    }

    private Class[] parseTypeArguments(String arguments) {
        //TODO: refactor this method like parseArguments is
        if(arguments == null)
            return null;
        if(indexOf(arguments, FUNCTION_ARG_SPLIT, 0) != -1) {
            String[] splitArgs = FUNCTION_ARG_SPLIT_ESCAPE.split(arguments);
            if(splitArgs.length > 1 ) {
                Class[] classArray = new Class[splitArgs.length];
                for(int i = 0; i < splitArgs.length; i++) {
                    classArray[i] = getClassType(splitArgs[i]);
                }
                return classArray;
            }
        }
        Class[] singleClassArray = new Class[]{getClassType(arguments)};
        return singleClassArray;
    }

    private <Any> Any getClassType(String toConvert) {
        if(toConvert != null) {
//            logger.d("getClassType!", toConvert);
            String[] toParse = substr(toConvert, ARG_TYPE_SPLIT);
            String type = toParse[0];
            switch (type) {
                case "i":
                    return (Any)int.class;
                case "b":
                    return (Any)boolean.class;
                case "cs":
                    return (Any)CharSequence.class;
                case "f":
                    return (Any)float.class;
                case "dp":
                    return (Any)int.class;
                case "sp":
                    return (Any)Float.class;
                case "l":
                    return (Any) long.class;
                case "get":
                    Object result = state.get(toParse[1]);
                    if(result != null) {
                        return (Any) result.getClass();
                    }else {
                        logger.e("WARNING", " isNull : fn__getClassType - " + toConvert + " "+ getErrorDetails());
                        errCallback.onError("WARNING", " isNull : fn__getClassType - " + toConvert + " "+ getErrorDetails());
                    }
                case "dpf":
                    return (Any) float.class;
                case "strget":
                    return (Any) CharSequence.class;
                case "ctx":
                    return (Any) Context.class;
                case "s":
                    return (Any) String.class;
                case "null":
                    return null;
            }
        } else {
            logger.e("WARNING", " isNull : fn__getClassType -  toConvert" + " "+ getErrorDetails());
            errCallback.onError("WARNING", " isNull : fn__getClassType -  toConvert" + " "+ getErrorDetails());
        }
        return (Any)String.class; // maybe default could be null
    }

    // converting strings to teh required types
    private <Any> Any getValue(String toConvert) {
        String value = null;
        if(toConvert != null) {
            logger.d("getValue!", toConvert);
            String[] toParse = substr(toConvert, ARG_TYPE_SPLIT);
            String type = toParse[0];
            value = toParse[1];
            if(value.indexOf('\\') != -1 && value.indexOf(";") != -1)
                value = value.replace("\\\\;", ";");

            if(value.indexOf('\\') != -1 && value.indexOf("_") != -1)
                value = value.replace("\\\\_", "_");

            if(value.indexOf('\\') != -1 && value.indexOf(":") != -1)
                value = value.replace("\\\\:", ":");

            if(value.indexOf('\\') != -1 && value.indexOf(",") != -1)
                value = value.replace("\\\\,", ",");

            if(value.indexOf('\\') != -1 && value.indexOf("=") != -1)
                value = value.replace("\\\\=", "=");

            if(value != null) {
                switch (type) {
                    case "i":
                        return ((Any) (Integer) Integer.parseInt(value));
                    case "b":
                        return (Any) (Boolean) Boolean.parseBoolean(value);
                    case "f":
                        return (Any) (Float) Float.parseFloat(value);
                    case "s":
                        return (Any) value;
                    case "sp":
                        return (Any) (Float) (Float.parseFloat(value) * mContext.getResources().getDisplayMetrics().scaledDensity);
                    case "dp":
                        return (Any) (Integer) dpToPx(Integer.parseInt(value));
                    case "dpf":
                        return (Any) (Float) dpToPx(Float.parseFloat(value));
                    case "l":
                        return (Any) (Long) Long.parseLong(value);
                    case "get":
                        return (Any) state.get(value);
                    case "ctx":
                        return (Any) mContext;
                    case "null":
                        return null;
                    case "strget":
                        return (Any) (state.get(value) + "");
                }
            }else {
                logger.e("WARNING", " isNull : fn__getValue - value" + " " + getErrorDetails());
                errCallback.onError("WARNING", " isNull : fn__getValue - value" + " " + getErrorDetails());
            }
        }else {
            logger.e("WARNING", " isNull : fn__getValue - value" + " " + getErrorDetails());
            errCallback.onError("WARNING", " isNull : fn__getValue - value" + " " + getErrorDetails());
        }
        return (Any) value;
    }

    public int dpToPx(int dp) {
        if(dp > 0) {
            DisplayMetrics displayMetrics = mContext.getResources().getDisplayMetrics();
            int px = Math.round(dp * displayMetrics.density);
            return px;
        }else {
            return 0;
        }
    }

    public float dpToPx(float dp) {
        if(dp > 0) {
            DisplayMetrics displayMetrics = mContext.getResources().getDisplayMetrics();
            return Math.round(dp * displayMetrics.density);
        }else {
            return 0;
        }
    }

    private int indexOf(String s, String pattern, int startIndex) {
        int index = s.substring(startIndex).indexOf(pattern);
        if (index != -1 && index != 0 && index < s.length()) {
            if (s.charAt(index+startIndex - 1) == '\\'){
                return indexOf(s, pattern, index + startIndex + pattern.length());
            }
        }
        if(index == -1) {
            return index;
        } else {
            return index + startIndex;
        }
    }

    private String[] substr(String toSubStr, String pattern) {
        int index = indexOf(toSubStr, pattern, 0);
        if(index == -1) {
            return new String[]{toSubStr};
        }
        String [] parts = new String[2];
        parts[0] = toSubStr.substring(0, index);
        parts[1] = toSubStr.substring(index+pattern.length());
        return parts;

    }

    private Object runCommand(Object instance, Object result, String command) throws Exception {
//        logger.d(LOG_TAG, command);
        lastCommand = command;
        String argsDetails = null;
        if (indexOf(command, KEYWORD_SPLIT, 0) != -1) {
            String keyword = substr(command, KEYWORD_SPLIT)[0];
            String key = null;
            String classMethodDetails = null;
            String methodOrClassName = null;
            // get_key
            if (indexOf(keyword, ARG_TYPE_SPLIT, 0) != -1 && keyword.substring(0, 3).equals("get")) {
                String[] parts = substr(keyword, ARG_TYPE_SPLIT);
                key = parts[1];
                keyword = parts[0];
            }
            if (indexOf(command, FUNCTION_ARG_START, 0) != -1) {
                classMethodDetails = substr(command, KEYWORD_SPLIT)[1];
                String[] parts = substr(classMethodDetails, FUNCTION_ARG_START);
                methodOrClassName = parts[0];
                argsDetails = parts[1];
            } else {
                classMethodDetails = substr(command, KEYWORD_SPLIT)[1];
                methodOrClassName = classMethodDetails;
            }
            Method toInvoke = null;
            switch (keyword) {
                case "this":
                    if (argsDetails != null) {
                        toInvoke = findMethodInClass(instance.getClass(), classMethodDetails);
                        if (toInvoke != null) {
                            result = toInvoke.invoke(instance, parseArguments(argsDetails));
                        } else {
                            logger.e("WARNING", " isNull : fn__runCommand - classMethodDetails  " + classMethodDetails + " " + getErrorDetails());
                            errCallback.onError("WARNING", " isNull : fn__runCommand - classMethodDetails  " + classMethodDetails + " " + getErrorDetails());
                        }
                    } else {
                        toInvoke = findMethodInClass(instance.getClass(), classMethodDetails);
                        if (toInvoke != null) {
                            result = toInvoke.invoke(instance, null);
                        } else {
                            logger.e("WARNING", " isNull : fn__runCommand - this  classMethodDetails " + classMethodDetails + " " + getErrorDetails());
                            errCallback.onError("WARNING", " isNull : fn__runCommand - this  classMethodDetails " + classMethodDetails + " " + getErrorDetails());
                        }
                    }
                    break;
                case "parent":
                    if (argsDetails != null) {
                        toInvoke = findMethodInClass(instance.getClass(), classMethodDetails);
                        if (toInvoke != null) {
                            result = toInvoke.invoke(instance, parseArguments(argsDetails));
                        } else {
                            logger.e("WARNING", " isNull : fn__runCommand - parent  classMethodDetails " + classMethodDetails + " " + getErrorDetails());
                            errCallback.onError("WARNING", " isNull : fn__runCommand - parent  classMethodDetails " + classMethodDetails + " " + getErrorDetails());
                        }
                    } else {
                         toInvoke = findMethodInClass(instance.getClass(), classMethodDetails);
                        if (toInvoke != null) {
                            result = toInvoke.invoke(instance, null);
                        } else {
                            logger.e("WARNING", " isNull : fn__runCommand - parent  classMethodDetails " + classMethodDetails + " " + getErrorDetails());
                            errCallback.onError("WARNING", " isNull : fn__runCommand - parent classMethodDetails  " + classMethodDetails + " " + getErrorDetails());
                        }
                    }

                    break;
                case "ctx":
                    if (argsDetails != null) {
//                        logger.d(LOG_TAG, "ctx " + classMethodDetails);
                        toInvoke = findMethodInClass(mContext.getClass(), classMethodDetails);
                        if (toInvoke != null) {
                            result = toInvoke.invoke(mContext, parseArguments(argsDetails));
                        } else {
                            logger.e("WARNING", " isNull : fn__runCommand - ctx  classMethodDetails " + classMethodDetails + " " + getErrorDetails());
                            errCallback.onError("WARNING", " isNull : fn__runCommand - ctx  classMethodDetails " + classMethodDetails + " " + getErrorDetails());
                        }
                    } else {
                        toInvoke = findMethodInClass(mContext.getClass(), classMethodDetails);
                        if (toInvoke != null) {
                            result = toInvoke.invoke(mContext, null);
                        } else {
                            logger.e("WARNING", " isNull : fn__runCommand - ctx classMethodDetails  " + classMethodDetails + " " + getErrorDetails());
                            errCallback.onError("WARNING", " isNull : fn__runCommand - ctx classMethodDetails  " + classMethodDetails + " " + getErrorDetails());
                        }
                    }
                    break;
                case "get":
//                    logger.d(LOG_TAG, "getting " + key);
                    if (key != null) {
                        Object toRunOn = state.get(key);
                        if (indexOf(methodOrClassName, ARG_TYPE_SPLIT, 0) == -1 && toRunOn != null) {
                            if (argsDetails != null) {
                                toInvoke = findMethodInClass(toRunOn.getClass(), classMethodDetails);
                                if (toInvoke != null) {
                                    result = toInvoke.invoke(toRunOn, parseArguments(argsDetails));
                                } else {
                                    logger.e("WARNING", " isNull : fn__runCommand - get classMethodDetails " + classMethodDetails + " " + getErrorDetails());
                                    errCallback.onError("WARNING", " isNull : fn__runCommand - get classMethodDetails " + classMethodDetails + " " + getErrorDetails());
                                }
                            } else {
                                toInvoke = findMethodInClass(toRunOn.getClass(), classMethodDetails);
                                if (toInvoke != null) {
                                    result = toInvoke.invoke(toRunOn, null);
                                } else {
                                    logger.e("WARNING", " isNull : fn__runCommand - get classMethodDetails : " + classMethodDetails + " " + getErrorDetails());
                                    errCallback.onError("WARNING", " isNull : fn__runCommand - get classMethodDetails : " + classMethodDetails + " " + getErrorDetails());
                                }
                            }
                        } else {
                            if (toRunOn != null) {
                                String fieldName = substr(methodOrClassName, ARG_TYPE_SPLIT)[1];
                                return findAndSetField(state.get(key), fieldName, substr(classMethodDetails, FUNCTION_ARG_START)[1]);
                            } else {
                                logger.e("WARNING", " isNull : fn__runCommand - get_" + key + " is null" + " " + getErrorDetails());
                                errCallback.onError("WARNING", " isNull : fn__runCommand - get_" + key + " is null" + " " + getErrorDetails());
                            }
                        }
                    }
                    break;
                default:
                    // var_fieldName
                    if (indexOf(methodOrClassName, "var_", 0) != -1) {
                        String fieldName = substr(methodOrClassName, ARG_TYPE_SPLIT)[1];
                        Field fieldToChange = Class.forName(methodOrClassName)
                                .getDeclaredField(fieldName);
                        fieldToChange.setAccessible(true);
                        fieldToChange.set(null, getValue(substr(classMethodDetails, FUNCTION_ARG_START)[1]));
                    } else {
                        // class->new:arguments
                        if (classMethodDetails.equals("new") || substr(classMethodDetails, FUNCTION_ARG_START)[0].equals("new")) {
                            if (argsDetails != null) {
                                if (keyword.equals("in.juspay.presto.DuiInvocationHandler")) {
                                    Object[] args = parseArguments(argsDetails);
                                   // result = new DuiInvocationHandler(args[0], this.dynamicUI);
                                } else {
                                    Class[] argClass = parseTypeArguments(argsDetails);
                                    Constructor[] constructors = Class.forName(keyword).getConstructors();
                                    for (int i = 0; i < constructors.length; i++) {
                                        if (constructors[i].getParameterTypes().length == getArgsLength(argsDetails)
                                                && matchTypes(constructors[i].getParameterTypes(), argClass)) {
                                            result = constructors[i].newInstance(parseArguments(argsDetails));
                                            break;
                                        }
                                    }
                                }
//                                result = Class.forName(keyword).getConstructor(parseTypeArguments(argsDetails)).newInstance(parseArguments(argsDetails));
                            } else {
                                result = Class.forName(keyword).newInstance();
                            }
                        } else {
                            // static function in class
                            toInvoke = findMethodInClass(Class.forName(keyword), classMethodDetails);
                            if (toInvoke != null) {
                                if (toInvoke.getName().equals("forName")) {
                                    result = Class.forName((String) getValue(argsDetails));
                                } else {
                                    result = toInvoke.invoke(null, parseArguments(argsDetails));
                                }
                            }
                        }
                    }
                    break;
            }
        } else {
            // just run it on the instance
            if (result == null) {
                if (indexOf(command, FUNCTION_ARG_START, 0) != -1) {
                    argsDetails = substr(command, FUNCTION_ARG_START)[1];
                    result = findMethodInClass(instance.getClass(), command)
                            .invoke(instance, parseArguments(argsDetails));
                } else {
                    result = findMethodInClass(instance.getClass(), command).invoke(instance, null);
                }
            } else {
                if (indexOf(command, FUNCTION_ARG_START, 0) != -1) {
                    argsDetails = substr(command, FUNCTION_ARG_START)[1];
                    result = findMethodInClass(result.getClass(), command).invoke(result, parseArguments(argsDetails));
                } else {
                    result = findMethodInClass(result.getClass(), command).invoke(result, null);
                }
            }
        }
        return result;
    }

    public Object parseAndRunPipe(Object instance, String toParse) throws Exception {
        String[] commands = COMMAND_SPLIT.split(toParse);
        Object result = null;
        for(String command: commands) {
            if(!command.equals("")) {
                if(indexOf(command,SETTER_EQUALS,0) != -1) {
                    String[] parts = substr(command, SETTER_EQUALS);
                    String setter = parts[0];
                    String stateName = substr(setter, ARG_TYPE_SPLIT)[1];
                    Object output = runCommand(instance, result, parts[1]);
                    state.put(stateName, output);
                    logger.d(LOG_TAG,"setting " + stateName + " to " + output);
                }else {
                    result = runCommand(instance, result, command);
                }
            }
        }
        // remove previous keys maybe
        return instance;
    }

    public static void convertAndStoreArray(ArrayList arr, Class toConvertTo, String stateKey) {
        int length = arr.size();
        Object newArr = Array.newInstance(toConvertTo, length);
        for(int i = 0; i < length; i++) {
            Array.set(newArr, i, arr.get(i));
        }
        state.put(stateKey, newArr);
    }

    private int getArgsLength(String args) {
        return  FUNCTION_ARG_SPLIT_ESCAPE.split(args).length;
    }

    private boolean matchTypes(Class<?>[] methodClassTypes, Class<?>[] arguments) throws Exception {
        for(int i = 0; i < methodClassTypes.length; i++){
            // if real function accepts Object type and our type is non primitive we should consider it as true
            if(arguments[i] != null && methodClassTypes[i] != null && !(methodClassTypes[i].equals(Object.class) && !arguments[i].isPrimitive())) {
                if(!methodClassTypes[i].equals(arguments[i])) {
                    if(methodClassTypes[i].isPrimitive() && !arguments[i].isArray()) { // isArray check as for spinners it is reaching inside - root cause not found yet
                        Class properClass = null;
                        try{
                            Field type =  arguments[i].getField("TYPE");
                            properClass = (Class) type.get(null);
                            if(!properClass.equals(methodClassTypes[i])){
                                return false;
                            }
                        }catch(Exception e) {
                            if(e.getMessage().equals("java.lang.NoSuchFieldException")) {
                                return false;
                            }
                        }
                    }else if(methodClassTypes[i].equals(ClassLoader.class)){ // special case added for proxy class Loader
                        if(arguments[i].getName().equals("dalvik.system.PathClassLoader")) {
                            return true;
                        }
                    }else if(!(methodClassTypes[i].equals(arguments[i]))
                            || !methodClassTypes[i].isAssignableFrom(arguments[i])) {
                        return false;
                    }
                }
            }
        }
        return true;
    }


    private Method tryExactMatch(Class c, String functionName, Class[] args) throws Exception {
        return c.getMethod(functionName, args);
    }

    private Method trySingleArgumentDeepMatch(Class c, String functionName, Class arg) {

        // First check if the argument is a primitive type wrapped in an object
        if(isWrappedPrimitiveType(arg)) {
            try {
                return c.getMethod(functionName, PRIMITIVE_TYPES.get(arg));
            } catch (NoSuchMethodException e) {/* continue to match super classes.. yeah even for wrapped types */}
        }

        // Check if any of arg's super classes / super interfaces match the method
        do {
            for(Class iface : arg.getInterfaces()) {
                try {
                    return c.getMethod(functionName, iface);
                } catch (NoSuchMethodException e) { /* continue loop */ }
            }

            try {
                return c.getMethod(functionName, arg);
            } catch (NoSuchMethodException e) { /* continue loop */ }
        } while((arg = arg.getSuperclass()) != null);

        logger.e(LOG_TAG, "Never reach here");
        return null;
    }

    // Try to find a matching function were any argument can be a super type of args in given specification
    private Method tryMultiAgrumentDeepMatch(Class c, String functionName, Class[] arguments) throws Exception {
//        logger.d(LOG_TAG, "tryMultiAgrumentDeepMatch reached. Beware slow function.. " + c.toString() + " : " + functionName + " : " + arguments.length);

        Method[] methodList = c.getMethods(); // This call is very CPU intensive!!
        for(Method inheritedMethod : methodList) {
            if(inheritedMethod.getName().equals(functionName) && arguments != null){
                if(inheritedMethod.getParameterTypes().length == arguments.length && matchTypes(inheritedMethod.getParameterTypes(), arguments)) {
                    return inheritedMethod;
                }
            }
        }
        return null;
    }

    public static void reset() {
        state.clear();
    }

    static class Cmd {
        Class clazz;
        String functionName;
        Class[] args;

        public Cmd(Class clazz, String functionName, Class[] args) {
            this.clazz = clazz;
            this.functionName = functionName;
            this.args = args;
        }

        @Override
        public boolean equals(Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            Cmd cmd = (Cmd) o;

            if (!clazz.equals(cmd.clazz)) return false;
            if (!functionName.equals(cmd.functionName)) return false;
            // Probably incorrect - comparing Object[] arrays with Arrays.equals
            return Arrays.equals(args, cmd.args);
        }

        @Override
        public int hashCode() {
            int result = clazz.hashCode();
            result = 31 * result + functionName.hashCode();
            result = 31 * result + (args != null ? Arrays.hashCode(args) : 0);
            return result;
        }
    }

    HashMap<Cmd,Method> functionCache = new HashMap<Cmd,Method>();

    private Method findMethodInClass(Class c, String methodSignature) throws Exception {
        if(c == null) return null;
//        logger.d(LOG_TAG, "findMethodInClass(): " + c.getName() + ", signature: " + methodSignature);

        String functionName = null;
        String arguments = null;
        if(indexOf(methodSignature, FUNCTION_ARG_START, 0) != -1) {
            String[] methodDetails = substr(methodSignature, FUNCTION_ARG_START);
            functionName = methodDetails[0];
            arguments = methodDetails[1];
        }else {
            functionName = methodSignature;
        }

        Class[] args = arguments != null ? parseTypeArguments(arguments): null;

        Cmd cmd = new Cmd(c,functionName,args);

        if(functionCache.containsKey(cmd)) {
            return functionCache.get(cmd);
        } else {
            Method m;
            try {
                m = tryExactMatch(c, functionName, args);
            } catch (NoSuchMethodException e) {
                if(args != null && args.length == 1)
                    m = trySingleArgumentDeepMatch(c, functionName, args[0]);
                else
                    m = tryMultiAgrumentDeepMatch(c, functionName, args); // Last fallback.. consumes CPU!
            }
            functionCache.put(cmd, m);
            return m;
        }
    }

    private Object findAndSetField(Object instance, String fieldName, String arg) throws JSONException, IllegalAccessException {
        Field fieldToSet = null;
        try {
            fieldToSet = instance.getClass().getField(fieldName);
        } catch (NoSuchFieldException e) {
            Field[] fieldsList =  instance.getClass().getFields();
            for(Field currentField : fieldsList) {
                if(currentField.getName().equals(fieldName)){
                    fieldToSet = currentField;
                }
            }
        }
        if(fieldToSet != null){
            fieldToSet.set(instance, getValue(arg));
        }else {
            logger.d(LOG_TAG, "Couldn't set field for " + fieldName);
        }
        return instance;
    }

    public void setCurrViewId(String id) {
        this.currViewId = id;
    }

    public void setCurrView(String viewType) {
        this.currView = viewType;
    }

    public void setFileOrigin (String filename) {
        this.fileOrigin = filename;
    }

    public void parseKeys(String key, JSONObject properties, Object instance) throws Exception {
        try {
            if (key.equals("pattern")) {
                Method method = instance.getClass().getMethod("setFilters", new Class[]{InputFilter[].class});
                String pattern = properties.getString("pattern");
                String[] patternArr = pattern.split(",");
                final String regex = patternArr[0];
                int patternLength;

                if (patternArr.length == 1) {
                    patternLength = 10000;
                } else {
                    patternLength = Integer.parseInt(patternArr[1].trim());
                }

                InputFilter filter = new InputFilter() {
                    @Override
                    public CharSequence filter(CharSequence source, int start, int end, Spanned dest, int dstart, int dend) {
                        for (int i = start; i < end; ++i) {
                            if (!Pattern.compile(regex).matcher(String.valueOf(source.charAt(i))).matches()) {
                                return "";
                            }
                        }
                        return null;
                    }
                };
                InputFilter[] inpf = new InputFilter[]{filter, new InputFilter.LengthFilter(patternLength)};
                method.invoke(instance, new Object[]{inpf});
            }

            if (key.equals("onKeyUp")) {
                final String js = properties.getString("onKeyUp");
                Method onClickMethod = instance.getClass().getMethod("setOnKeyListener", View.OnKeyListener.class);
                onClickMethod.invoke(instance, new View.OnKeyListener() {
                    @Override
                    public boolean onKey (View view, int i, KeyEvent k) {
                        dynamicUI.addJsToWebView("window.callUICallback('" + js + "','" + i + "');");
                        return false;
                    }
                });
            }

            if (key.equals("onLongPress")) {
                final String js = properties.getString("onLongPress");
                Method onClickMethod = instance.getClass().getMethod("setOnLongClickListener", View.OnLongClickListener.class);
                onClickMethod.invoke(instance, new View.OnLongClickListener() {
                    @Override
                    public boolean onLongClick(View view) {
                        dynamicUI.addJsToWebView("window.callUICallback('" + js + "');");
                        return false;
                    }
                });
            }

            if (key.equals("onClick")) {
                final String js = properties.getString("onClick");
                Method onClickMethod = instance.getClass().getMethod("setOnClickListener", View.OnClickListener.class);
                onClickMethod.invoke(instance, new View.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        dynamicUI.addJsToWebView("window.callUICallback('" + js + "');");
                    }
                });
            }

            if (key.equals("onItemClick")) {
                final String js = properties.getString("onItemClick");
                Method onChangeMethod = instance.getClass().getMethod("setOnItemSelectedListener", AdapterView.OnItemSelectedListener.class);
                onChangeMethod.invoke(instance, new AdapterView.OnItemSelectedListener() {
                    @Override
                    public void onItemSelected(AdapterView<?> parent, View view, int position, long id) {
                        dynamicUI.addJsToWebView("window.callUICallback('" + js + "', '" + parent.getId() + "' ,'" + view.getId() + "','" + position + "', '" + id + "');");
                    }

                    @Override
                    public void onNothingSelected(AdapterView<?> parent) {

                    }
                });

            }

            if (key.equals("onChange")) {
                Method onChangeMethod = instance.getClass().getMethod("addTextChangedListener", TextWatcher.class);
                final String js = properties.getString("onChange");
                onChangeMethod.invoke(instance, new TextWatcher() {
                    @Override
                    public void beforeTextChanged(CharSequence s, int start, int count, int after) {

                    }

                    @Override
                    public void onTextChanged(CharSequence s, int start, int before, int count) {
                        dynamicUI.addJsToWebView("window.callUICallback('" + js + "', '" + Base64.encodeToString(s.toString().getBytes(), Base64.DEFAULT) + "');");
                    }

                    @Override
                    public void afterTextChanged(Editable s) {

                    }
                });
            }


            if (key.equals("onFocus")) {
                Method onFocusChangeMethod = instance.getClass().getMethod("setOnFocusChangeListener", View.OnFocusChangeListener.class);
                final String js = properties.getString("onFocus");
                onFocusChangeMethod.invoke(instance, new View.OnFocusChangeListener() {
                    @Override
                    public void onFocusChange(View v, boolean hasFocus) {
                        dynamicUI.addJsToWebView("window.callUICallback('" + js + "','" + hasFocus + "');");
                    }
                });
            }

            if (key.equals("onTouch")) {
                final String jsFunc = properties.getString("onTouch");
                Method onTouchMethod = instance.getClass().getMethod("setOnTouchListener", View.OnTouchListener.class);
                onTouchMethod.invoke(instance, new View.OnTouchListener() {

                    @Override
                    public boolean onTouch(View v, MotionEvent event) {
                        String js = "window.callUICallback('" + jsFunc + "','" + event.getX() + "','" + event.getY() + "');";
                        dynamicUI.addJsToWebView(js);
                        return false;
                    }
                });
            }

            if (key.equals("onDateChange")) {
                final String jsFunc = properties.getString("onDateChange");
                Method onTouchMethod = instance.getClass().getMethod("setOnDateChangeListener", CalendarView.OnDateChangeListener.class);
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.HONEYCOMB) {
                    onTouchMethod.invoke(instance, new CalendarView.OnDateChangeListener() {
                        @Override
                        public void onSelectedDayChange(CalendarView view, int year, int month, int dayOfMonth) {
                            String js = "window.callUICallback('" + jsFunc + "','" + year + "','" + month + "','" + dayOfMonth + "');";
                            dynamicUI.addJsToWebView(js);
                        }
                    });
                }
            }

            if (key.equals("onSwipe")) {
                final String jsFunc = properties.getString("onSwipe");
                Method onTouchMethod = instance.getClass().getMethod("setOnTouchListener", View.OnTouchListener.class);
                onTouchMethod.invoke(instance, new View.OnTouchListener() {

                    @Override
                    public boolean onTouch(View v, MotionEvent event) {
                        float THRESHOLD = 100;
                        String swipeType = "0";
                        switch (event.getAction()) {
                            case MotionEvent.ACTION_DOWN: {
                                x1 = event.getX();
                                y1 = event.getY();
                                break;
                            }
                            case MotionEvent.ACTION_UP: {
                                x2 = event.getX();
                                y2 = event.getY();
                                float delX = x2 - x1;
                                float delY = y2 - y1;
                                float angle = (float) Math.toDegrees(Math.atan2(delY, delX));
                                angle = (angle < 0)? angle + 360f : angle;
                                if((angle >= 45 && angle <= 135) || (angle >=225 && angle <= 315)) {
                                    if (y2 - y1 > THRESHOLD) {
                                        swipeType = "2";
                                    } else if (y1 - y2 > THRESHOLD) {
                                        swipeType = "-2";
                                    }
                                } else {
                                    if (x2 - x1 > THRESHOLD) {
                                        swipeType = "1";
                                    } else if (x1 - x2 > THRESHOLD) {
                                        swipeType = "-1";
                                    }
                                }
                                break;
                            }
                        }

                        String js = "window.callUICallback('" + jsFunc + "','" + swipeType + "');";
                        dynamicUI.addJsToWebView(js);

                        return true;
                    }
                });
            }

            if(key.equals("popupMenu") && Build.VERSION.SDK_INT >= Build.VERSION_CODES.HONEYCOMB) {
                // split on , with escaped ,
                String[] popupMenu = properties.getString("popupMenu").split(FUNCTION_ARG_SPLIT_ESCAPE.toString());

                final String callbackName = properties.getString("onMenuItemClick");
                popUpMenu = new PopupMenu(mContext, (View)instance);
                for (int i = 0; i < popupMenu.length; i++) {
                    if(popupMenu[i].indexOf("\\") != -1 && popupMenu[i].indexOf(",") != -1) {
                        popupMenu[i] = popupMenu[i].replace("\\\\,", ",");
                    }
                    popUpMenu.getMenu().add(Menu.NONE, i, Menu.NONE, popupMenu[i]);
                }
                popUpMenu.setOnMenuItemClickListener(new PopupMenu.OnMenuItemClickListener() {
                    @Override
                    public boolean onMenuItemClick(MenuItem item) {
                        dynamicUI.addJsToWebView("window.callUICallback('" + callbackName + "', '"+ item.getItemId() +"');");
                        return true;
                    }
                });

                final PopupMenu finalPopup = popUpMenu;
                Log.d(LOG_TAG, "parseKeys: "+(View)instance);
                ((View)instance).setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.HONEYCOMB) {
                            finalPopup.show();
                        }
                    }
                });
            }

            if (key.equals("onSeekBarChanged")) {
                final String jsFunc = properties.getString("onSeekBarChanged");
                Method setOnSeekBarChangeListener = instance.getClass().getMethod("setOnSeekBarChangeListener", SeekBar.OnSeekBarChangeListener.class);
                setOnSeekBarChangeListener.invoke(instance, new SeekBar.OnSeekBarChangeListener() {

                    @Override
                    public void onProgressChanged(SeekBar seekBar, int i, boolean b) {
                        String js = "window.callUICallback('" + jsFunc + "', 'PROGRESS_CHANGED', '" + i + "','" + b + "');";
                        dynamicUI.addJsToWebView(js);
                    }

                    @Override
                    public void onStartTrackingTouch(SeekBar seekBar) {
                        String js = "window.callUICallback('" + jsFunc + "', 'START_TRACKING_TOUCH');";
                        dynamicUI.addJsToWebView(js);
                    }

                    @Override
                    public void onStopTrackingTouch(SeekBar seekBar) {
                        String js = "window.callUICallback('" + jsFunc + "', 'STOP_TRACKING_TOUCH');";
                        dynamicUI.addJsToWebView(js);
                    }
                });
            }
            
            if (key.equals("runInUI")) {
                String value = properties.getString(key);
                instance = parseAndRunPipe(instance, value);
            }

            if (key.equals("afterRender")) {
                String id = properties.getString("id");
                String js = "javascript:window.callUICallback('" + properties.getString("afterRender") + "', '" + id + "');";
                dynamicUI.addJsToWebView(js);
            }

            if (key.equals("feedback")) {
                // for clickFeedBack
                String id = properties.getString("id");
                String js = "javascript:window.callUICallback('" + properties.getString("feedback") + "', '" + id + "', '" + "feedback" + "');";
                dynamicUI.addJsToWebView(js);
            }

        } catch (Exception e) {
            if (e != null) {
                String errName = e.getClass().getName();
                errCallback.onError("WARNING", " excep: fn__parseKeys  - " + errName + " - " + getErrorDetails());
            }
        }
    }
    @TargetApi(Build.VERSION_CODES.ICE_CREAM_SANDWICH)
    public void dismissPopUp(){
        mContext.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                popUpMenu.dismiss();
            }
        });
    }
}

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

var mapParams = require('./mapParams');
var objMap = require('./objMap');
var callbackMapper  = require("../common/callbackMapper")

var globalObjMap = {};
var command = "";
var elementType;
var getSetType;

function isURL(str) {
  try {
    var url = new URL(str);
    return (str.indexOf(".") != -1);
  } catch(err) {
    return false;
  }
}

function attachFeedback(config, keys, i) {
  var feedbackFn = function() {};

  if (typeof config.feedback !== "undefined") {
    if (config.feedback == "true") {
      config.feedback = callbackMapper.map(feedbackFn);
      window.__ALL_ONCLICKS.push(config.feedback);
    }

    return;
  }

  if (config.onClick) {
    config.feedback = callbackMapper.map(feedbackFn);
    window.__ALL_ONCLICKS.push(config.feedback);
  }
}

function getConfigGroups(config) {
  var groups = {};
  var objType;
  var isAnimation;
  var widthFound = 0;
  var heightFound = 0;
  let paddingVal = config["padding"];
  if (config.stroke)
    delete config.padding;
  if (config.margin) {
    let margin = config.margin.split(',').map(a => a*1);
    config.marginStart = margin[0] + '';
    config.marginEnd = margin[2] + '';
  }
  var keys =  Object.keys(config);
  var proxyFnName;
   for (var i = 0; i<keys.length; i++) {
    attachFeedback(config, keys, i);

    if (typeof config[keys[i]] == "undefined" || config[keys[i]] == null) {
      delete config[keys[i]];
    } else if (typeof config[keys[i]] == "function") {
      config[keys[i]] = callbackMapper.map(config[keys[i]]);


      if (keys[i] == "onClick"){
        window.__FN_MAP[config[keys[i]]] = config.text || config.id || "";

        if(!config.allowMultipleClicks || config.allowMultipleClick=="false"){
          window.__THROTTELED_ACTIONS.push(config[keys[i]]);
        }

      }
    } else {
      if (keys[i].indexOf('_') && keys[i].split('_')[0] == 'a') {
        objType = mapParams[keys[i].split('_')[1]];
        isAnimation = true;
      } else {
        objType = mapParams[keys[i]];
        isAnimation = false;
      }

      if (keys[i] == "stroke") {
        let padding = [0,0,0,0];

        if (paddingVal)
          padding = paddingVal.split(',').map(a => a*1);

        let strokeValue = config["stroke"].split(',')[0] * 1;
        padding = padding.map(dim => dim + strokeValue);
        config["padding"] = padding.join(',');
        keys.push("padding");
      }

      if (objType) {
        if (isAnimation){
          if (!groups['ANIMATION'])
          groups['ANIMATION'] = [];


          groups['ANIMATION'].push({key: keys[i].split('_')[1], value: config[keys[i]]})
        } else {
          if (!groups[objType.inVokedIn])
          groups[objType.inVokedIn] = [];

          if (keys[i] == "width")
          widthFound ++;
          if (keys[i] == "height")
          heightFound ++;

          groups[objType.inVokedIn].push({key: keys[i], value: config[keys[i]]})
        }

        if (keys[i]!=="pattern" && keys[i] !== "root" && keys[i] !== "id" && keys[i]!== "__filename") {
          delete config[keys[i]];
        }
      }
    }
  }

  if (getSetType == "set") {
    if (!groups.PARAMS)
    groups.PARAMS = [];

    if (!widthFound)
    groups.PARAMS.push({key: "width", value: 'wrap_content'});
    if (!heightFound)
    groups.PARAMS.push({key: "height", value: 'wrap_content'});
  }

  return groups;
}

function getCtr(viewGroup) {
  var viewGroupMap =  {
    'linearLayout': 'android.widget.LinearLayout$LayoutParams->new',
    'coordinatorLayout': 'androidx.coordinatorlayout.widget.CoordinatorLayout$LayoutParams->new',
    'scrollView': 'android.widget.LinearLayout$LayoutParams->new',
    'horizontalScrollView': 'android.widget.LinearLayout$LayoutParams->new',
    'relativeLayout': 'android.widget.RelativeLayout$LayoutParams->new',
    'frameLayout': 'android.widget.FrameLayout$LayoutParams->new',
    'toolbar': 'android.support.v7.widget.Toolbar$LayoutParams->new',
    'collapsingToolbarLayout': 'androidx.coordinatorlayout.widget.CoordinatorLayout$LayoutParams->new',
    'appBarLayout': 'android.support.design.widget.AppBarLayout$LayoutParams->new',
    'view': 'android.widget.LinearLayout$LayoutParams->new',
    'tabLayout': 'android.widget.LinearLayout$LayoutParams->new',
    'viewPager': 'android.support.v4.view.ViewPager$LayoutParams->new',
    'listView': 'android.widget.LinearLayout$LayoutParams->new',
    'expandableListView': 'android.widget.LinearLayout$LayoutParams->new',
    'recyclerView': 'android.support.v7.widget.RecyclerView$LayoutParams->new',
    'ratingBar': 'android.widget.LinearLayout$LayoutParams->new',
    'accordionLayout': 'android.widget.FrameLayout$LayoutParams->new',
    'swypeLayout': 'android.widget.FrameLayout$LayoutParams->new',
    'swypeScroll': 'android.widget.LinearLayout$LayoutParams->new',
    "shimmerFrameLayout": "android.widget.FrameLayout$LayoutParams->new",
    "bottomSheetLayout": 'android.widget.FrameLayout$LayoutParams->new'
  };

  if(!viewGroupMap[viewGroup]) {
    throw new Error("No such view group found : " + viewGroup);
  }

  return  viewGroupMap[viewGroup];
}

function handleSpecialChars(value) {
  value =  value.indexOf(',')>-1?value.replace(/\,/g, '\\\\,'):value;
  value =  value.indexOf(':')>-1?value.replace(/\:/g, '\\\\:'):value;
  value =  value.indexOf(':')>-1?value.replace(/\=/g, '\\\\='):value;
  value =  value.indexOf(';')>-1?value.replace(/\;/g, '\\\\;'):value;

  return value;
}

function appendArgs(attrs, obj) {
  if (!obj.values)
  return "";

  var args = "";
  var value = (attrs.key == "text" || attrs.key == "hint")
    ?attrs.value:attrs.value.replace(/ /g,'');

  var incomingArgs;
  if (attrs.key == "text" || attrs.key == "hint") {
    incomingArgs = [];
    incomingArgs.push(handleSpecialChars(value));

  } else {
    incomingArgs = value.split(',');
  }

  for  (var i =0 ;i<obj.values.length; i++) {
    args +=  obj.values[i].type + '_';

    if (obj.dontMap)
    args += incomingArgs[i] + ',';
    else  {
      if (obj.values[i].dontMap) {
        args += incomingArgs[i] + ',';
      } else if (attrs.key == "width" || attrs.key == "height") {
        if (!isNaN(incomingArgs[i]*1))
        args = 'dp_' + incomingArgs[i] + ',';
        else
        args += obj.values[i][incomingArgs[i]] + ',';
      } else {
        args += obj.values[i][incomingArgs[i]] + ',';
      }
    }
  }

  return args.substring(0, args.length-1);
}

function prepareCtr(attrs, belongsTo) {
  var obj = objMap[belongsTo];
  var ctr = globalObjMap[belongsTo].ctr;
  var reqAttrs;

  if (getSetType == "get" && (belongsTo == "ANIMATION" || belongsTo == "DRAWABLE" || belongsTo == "PARAMS")) {
    return ctr;
  }

  if (!obj || !obj.required)
  return ctr

  reqAttrs = obj.required.split(',');

  ctr += ':';

  for (var i =0; i<reqAttrs.length; i++) {
    for (var j=0; j<attrs.length; j++) {
      if (reqAttrs[i].trim() == attrs[j].key)  {
        ctr += appendArgs(attrs[j], mapParams[reqAttrs[i].trim()]) + ',';
      }
    }
  }

  return ctr.substring(0, ctr.length - 1);
}

function parseHtml(text) {
  return 'set_html=android.text.Html->fromHtml:s_' + text + ';';
}

function parseColor(color, setterName) {
  if (!setterName)
  setterName = 'set_colorInt';
  return setterName + '=android.graphics.Color->parseColor:s_' + color + ';';
}

function mashThis(attrs, obj, belongsTo, transformFn, allProps, type) {
  if (getSetType == "get" && (attrs.key == "width" || attrs.key == "height")) {
    // get case i.e during patch
    if(!isNaN(attrs.value * 1)) {
      return 'get_PARAMS->' + obj.varName + ':dp_' + attrs.value + ';get_view->setLayoutParams:get_PARAMS ';
    } else {
      return 'get_PARAMS->' + obj.varName + ':i_' + mapParams[attrs.key].values[0][attrs.value] + ';get_view->setLayoutParams:get_PARAMS ';
    }
  } else if(attrs.key == "width" || attrs.key == "height") {
    // set case i.e first render
    return '';
  }

  var beforeCmd = "";
  var afterCmd = "";
  var prePend = '';
  var currTransVal;
  var color;
  var arr = [];
  var res;
  var values;

  var keyWord;
  var _cmd;
  var finalCmd;
  var color1;
  attrs.value += '';

  if (attrs.key == "textSize") {
    attrs.value = "1," + (attrs.value - 1);
  }

//todo:tabTextColors
  if (attrs.key == "foreground" ||
    attrs.key == "tabTextColors" ||
    attrs.key == "selectedTabIndicatorColor"  ||
    attrs.key == "color" ||
    attrs.key == "background" ||
    attrs.key == "stroke" ||
    attrs.key == "btnColor") {

    if (attrs.key == "stroke") {
      color = attrs.value.split(',')[1];
      currTransVal = appendArgs(attrs,obj).split(',')[0] + ',get_colorInt';
    } else if(attrs.key == "tabTextColors"){
      color = attrs.value.split(',')[0];
      color1 = attrs.value.split(',')[1];
      currTransVal = 'get_colorInt1' + ',get_colorInt';
    }else {
      color = attrs.value;
      currTransVal = 'get_colorInt';
    }

    if(attrs.key == "tabTextColors"){
      prePend = parseColor(color,"set_colorInt1")+','+parseColor(color1);
    }else{
      prePend = parseColor(color);
    }
  }

  if (attrs.key == "fontStyle") {
    if(isURL(attrs.value)) {
      if(typeof window.__PROXY_FN == "undefined") {
        window.__PROXY_FN = {};
      }
      var font = attrs.value.substr(attrs.value.lastIndexOf('/') + 1)

      var filePresent = (typeof JBridge.isFilePresent == "function") && JBridge.isFilePresent(font);
      if (!filePresent) {
        var callback = callbackMapper.map(function (isNew, url, fileName) {
          const id = allProps.find(a => a.key === "id");
          if (!id) return;
          var urlSetCommands = "set_directory=ctx->getDir:s_juspay,i_0;" +
                                "set_resolvedFile=java.io.File->new:get_directory,s_" + fileName + ";" +
                                "set_resolvedPath=get_resolvedFile->toString;" + 
                                "set_dfont=android.graphics.Typeface->createFromFile:get_resolvedPath;" +
                                "set_textV=ctx->findViewById:i_" + id.value + ";" + 
                                "get_textV->setTypeface:get_dfont"
                                Android.runInUI(urlSetCommands ,null)
                              });
        JBridge.renewFile(attrs.value, font, callback);
      } else if(JBridge.getFilePath) {
        prePend = "set_directory=ctx->getDir:s_juspay,i_0;" +
                    "set_resolvedFile=java.io.File->new:get_directory,s_" + JBridge.getFilePath(font) + ";" +
                    "set_resolvedPath=get_resolvedFile->toString;" + 
                    "set_dfont=android.graphics.Typeface->createFromFile:get_resolvedPath;"
        currTransVal = "get_dfont"; 
      }
    } else {
      prePend = "set_ast=ctx->getAssets;set_type=android.graphics.Typeface->createFromAsset:get_ast,s_fonts\/" + attrs.value + "\.ttf;";
      currTransVal = "get_type";
    }
  }
  
  if (attrs.key == "gradientAngle") {
    orientation += "set_dr=this->getBackground;set_o=android.graphics.drawable.GradientDrawable$Orientation->valueOf:s_"+attrs.value+";"
    prePend += orientation;
    currTransVal = "get_o" 
  }

  if (attrs.key == "gradient") {
    var gradientObj = JSON.parse(attrs.value);
    var orientation = "";
    if (gradientObj.type == "linear") {
    } else {}

    var intClass = "set_cc=java.lang.Class->forName:s_java.lang.Integer;";
    var arrList = "set_arr=java.util.ArrayList->new;";

    prePend += gradientObj.values.map(function (color, i) {
      return parseColor(color, "set_color" + i);
    }).join("");

    arrList += gradientObj.values.map(function (color, i) {
      return "get_arr->add:get_color" + i;
    }).join(";");

    prePend += "set_gd=android.graphics.drawable.GradientDrawable->new;";
    prePend += arrList + ";";
    prePend += "set_c=java.lang.Class->forName:s_java.lang.Integer;";
    prePend += "infl->convertAndStoreArray:get_arr,get_c,s_pArr,b_true;";
    currTransVal = "get_pArr";
  }

  if (attrs.key == "cornerRadii") {
    var cornerRadiis = attrs.value.split(',');
    var cornerRadius = cornerRadiis.splice(0,1);
    var cornerRadiiArray = [];
    for(var i = 0; i< cornerRadiis.length;++i){
      cornerRadiiArray.push((cornerRadiis[i]*cornerRadius)+"");
      cornerRadiiArray.push((cornerRadiis[i]*cornerRadius)+"");
    }
    var arrList = "set_arr=java.util.ArrayList->new;";
    var floatArray = cornerRadiiArray.map(function(val,i){return "set_cornerRadius=java.lang.Float->new:dpf_"+ val + ";get_arr->add:get_cornerRadius;"});
    prePend += arrList + ";";
    prePend += "set_c=java.lang.Class->forName:s_java.lang.Float;";
    prePend += floatArray.join("");
    prePend += "infl->convertAndStoreArray:get_arr,get_c,s_pArr,b_true;";
    currTransVal = "get_pArr";
  }

  // shadowTag : level,tag
  if (attrs.key == "shadowTag") {
    var arr = attrs.value.split(",");
    var tag = arr[1];
		console.warn("YOOOO Shadow", arr);

    if (!window.shadowObject[tag]) {
      window.shadowObject[tag] =
        { level : parseInt(arr[0]),
          viewId : [],
          backgroundColor : [],
          blurValue : [],
          shadowColor : [],
          dx : [],
          dy : [],
          spread : [],
          factor : []
        }
    } else {
      window.shadowObject[tag]["level"] = parseInt(arr[0]);
    }
		return "";
  }
  //  -- int dx, int dy, int blurValue,  String shadowColor,  int spread, elevatiuon, float factor)
  if (attrs.key == "androidShadow") {
    var arr = attrs.value.split(",");

    var tag = arr[6];

    var __background = "#ffffff";
    var __id = "";

    for (var i =0 ;i<allProps.length; i++) {
      if (allProps[i].key == "background") {
        __background = allProps[i].value;
      } else if (allProps[i].key == "id") {
        __id = allProps[i].value;
      }
    }

    var factor = arr[5];
    if (typeof JBridge.getPixels == "function"){
      factor = JBridge.getPixels();
    }
    //   (viewId, backgroundColor, int blurValue,hadowColor, int dx, int dy, int spread, float factor)

    if (!window.shadowObject[tag]) {
      window.shadowObject[tag] =
        { level : -1,
          viewId : [__id],
          backgroundColor : [__background],
          blurValue : [arr[2]],
          shadowColor : [arr[3]],
          dx : [arr[0]],
          dy : [arr[1]],
          spread : [arr[4]],
          factor : [factor]
        }
    } else {
      window.shadowObject[tag]["viewId"].push(__id);
      window.shadowObject[tag]["backgroundColor"].push(__background);
      window.shadowObject[tag]["blurValue"].push(arr[2]);
      window.shadowObject[tag]["shadowColor"].push(arr[3]);
      window.shadowObject[tag]["dx"].push(arr[0]);
      window.shadowObject[tag]["dy"].push(arr[1]);
      window.shadowObject[tag]["spread"].push(arr[4]);
      window.shadowObject[tag]["factor"].push(arr[5]);
    }

	return "";
  }

  if (attrs.key == "letterSpacing") {
    attrs.value = (attrs.value/9) + "";
  }

  if (attrs.key == "dividerDrawable") {
    prePend = "set_342372=ctx->getPackageName;set_res=ctx->getResources;set_368248=get_res->getIdentifier:s_"+  attrs.value +",s_drawable,get_342372;set_res=ctx->getResources;set_482380=get_res->getDrawable:get_368248;"
    currTransVal = "get_482380";
  }

  if (attrs.key == "textFromHtml") {
    prePend = parseHtml(handleSpecialChars(attrs.value));
    currTransVal = 'get_html';
  }

  if(attrs.key == "backgroundTint"){
    color = attrs.value;
    prePend = parseColor(color)+'set_colorstate=android.content.res.ColorStateList->valueOf:get_colorInt;' ;
    currTransVal = 'get_colorstate'
  }

  if (attrs.key == "typeface") {
    prePend = "set_face=this->getTypeface;"
    currTransVal = 'get_face,' + appendArgs(attrs,obj);
  }

  if(attrs.key == "buttonTint"){
    color = attrs.value;
    prePend = parseColor(color)+'set_colorstate=android.content.res.ColorStateList->valueOf:get_colorInt;' ;
    currTransVal = 'get_colorstate'
  }

  if(attrs.key == "hintColor"){
    color = attrs.value;
    prePend = parseColor(color)+'set_colorstate=android.content.res.ColorStateList->valueOf:get_colorInt;' ;
    currTransVal = 'get_colorstate'
  }

  if (attrs.key == "btnBackground") {
    color = attrs.value;
    prePend = 'set_mode=android.graphics.PorterDuff->intToMode:i_9;' +  parseColor(color);
    currTransVal =  'get_colorInt,get_mode';
  }

  if (attrs.key == "selectableItem") {
    color = attrs.value;
    prePend =  "set_outv=android.util.TypedValue->new;set_theme=ctx->getTheme;get_theme->resolveAttribute:i_16843534,get_outv,b_true;set_c=get_outv->getClass;set_f=get_c->getDeclaredField:s_resourceId;get_f->setAccessible:b_true;set_v=get_f->get:get_outv;"
    currTransVal =  'get_v';
  }

  if (attrs.key == "url") {
    prePend = "set_Setting=this->getSettings;get_Setting->setJavaScriptEnabled:b_true;get_Setting->setDomStorageEnabled:b_true;";
    var convertToString = "set_1127=android.util.Base64->decode:s_" + btoa(attrs.value) + ",i_0;set_url=java.lang.String->new:get_1127;"
    prePend += convertToString;
    currTransVal = "get_url";
  }

  if (attrs.key == "packageIcon") {
    prePend = "set_PM=ctx->getPackageManager;set_AI=get_PM->getApplicationInfo:s_" + attrs.value + ",i_0;set_11747=get_AI->loadIcon:get_PM;";
    currTransVal = "get_11747";
  }

  if (attrs.key == "imageUrl") {
    
    if(isURL(attrs.value)) {
      if(typeof window.__PROXY_FN == "undefined") {
        window.__PROXY_FN = {};
      }
      var image = attrs.value.substr(attrs.value.lastIndexOf('/') + 1)
      var callback = "onImage" + image.substr(0, image.indexOf('.'))

      var filePresent = (typeof JBridge.isFilePresent == "function") && JBridge.isFilePresent(image);
      if (!filePresent) {
        var callback = callbackMapper.map(function (isNew, url, fileName) {
          const id = allProps.find(a => a.key === "id");
          if (!id) return;
          var urlSetCommands = "set_directory=ctx->getDir:s_juspay,i_0;" +
                                "set_resolvedFile=java.io.File->new:get_directory,s_" + fileName + ";" +
                                "set_resolvedPath=get_resolvedFile->toString;" + 
                                "set_dimage=android.graphics.drawable.Drawable->createFromPath:get_resolvedPath;" +
                                "set_imgV=ctx->findViewById:i_" + id.value + ";" + 
                                "get_imgV->setImageDrawable:get_dimage"
                                Android.runInUI(urlSetCommands ,null)
                              });
        JBridge.renewFile(attrs.value, image, callback);
      } else if(JBridge.getFilePath) {
        prePend = "set_directory=ctx->getDir:s_juspay,i_0;" +
                    "set_resolvedFile=java.io.File->new:get_directory,s_" + JBridge.getFilePath(image) + ";" +
                    "set_resolvedPath=get_resolvedFile->toString;" + 
                    "set_dimage=android.graphics.drawable.Drawable->createFromPath:get_resolvedPath;"
        currTransVal = "get_dimage"; 
      }
    } else {
      prePend = "set_342372=ctx->getPackageName;set_res=ctx->getResources;set_368248=get_res->getIdentifier:s_"+  attrs.value +",s_drawable,get_342372;set_res=ctx->getResources;set_482380=get_res->getDrawable:get_368248;"
      currTransVal = "get_482380";
    }
  }

  if (attrs.key == "defaultImage") {
    prePend = "set_342372=ctx->getPackageName;set_res=ctx->getResources;set_368248=get_res->getIdentifier:s_"+  attrs.value +",s_drawable,get_342372;set_res=ctx->getResources;set_482380=get_res->getDrawable:get_368248;"
    currTransVal = "get_482380";
  }

  if (attrs.key == "placeHolder") {
    prePend = "set_342372=ctx->getPackageName;set_res=ctx->getResources;set_368248=get_res->getIdentifier:s_"+  attrs.value +",s_drawable,get_342372;set_res=ctx->getResources;set_482380=get_res->getDrawable:get_368248;"
    currTransVal = "get_482380";
  }

  if (attrs.key == "dynamicUrl") {
    prePend = "set_directory=ctx->getDir:s_juspay,i_0;" +
    "set_resolvedName=in.juspay.hypersdk.services.FileProviderService->appendSdkNameAndVersion:s_" + attrs.value + ";" +
    "set_resolvedFile=java.io.File->new:get_directory,get_resolvedName;" +
    "set_resolvedPath=get_resolvedFile->toString;" + 
    "set_dimage=android.graphics.drawable.Drawable->createFromPath:get_resolvedPath;";

    currTransVal = "get_dimage";
  }

  if (attrs.key == "backgroundDrawable") {
    prePend = "set_342372=ctx->getPackageName;set_res=ctx->getResources;set_368248=get_res->getIdentifier:s_"+  attrs.value +",s_drawable,get_342372;set_res=ctx->getResources;set_482380=get_res->getDrawable:get_368248;"
    currTransVal = "get_482380";
  }

  if (attrs.key == "fontFamily") {
    attrs.value = appendArgs(attrs,obj);
    values = attrs.value.split(',');
    return "set_fontFace=android.graphics.Typeface->create:"+values[0]+","+values[1]+";"+"this->setTypeface:get_fontFace,"+values[1]+";"
  }

  if(attrs.key=="fontSize") {
    currTransVal = appendArgs(attrs,obj).split(',')[0] + ',f_' + ((window.__WIDTH*(attrs.value.split(',')[1])*1))/100;
  }

  if(attrs.key=="curve") {
    prePend =  "set_interp=android.view.animation.DecelerateInterpolator->new;";
    currTransVal = "get_interp";
  }

  if(attrs.key=="shimmer") {
    try {
      var shimmerMode = "com.facebook.shimmer.Shimmer$ColorHighlightBuilder";
      var shimmerCmd = "set_sdrw=com.facebook.shimmer.ShimmerDrawable->new;";
      var shimmerJson = JSON.parse(attrs.value);
      console.log(shimmerJson, shimmerJson.contents, attrs, attrs, obj, belongsTo, transformFn, allProps, type)
      // if(shimmerJson && shimmerJson.contents){

        shimmerJson = shimmerJson.contents
      // }
      if (shimmerJson && shimmerJson.shimmerType == "alpha"){
        shimmerMode = "com.facebook.shimmer.Shimmer$AlphaHighlightBuilder"
        shimmerCmd += "set_builder=" + shimmerMode + "->new;"
        if(shimmerJson.base){
          shimmerCmd += "get_builder->setBaseAlpha:f_" + shimmerJson.base + ";"
        }
        if(shimmerJson.highlight){
          shimmerCmd += "get_builder->setHighlightAlpha:f_" + shimmerJson.highlight + ";"
        }
      } else {
        shimmerCmd += "set_builder=" + shimmerMode + "->new;"
        if(shimmerJson.base){
          shimmerCmd += parseColor(shimmerJson.base , "set_baseColor") + ";"
          shimmerCmd += "get_builder->setBaseColor:get_baseColor;"
        }
        if(shimmerJson.highlight){
          shimmerCmd += parseColor(shimmerJson.highlight , "set_baseColor") + ";"
          shimmerCmd += "get_builder->setHighlightColor:get_baseColor;"
        }
      }
      
      if(shimmerJson.tilt){
        shimmerCmd += "get_builder->setTilt:f_" + shimmerJson.tilt + ";"
      }
      if(shimmerJson.intensity){
        shimmerCmd += "get_builder->setIntensity:f_" + shimmerJson.intensity + ";"
      }
      if(shimmerJson.direction){
        shimmerCmd += "get_builder->setDirection:i_" + shimmerJson.direction + ";"
      }
      if(shimmerJson.duration){
        shimmerCmd += "get_builder->setDuration:l_" + shimmerJson.direction + ";"
      }
      if(shimmerJson.repeatCount){
        shimmerCmd += "get_builder->setRepeatCount:i_" + shimmerJson.repeatCount + ";"
      }
      if(shimmerJson.repeatDelay){
        shimmerCmd += "get_builder->setRepeatDelay:l_" + shimmerJson.repeatDelay + ";"
      }
      if(shimmerJson.clipToChildren){
        shimmerCmd += "get_builder->setClipToChildren:b_" + shimmerJson.clipToChildren + ";"
      }
      if(shimmerJson.shape){
        shimmerCmd += "get_builder->setShape:i_" + shimmerJson.shape + ";"
      }
      if(shimmerJson.dropOff){
        shimmerCmd += "get_builder->setDropoff:f_" + shimmerJson.dropOff + ";"
      }
      shimmerCmd += "set_shimmer=get_builder->build;"
      if(type == "shimmerFrameLayout"){
        attrs.key = "shimmerView"
        currTransVal = "get_shimmer";
        obj.fnName = obj.alternateFnName
      } else {
        shimmerCmd += "get_sdrw->setShimmer:get_shimmer;"
        if(shimmerJson.active){
          afterCmd += "get_sdrw->startShimmer;"
        } else {
          afterCmd += "get_sdrw->stopShimmer;"
        }
        currTransVal = "get_sdrw";
      }
    } catch (e) {
      console.error("unable to set shimmer")
    }
    console.log(shimmerCmd)
    prePend =  shimmerCmd;
  }

  if(attrs.key=="focus") {
    afterCmd =  "set_win=ctx->getWindow;get_win->setSoftInputMode:5;";
  }

  if (attrs.key == "shadowLayer") {
    color = attrs.value.split(',')[3];
    arr = appendArgs(attrs,obj).split(',');
    arr.splice(arr.length1 , 1);

    prePend = parseColor(color);
    currTransVal =  arr.join(',') + ',get_colorInt'
  }

  if (attrs.key == "values") {
    var val = attrs.value.split(",");
    var valuesStr = "", i;
    for (i = 0; i < val.length; i++) {
      var elements = val[i].split(":");
      valuesStr += "get_spinnerArray->add:s_"+elements[0];
      for(var j = 1; j < elements.length; j++)
        valuesStr += "\n" + elements[j];
        valuesStr += ";";
    }
    prePend =  "set_spinnerArray=java.util.ArrayList->new;"+ valuesStr +
    "set_spinnerValues=get_spinnerArray->toArray;set_spinnerAdapter=android.widget.ArrayAdapter->new:ctx_ctx,i_17367043,get_spinnerValues;";
    currTransVal = "get_spinnerAdapter";
  }

  if (attrs.key == "startPoint") {
    var arg = JSON.parse(attrs.value);
    prePend = "this->setStartX:f_" + arg.x + ";"
    prePend += "this->setStartY:f_" + arg.y + ";"
    return prePend
  }
    
  if (attrs.key == "endPoint") {
    var arg = JSON.parse(attrs.value)
    prePend = "this->setEndX:f_" + arg.x + ";"
    prePend += "this->setEndY:f_" + arg.y + ";"
    return prePend
  }

  if (belongsTo == "VIEW")
  keyWord = globalObjMap[belongsTo].val;
  else
  keyWord = 'get_' + globalObjMap[belongsTo].val;

  if (transformFn || attrs.key == "duration" || attrs.key == "delay" || attrs.key == "curve")
  _cmd = keyWord +  '->' + ((typeof obj.fnName == "undefined")?obj.varName:obj.fnName);
  else
  _cmd = keyWord + '->' +   attrs.key;

  if (obj.values && obj.values.length)
  _cmd += ':';

  if (!prePend && !currTransVal)
  _cmd +=  appendArgs(attrs, obj) + ';'
  else
  _cmd += currTransVal + ';';

  // for testing
  if (typeof finalCmd !== "undefined") {
    console.log(beforeCmd  + prePend + _cmd + afterCmd);
    return finalCmd;
  }
  if(type == "shimmerFrameLayout"){
    console.log(beforeCmd  + prePend + _cmd + afterCmd)
  }
  return beforeCmd  + prePend + _cmd + afterCmd
}

function parseAttrs(attrs, belongsTo, transformFn, type) {
  var obj;
  var retVal;
  var cmd = '';
  var _cmd;

  for (var i =0 ;i<attrs.length; i++) {
    obj = mapParams[attrs[i].key];
    if (obj) {
      cmd += mashThis(attrs[i], obj, belongsTo, transformFn, attrs, type);
    }
  }

  if (belongsTo == "VIEW")
  return cmd;

  return prepareCtr(attrs, belongsTo) + ';' + cmd;
}

function parseGroups(type, groups, config) {
  var keys = Object.keys(groups);
  var ctr;

  for (var i = 0; i< keys.length; i++) {
    if  (keys[i] == "FOREGROUND") {
      if (!globalObjMap[keys[i]]) {
        if (getSetType == "set") {
          globalObjMap[keys[i]] = {ctr: "android.graphics.drawable.GradientDrawable->new",  val:  keys[i] };
          command += 'set_' +  globalObjMap[keys[i]].val + '=' +  parseAttrs(groups[keys[i]], keys[i], true, type)
            + 'this->' + "setForeground" + ':' + 'get_' +  globalObjMap[keys[i]].val + ';'
        } else {
          globalObjMap[keys[i]] = {ctr: 'get_view->getForeground',  val:  keys[i] };
          command += 'set_' +  globalObjMap[keys[i]].val + '=' +  parseAttrs(groups[keys[i]], keys[i], true, type);
        }
      }
    } else if (keys[i] == "LAYOUT_TRANSITION") {
        globalObjMap.LAYOUT_TRANSITION = {ctr: 'android.animation.LayoutTransition->new', val: "LAYOUT_TRANSITION"};
        command +=  'set_' +  globalObjMap.LAYOUT_TRANSITION.val + '=' +  parseAttrs(groups.PARAMS, 'LAYOUT_TRANSITION', true, type)
             + 'this->' + "setLayoutTransition" + ':get_'  + globalObjMap.LAYOUT_TRANSITION.val + ';';
    } else if (keys[i] == "VIEW") {
      if (!globalObjMap.VIEW) {
        if (getSetType == "set")
        globalObjMap.VIEW = {ctr: "this", val: "this"};
        else
        globalObjMap.VIEW = {ctr: "get_view", val: "get_view"};
      }

      command +=  parseAttrs(groups.VIEW, 'VIEW', true, type)

    } else if (keys[i] == "PARAMS") {
      if (getSetType == "set") {
        if (!globalObjMap.PARAMS) {
          ctr = config.root?getCtr(type):'PARAM_CTR_HOLDER';
          globalObjMap.PARAMS = {ctr: ctr, val: "PARAMS" };
        }

        command +=  'set_' +  globalObjMap.PARAMS.val + '=' +  parseAttrs(groups.PARAMS, 'PARAMS', true, type)
             + 'this->' + objMap.PARAMS.viewMethod.split(',')[0] + ':get_'  + globalObjMap.PARAMS.val + ';';
      } else {
        if (!globalObjMap.PARAMS) {
          ctr = "get_view->getLayoutParams";
          globalObjMap.PARAMS = {ctr: ctr, val: "PARAMS" };
        }

        command += 'set_' +  globalObjMap.PARAMS.val + '=' +  parseAttrs(groups[keys[i]], keys[i], true, type);
      }

    } else if (keys[i] == "MUTATEBG") {
      if (!globalObjMap.MUTATEBG) {
        globalObjMap.MUTATEBG = {ctr: 'this->getBackground', val: "MUTATEBG"};
      }

      command += 'set_' +  globalObjMap.MUTATEBG.val + '=' +  parseAttrs(groups[keys[i]], keys[i], true, type);
    } else if (keys[i] == "ANIMATION") {
      if (!globalObjMap.ANIMATION) {
        if (getSetType == "set")
        globalObjMap.ANIMATION = {ctr: 'this->animate', val: "ANIMATION"};
        else
        globalObjMap.ANIMATION = {ctr: 'get_view->animate', val: "ANIMATION"};
      }

      command += 'set_' +  globalObjMap.ANIMATION.val + '=' +  parseAttrs(groups[keys[i]], keys[i], false, type);

    }  else {
      // Works only for drawable
      if (!globalObjMap[keys[i]]) {
        if (getSetType == "set") {
          globalObjMap[keys[i]] = {ctr: objMap[keys[i]].ctr,  val:  keys[i] };
          command += 'set_' +  globalObjMap[keys[i]].val + '=' +  parseAttrs(groups[keys[i]], keys[i], true, type)
            + 'this->' + objMap[keys[i]].viewMethod.split(',')[0] + ':' + 'get_' +  globalObjMap[keys[i]].val + ';'
        } else {
          globalObjMap[keys[i]] = {ctr: 'get_view->getBackground',  val:  keys[i] };
          command += 'set_' +  globalObjMap[keys[i]].val + '=' +  parseAttrs(groups[keys[i]], keys[i], true, type);
        }
      }
    }
  }
  return command.substring(0, command.length - 1);
}

var flattenObject = function(ob) {
  var toReturn = {};
  for (var i in ob) {
    if (!ob.hasOwnProperty(i)) continue;
    if ((typeof ob[i]) == 'object') {
      var flatObject = flattenObject(ob[i]);
      for (var x in flatObject) {
        if (!flatObject.hasOwnProperty(x)) continue;
        toReturn[x] = flatObject[x];
      }
    } else {
      toReturn[i] = ob[i];
    }
  }
  return toReturn;
};

module.exports = function(type, config, _getSetType) {
  config = flattenObject(config);
  getSetType = _getSetType;
  elementType = type;

  var groups =  getConfigGroups(config);

  command = '';
  globalObjMap = {};

  var flag = 0;
  var keys = Object.keys(config);
  for (var i=0; i<keys.length; i++) {
    if (keys[i] == 'runInUI')  {
      flag  = 1;
      break;
    }
  }

  if (!flag) {
    config.runInUI = parseGroups(type, groups, config);
  }

  return config;
}

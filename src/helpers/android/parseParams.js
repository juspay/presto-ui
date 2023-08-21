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
var utils = require("./utils");
var devicePixelRatio = window.devicePixelRatio;
var globalObjMap = {};
var command = "";
var elementType;
var getSetType;
const sessionInfo = window.sessionInfo ? (typeof window.sessionInfo == "string" ? JSON.parse(window.sessionInfo) : window.sessionInfo) : JSON.parse(JBridge.getSessionInfo())
// primary key is id
// value is array of subDrawbles
// Sample {"10000034" : [{isCreated : true, "dr" : "GradientDrawble"}, {"dr" : "ShapeDrawble", isCreated : false}]} // Drawbable
let drawableMap = {};

const state = {
  fontsWhiteList: []
};

function getGradientOrientation(angle){

  function roundOff(num){
    return Math.floor(num%360/45)*45;
  }

  if (typeof angle == "number"){
    switch(roundOff(angle)){
      case 0  : return "BOTTOM_TOP" ;
      case 45 : return "BL_TR";
      case 90 : return "LEFT_RIGHT";
      case 135: return "TL_BR" ;
      case 180: return "TOP_BOTTOM";
      case 225: return "TR_BL";
      case 270: return "RIGHT_LEFT";
      case 315: return "BR_TL";
      default : return "BOTTOM_TOP";
    }
  } else { return "BOTTOM_TOP" }
}

function isValidFontStyleFormat(font){
  try{
    if(font == undefined) return false;
    if(isNaN(parseInt(font)) ){
      return /^\w+[0-9a-zA-z\-\_]*[.](otf|ttf|xml)[,](assets|res)(\/|$)/.test(font) ;
    }
    else return /^\d+$/.test(font) ;
  }
  catch(err){}
  return false;
}
function isURL(str) {
  try{
    var url = new URL(str);
    return str.indexOf(".") != -1;
  } catch (err) {
    return false;
  }
}

function getConfigGroups(config, type) {
  var groups = {};
  var objType;
  var isAnimation;
  var widthFound = 0;
  var heightFound = 0;
  let paddingVal = config["padding"];
  let strokeVal = config["stroke"]
  let currentDrawables = [];
  if(type == "editText" && typeof config["cursorColor"] != undefined){
    if(sessionInfo["android_api_level"] < 28){
      config["cursorColorV2"] = config.cursorColor
      delete config.cursorColor
    }
  }
  if(type != "textView") {
    delete config.maxWidth
  }
  if(type == "progressBar"){
    console.log("progressBar", strokeVal)
    config["progressBarColor"] = strokeVal
    delete config.stroke
  }
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

    if (typeof config[keys[i]] == "undefined" || config[keys[i]] == null) {
      delete config[keys[i]];
    } else if (typeof config[keys[i]] == "function") {
      if (keys[i] == "afterRender" && typeof window.removeAfterRenderProp == "function"){
        /**
         * if the function is present then we are handling afterRender
         * prop in JS itself
         */
        window.removeAfterRenderProp(config["id"], config["afterRender"]);
        delete config["afterRender"];
      }else{
        config[keys[i]] = callbackMapper.map(config[keys[i]]);

        if (keys[i] == "onClick"){
          window.__FN_MAP[config[keys[i]]] = config.text || utils.getId(config) || "";

          if(!config.allowMultipleClicks || config.allowMultipleClick=="false"){
            window.__THROTTELED_ACTIONS.push(config[keys[i]]);
          }

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
          groups['ANIMATION'] = {props: [], id : utils.getId(config)};


          groups['ANIMATION'].props.push({key: keys[i].split('_')[1], value: config[keys[i]]})
        } else {
          if (!groups[objType.inVokedIn]) {
            groups[objType.inVokedIn] = {props: [], id : utils.getId(config)};
          }
          if (objType.inVokedIn == "DRAWABLE") {
            currentDrawables.push(objType.subDrawable);
          }
          if (keys[i] == "width")
          widthFound ++;
          if (keys[i] == "height")
          heightFound ++;

          groups[objType.inVokedIn].props.push({key: keys[i], value: config[keys[i]]})
        }

        if (keys[i]!=="pattern" && keys[i] !== "root" && keys[i] !== "id" && keys[i]!== "__filename") {
          delete config[keys[i]];
        }
      }
    }
  }

  if (getSetType == "set") {
    if (!groups.PARAMS)
    groups.PARAMS = {props: [], id : utils.getId(config)};
    if (!config.hasOwnProperty("padding")) {
      config.padding = "0,0,0,0"
    }
    if (!widthFound)
    groups.PARAMS.props.push({key: "width", value: 'wrap_content'});
    if (!heightFound)
    groups.PARAMS.props.push({key: "height", value: 'wrap_content'});
    if(drawableMap[utils.getId(config)]){
      drawableMap[utils.getId(config)] = [];
    }
  }
  if(groups.DRAWABLE) {
    for(let i = 0; i < currentDrawables.length; i++) {
      let drawable = currentDrawables[i];
      drawableMap[utils.getId(config)] = drawableMap[utils.getId(config)] || []
      let isExist = drawableMap[utils.getId(config)].some((({dr}) => dr === drawable))
      if(!(isExist)){
        (a,b) => objMap[b.dr].index > objMap[a.dr].index
        utils.insertionSort(drawableMap[utils.getId(config)], {dr : drawable ,  isCreated : false}, (a,b) => objMap[b.dr].index < objMap[a.dr].index)
        // drawableMap[utils.getId(config)].splice(id, 0, {dr : drawable ,  isCreated : false})
      }
    }
  }

  return groups;
}

function getCtr(viewGroup) {
  var viewGroupMap =  {
    'linearLayout': 'android.widget.LinearLayout$LayoutParams->new',
    'coordinatorLayout': 'androidx.coordinatorlayout.widget.CoordinatorLayout$LayoutParams->new',
    'swipeRefreshLayout': 'androidx.swiperefreshlayout.widget.SwipeRefreshLayout$LayoutParams->new',
    'scrollView': 'android.widget.LinearLayout$LayoutParams->new',
    'nestedScrollView': 'android.widget.LinearLayout$LayoutParams->new',
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
    'recyclerView': 'androidx.recyclerview.widget.RecyclerView$LayoutParams->new',
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

function prepareCtr(attrs, belongsTo, id) {
  var obj = objMap[belongsTo];
  var ctr = globalObjMap[belongsTo].ctr;
  var reqAttrs;


  if (belongsTo == "DRAWABLE") {
    let lastDrawableIndex = -1;
    ctr = ctr + ";set_layersArray=java.util.ArrayList->new;"
    for( var i = 0; i < drawableMap[id].length; ++i) {
      // if not isCreated then create drawable and add to bg
      // else fetch from index.
      if(!drawableMap[id][i].isCreated ) {
        drawableMap[id][i].isCreated = true;
        var dr = drawableMap[id][i].dr;
        if(dr=="RippleDrawable") {
          ctr += parseColor("#ffffffff","set_rc")+"set_mask=android.graphics.drawable.ShapeDrawable->new;set_paint=get_mask->getPaint;get_paint->setColor:get_rc;set_colorlist=android.content.res.ColorStateList->valueOf:get_rc;"
        }
        ctr += ctr + ";set_" + dr + "=" + objMap[dr].ctr + ";"
      } else {
        var dr = drawableMap[id][i].dr;
        lastDrawableIndex++;
        ctr = ctr + ";set_" + dr + "=get_DRAWABLE->getDrawable:i_" + lastDrawableIndex + ";"
      }

      ctr = ctr + "get_layersArray->add:get_" + dr + ";";
    }
    ctr += ";set_c=java.lang.Class->forName:s_android.graphics.drawable.Drawable;"
    ctr += "infl->convertAndStoreArray:get_layersArray,get_c,s_layers,b_false;";
    ctr += "set_DRAWABLE=android.graphics.drawable.LayerDrawable->new:get_layers;";
  }
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

function makeUrlCmd(imageUrl){
  var imageValue = imageUrl;
  var jpImageName = 'jp_' + imageUrl;
  if (window.juspayAssetConfig
      && window.juspayAssetConfig.images
      && window.juspayAssetConfig.images[jpImageName]) {
    imageValue = jpImageName;
  }
  var prePend = "set_342372=ctx->getPackageName;set_res=ctx->getResources;set_368248=get_res->getIdentifier:s_" + imageValue + ",s_drawable,get_342372;set_res=ctx->getResources;set_482380=get_res->getDrawable:get_368248;"
  var currTransVal = "get_482380";
  return {
    prePend : prePend,
    currTransVal : currTransVal
  }
}

function mashThis(attrs, obj, belongsTo, transformFn, allProps, type) {
  if (getSetType == "get" && (attrs.key == "width" || attrs.key == "height")) {
    // get case i.e during patch
    if(!isNaN(attrs.value * 1)) {
      return 'get_PARAMS->' + obj.varName + ':dp_' + attrs.value + ';get_view->setLayoutParams:get_PARAMS;';
    } else {
      return 'get_PARAMS->' + obj.varName + ':i_' + mapParams[attrs.key].values[0][attrs.value] + ';get_view->setLayoutParams:get_PARAMS;';
    }
  } else if(attrs.key == "width" || attrs.key == "height") {
    // set case i.e first render
    return '';
  }

  var beforeCmd = "";
  var afterCmd = "";
  var prePend = '';
  var currTransVal;
  var dontLoad = false;
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

  if (attrs.key == "textSizeSp") {
    attrs.value = "2," + attrs.value;
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
  if (attrs.key == "fontWeight") {
    var prop = attrs.value.split(",");
    prePend = "set_dfont=android.graphics.Typeface->create:null_pointer,i_"+prop[0]+",b_"+ prop[1]+";";
    currTransVal = "get_dfont";
  }
  if(attrs.key == "rippleColor") {
    var currentColor = attrs.value;
    prePend = parseColor(currentColor,"set_rc")+"set_colorlist=android.content.res.ColorStateList->valueOf:get_rc;"
    currTransVal = "get_colorlist";
  }
  if(attrs.key == "rcc") {
    prePend = "set_c=java.lang.Class->forName:s_java.lang.Float;";
    prePend += "set_arr=java.util.ArrayList->new;";
    // 8 values, 2 for each corner. Starts at the left-top and moves clock-wise
    let rcc = attrs.value.split(',');
    for (var i = 0; i < rcc.length; i++) {
      prePend += "set_r" + i+  "=java.lang.Float->new:dpf_" + rcc[i] + ";";
      prePend += "get_arr->add:get_r"+ i +  ";";
    }

    prePend += "infl->convertAndStoreArray:get_arr,get_c,s_pArr,b_true;";
    prePend += "set_rect=android.graphics.drawable.shapes.RoundRectShape->new:get_pArr,null_pointer,null_pointer;";
    prePend += "get_mask->setShape:get_rect;";
    dontLoad = true;
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
        dontLoad = true;
      } else if(JBridge.getFilePath) {
        prePend = "set_directory=ctx->getDir:s_juspay,i_0;" +
                    "set_resolvedFile=java.io.File->new:get_directory,s_" + JBridge.getFilePath(font) + ";" +
                    "set_resolvedPath=get_resolvedFile->toString;" +
                    "set_dfont=android.graphics.Typeface->createFromFile:get_resolvedPath;"
        currTransVal = "get_dfont";
      }
    } else {
      var fontValue = attrs.value,
          jpFont = "jp_" + attrs.value;
      if ((state.fontsWhiteList.indexOf(jpFont) !== -1) ||
          window.juspayAssetConfig
          && window.juspayAssetConfig.fonts
          && window.juspayAssetConfig.fonts[jpFont]) {
           fontValue = "jp_" + fontValue;
           prePend = "set_ast=ctx->getAssets;set_type=android.graphics.Typeface->createFromAsset:get_ast,s_fonts\/" + fontValue + "\.ttf;";
           currTransVal = "get_type";
      }
      else if ((state.fontsWhiteList.indexOf(fontValue) !== -1) ||
              window.juspayAssetConfig
              && window.juspayAssetConfig.fonts
              && window.juspayAssetConfig.fonts[fontValue]) {
          prePend = "set_ast=ctx->getAssets;set_type=android.graphics.Typeface->createFromAsset:get_ast,s_fonts\/" + fontValue + "\.ttf;";
          currTransVal = "get_type";
      } else {
        dontLoad = true;
      }
    }
  }

  if (attrs.key == "scrollToDescendant") {
    var id = attrs.value;
    prePend = "set_v=ctx->findViewById:i_" + id + ";";
    currTransVal = "get_v";
  }

  if (attrs.key == "font") {
    try{
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
        if(attrs.value == "") throw "font not provided" ;
        var fontPrefix = attrs.value.split(",")[0], fontSuffix = attrs.value.split(",")[1];
        if(fontPrefix == undefined || fontSuffix == undefined) throw "Incorrect Font format" ;
        switch(fontPrefix){
          case "name" :
            prePend = "set_ast=ctx->getAssets;set_type=android.graphics.Typeface->createFromAsset:get_ast,s_fonts\/" + fontSuffix + "\.ttf;";
            currTransVal = "get_type";
            break ;
          case "path" :
            if(fontSuffix.indexOf("assets/") != -1){
              var fontPath = fontSuffix.replace("assets/", "");
              prePend = "set_ast=ctx->getAssets;set_type=android.graphics.Typeface->createFromAsset:get_ast,s_"+  fontPath +";" ;
              currTransVal = "get_type";
            }
            else if(fontSuffix.indexOf("res/") != -1){
              var fontTempArr = fontSuffix.split("/");
              var fontResName = fontTempArr[fontTempArr.length - 1].split(".")[0] ;
              prePend = "set_pkgname=ctx->getPackageName;set_resobj=ctx->getResources;set_resid=get_resobj->getIdentifier:s_"+fontResName+",s_font,get_pkgname;set_type=get_resobj->getFont:get_resid;" ;
              currTransVal = "get_type";
            }
            break;
          case "resId" :
            prePend = "set_resobj=ctx->getResources;set_type=get_resobj->getFont:i_"+fontSuffix+";" ;
            currTransVal = "get_type" ;
            break;
        }
      }
    }
    catch(err){
      console.log("FONT_ERROR :: " + "error in fetching fonts : " + err ) ;
    }
  }

  if (attrs.key == "gradientAngle") {
    orientation += "set_dr=this->getBackground;set_o=android.graphics.drawable.GradientDrawable$Orientation->valueOf:s_"+attrs.value+";"
    prePend += orientation;
    currTransVal = "get_o"
  }

  // if (attrs.key == "rippleColor")  {
  //   prePend += parseColor(attrs.value, "set_ripplecolor");
  //   currTransVal = "get_ripplecolor";

  // // var feedback = "set_mask=android.graphics.drawable.ShapeDrawable->new;";
  // // if (enableRadii) {
  // //   feedback += "set_c=java.lang.Class->forName:s_java.lang.Float;";
  // //   feedback += "set_arr=java.util.ArrayList->new;";
  // //   // 8 values, 2 for each corner. Starts at the left-top and moves clock-wise
  // //   feedback += "set_r=java.lang.Float->new:dpf_30;";
  // //   for (var i = 0; i < 8; i++)
  // //     feedback += "get_arr->add:get_r;";

  // //   feedback += "infl->convertAndStoreArray:get_arr,get_c,s_pArr,b_true;";
  // //   feedback += "set_rect=android.graphics.drawable.shapes.RoundRectShape->new:get_pArr,null_pointer,null_pointer;";
  // //   feedback += "get_mask->setShape:get_rect;";

  // // }
  // feedback += parseColor(rippleColor, "set_ripplecolor");
  // feedback += "set_paint=get_mask->getPaint;get_paint->setColor:get_ripplecolor;";
  // feedback += "set_colorlist=android.content.res.ColorStateList->valueOf:get_ripplecolor;";
  // feedback += "set_ripple=android.graphics.drawable.RippleDrawable->new:get_colorlist,null_pointer,null_ptr;";
  // return feedback;
  // }

  if (attrs.key == "gradient") {
    var gradientObj = JSON.parse(attrs.value);
    var orientation = "";
    if (gradientObj.type == "linear") {
    } else {}

    prePend += "set_o=android.graphics.drawable.GradientDrawable$Orientation->valueOf:s_"+ getGradientOrientation(Number(gradientObj.angle)) +";get_GradientDrawable->setOrientation:get_o;"

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

  if(attrs.key == "testID"){
    attrs.value = attrs.value.replace(/\W|_/g, '_').replace(/_+/g, '_').toLowerCase();
  }

  if (attrs.key == "letterSpacing") {
    attrs.value = (attrs.value/9) + "";
  }

  if (attrs.key == "dividerDrawable") {
    var out = makeUrlCmd(attrs.value)
    prePend = out.prePend;
    currTransVal = out.currTransVal;
  }

  if (attrs.key == "textFromHtml") {
    prePend = parseHtml(handleSpecialChars(attrs.value));
    currTransVal = 'get_html';
  }
  if (attrs.key == "ellipsize") {
    prePend = "set_elipse=android.text.TextUtils$TruncateAt->valueOf:s_END;"
    currTransVal = 'get_elipse';

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
  if(attrs.key=="gifUrl")
  {
    const numFrames = allProps.find(a => a.key === "numFrames").value;
    delay =  allProps.find(a => a.key === "frameDelay").value;
    delay = (delay || 50)+"";
    const id = allProps.find(a => a.key === "id");
    if(!numFrames||!id)
    {
      console.error(">>>> Please provide numFrames for GIF Animation");
      return;
    }
    if(isURL(attrs.value)) {
      var ind = attrs.value.lastIndexOf('/')
      var image = attrs.value.substr(ind + 1);
      var imageName = image.substr(0,image.lastIndexOf('.'));
      var rawUrl =  attrs.value.substr(0,ind + 1);
      var urlSetCommands = "set_directory=ctx->getDir:s_juspay,i_0;set_anime=android.graphics.drawable.AnimationDrawable->new;get_anime->setOneShot:b_true;"
      for(var i=0;i<numFrames;i++)
      {
        var currFrame = imageName+i+".png";
        JBridge.renewFile(rawUrl+currFrame, currFrame);

      }
      for(var i=0;i<numFrames;i++)
      {
            var currFrame = imageName+i+".png";
            if(!JBridge.isFilePresent(currFrame))
            {
              console.error("Some images are not available for GIF :"+rawUrl+currFrame);
              return "";
            }
            urlSetCommands += "set_resolvedFile"+i+"=java.io.File->new:get_directory,s_" + JBridge.getFilePath(currFrame) + ";" +
                              "set_resolvedPath"+i+"=get_resolvedFile"+i+"->toString;"+
                              "set_bmp"+i+"=android.graphics.BitmapFactory->decodeFile:get_resolvedPath"+i+";"+
                              "set_frame"+i+"=android.graphics.drawable.BitmapDrawable->new:get_bmp"+i+";"+
                              "get_anime->addFrame:get_frame"+i+",i_"+delay+";"
      }
      urlSetCommands  +=  "this->setBackgroundDrawable:get_anime;"+
                          "get_anime->start;"
      prePend = urlSetCommands;
      dontLoad=true;
    }
    else
    {
      console.error(">>>> The value provided for gifUrl is not a valid URL");
    }

  }
  if (attrs.key == "numFrames") { return "";}
  if (attrs.key == "frameDelay") { return "";}


  function getImage(imageUrl){

    if(isURL(imageUrl)) {
      if(typeof window.__PROXY_FN == "undefined") {
        window.__PROXY_FN = {};
      }

      var image = imageUrl.substr(imageUrl.lastIndexOf('/') + 1)
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
        JBridge.renewFile(imageUrl, image, callback);
        dontLoad = true
      } else if(JBridge.getFilePath) {
        prePend = "set_directory=ctx->getDir:s_juspay,i_0;" +
                    "set_resolvedFile=java.io.File->new:get_directory,s_" + JBridge.getFilePath(image) + ";" +
                    "set_resolvedPath=get_resolvedFile->toString;" +
                    "set_dimage=android.graphics.drawable.Drawable->createFromPath:get_resolvedPath;"
        currTransVal = "get_dimage";
      }
    } else {
      var out = makeUrlCmd(imageUrl)
      prePend = out.prePend;
      currTransVal = out.currTransVal;
    }
  }

  if (attrs.key == "imageUrl") {
    getImage(attrs.value);
  }

  if (attrs.key == "imageWithFallback") {
    image = attrs.value.split(",")
    imageName = image[0]
    url = image[1]
    if(window.juspayAssetConfig && window.juspayAssetConfig.images && window.juspayAssetConfig.images[imageName]) {
      var out = makeUrlCmd(imageName)
      prePend = out.prePend;
      currTransVal = out.currTransVal;
    } else if(isURL(url)) {
      if(typeof window.__PROXY_FN == "undefined") {
        window.__PROXY_FN = {};
      }
      var image = url.substr(url.lastIndexOf('/') + 1)
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
        JBridge.renewFile(url, image, callback);
        dontLoad = true
      } else if(JBridge.getFilePath) {
        prePend = "set_directory=ctx->getDir:s_juspay,i_0;" +
                    "set_resolvedFile=java.io.File->new:get_directory,s_" + JBridge.getFilePath(image) + ";" +
                    "set_resolvedPath=get_resolvedFile->toString;" +
                    "set_dimage=android.graphics.drawable.Drawable->createFromPath:get_resolvedPath;"
        currTransVal = "get_dimage";
      }
    }
  }


  if (attrs.key == "cursorColorV2") {
    const id = allProps.find(a => a.key === "id");
    dontLoad = true;
    if(id != undefined){
      prePend = parseColor(attrs.value, "set_cursorColor");
      prePend += ";set_kl=java.lang.Class->forName:s_android.widget.TextView"
      prePend += ";set_draw=android.graphics.drawable.ShapeDrawable->new;get_draw->setIntrinsicHeight:i_25;get_draw->setIntrinsicWidth:i_4;set_p=get_draw->getPaint;get_p->setColor:get_cursorColor"
      prePend += ";set_currentView=this->findViewById:i_" + id.value
      prePend += ";set_c=java.lang.Class->forName:s_android.graphics.drawable.Drawable";
      prePend += ";set_f=get_kl->getDeclaredField:s_mEditor"
      prePend += ";get_f->setAccessible:b_true"
      prePend += ";set_editor=get_f->get:get_currentView"
      prePend += ";set_drawablesArr=java.util.ArrayList->new"
      prePend += ";get_drawablesArr->add:get_draw"
      prePend += ";get_drawablesArr->add:get_draw"
      prePend += ";infl->convertAndStoreArray:get_drawablesArr,get_c,s_drawables,b_false"
      prePend += ";set_fieldDash=get_editor->getClass;set_f=get_fieldDash->getDeclaredField:s_mCursorDrawable"
      prePend += ";get_f->setAccessible:b_true"
      prePend += ";get_f->set:get_editor,get_drawables;"
    }
  }

  if (attrs.key == "cursorColor") {
    console.log("cursor reached", attrs.value)
    prePend = parseColor(attrs.value, "set_cursorColor");
    prePend += ";set_draw=android.graphics.drawable.ShapeDrawable->new;get_draw->setIntrinsicHeight:i_25;get_draw->setIntrinsicWidth:i_4;set_p=get_draw->getPaint;get_p->setColor:get_cursorColor;"
    currTransVal = "get_draw"
  }

  if(attrs.key == "progressBarColor") {
    prePend = parseColor(attrs.value, "set_progressBarColor"); // Thickness value is ignored for android for now.
    prePend += ";set_progressBarColorTint=android.content.res.ColorStateList->valueOf:get_progressBarColor;"
    currTransVal = "get_progressBarColorTint"
  }

  // Implementation with thickness support, but the animation is not that good for the below one.
  // if(attrs.key == "progressBarColor") {
  //     let values = attrs.value.split(",")
  //   prePend = parseColor(values[1], "set_progressBarColor");
  //   prePend += ";set_gradientDraw=android.graphics.drawable.GradientDrawable->new;get_gradientDraw->setShape:i_3" //setShape:i_3, because in android these shapes are mapped to integers and circle is at mapped to 3.
  //   prePend += `;get_gradientDraw->setColor:get_progressBarColor;get_gradientDraw->setThickness:i_${values[0]};get_gradientDraw->setUseLevel:b_false`
  //   prePend += ";set_rotateDraw=android.graphics.drawable.RotateDrawable->new;get_rotateDraw->setDrawable:get_gradientDraw;get_rotateDraw->setToDegrees:f_1080;"
  //   currTransVal = "get_rotateDraw"
  // }

  if (attrs.key == "defaultImage") {
      var out = makeUrlCmd(attrs.value)
      prePend = out.prePend;
      currTransVal = out.currTransVal;;
  }

  if (attrs.key == "placeHolder") {
      var out = makeUrlCmd(attrs.value)
      prePend = out.prePend;
      currTransVal = out.currTransVal;
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
    getImage(attrs.value);
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
  if(attrs.key == "zIndex") {
     prePend = parseColor("#00000000");
     prePend += "this->setTranslationZ:f_" + attrs.value + ";"
     prePend += "this->setOutlineSpotShadowColor:get_colorInt;";
     prePend += "this->setOutlineAmbientShadowColor:get_colorInt;";
  }
  if (attrs.key == "shadow") {
    var shadowValues = attrs.value.split(',');
    let cornerRadiiArray = [0,0,0,0,0,0,0,0]
    for(var prop of allProps){
      if(prop.key == "cornerRadius"){
        cornerRadiiArray = cornerRadiiArray.map(function () {return prop.value})
        break;
      }
      else if (prop.key == "cornerRadii") {
        var cornerRadiis = prop.value.split(',');
        var cornerRadius = cornerRadiis.splice(0,1);
        cornerRadiiArray = [];
        for(var i = 0; i< cornerRadiis.length;++i){
          cornerRadiiArray.push((cornerRadiis[i]*cornerRadius)+"");
          cornerRadiiArray.push((cornerRadiis[i]*cornerRadius)+"");
        }
      }
    }
    var shadowBlur = shadowValues[2];
    var shadowOffset = {
      x: devicePixelRatio * Number(shadowValues[0]),
      y: devicePixelRatio * Number(shadowValues[1])
    };
   var shadowColor = utils.addAlphaToColor(shadowValues[4], shadowValues[5]);
    prePend = parseColor(shadowColor);
    prePend += "set_paint=get_ShapeDrawable->getPaint;"
    prePend += "get_paint->setShadowLayer:dpf_"
                  + shadowBlur + ",f_" + shadowOffset.x + ",f_" + shadowOffset.y + ",get_colorInt;"
    prePend += "get_paint->setColor:get_colorInt;";
    let arrList = "set_arr=java.util.ArrayList->new;";
    let floatArray = cornerRadiiArray.map(function(val,i){return "set_cornerRadius=java.lang.Float->new:dpf_"+ val + ";get_arr->add:get_cornerRadius;"});
    prePend += arrList + ";";
    prePend += "set_c=java.lang.Class->forName:s_java.lang.Float;";
    prePend += floatArray.join("");
    prePend += "infl->convertAndStoreArray:get_arr,get_c,s_pArr,b_true;";
    prePend += "set_r=android.graphics.drawable.shapes.RoundRectShape->new:get_pArr,null_pointer,null_pointer;"
    currTransVal = "get_r";
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

  // if (attrs.key == "ripple" && sessionInfo["android_api_level"] >= 23) {
  //   vals = JSON.parse(attrs.value);
  //   prePend = addClickFeedback(vals.rippleColor, vals.disableFeedback, vals.enableRadii);
  //   currTransVal = ":get_ripple";
  // }

  if (belongsTo == "VIEW")
  keyWord = globalObjMap[belongsTo].val;
  else if (belongsTo == "DRAWABLE") {
    keyWord = 'get_' + mapParams[attrs.key].subDrawable
  } else {
    keyWord = 'get_' + globalObjMap[belongsTo].val;
  }

  if (transformFn || attrs.key == "duration" || attrs.key == "delay" || attrs.key == "curve")
  _cmd = keyWord +  '->' + ((typeof obj.fnName == "undefined")?obj.varName:obj.fnName);
  else
    _cmd = keyWord + '->' +   attrs.key;

  if (obj.values && obj.values.length)
  _cmd += ':';

  if (!currTransVal && dontLoad)
  _cmd = ""
  else if (!prePend && !currTransVal)
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

function parseAttrs(group, belongsTo, transformFn, type) {
  attrs = group.props
  id = group.id
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

  return prepareCtr(attrs, belongsTo, id) + ';' + cmd;
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
        if (getSetType == "set") {
          if (type != "linearLayout"){
            groups.VIEW.props = groups.VIEW.props.filter(views => {
              if(views.key != "orientation") return views
            })
          }
          globalObjMap.VIEW = {ctr: "this", val: "this"};
        }
        else
        globalObjMap.VIEW = {ctr: "get_view", val: "get_view"};
      }

      // if (config.hasOwnProperty("onClick")) {
      //   groups.VIEW.props.push(
      //     {
      //       "key": "ripple",
      //       "value": JSON.stringify({
      //         "rippleColor": config.hasOwnProperty("rippleColor") ? config.rippleColor : "#e0e0e0",
      //         "disableFeedback": config.hasOwnProperty("disableFeedback") ? config.disableFeedback : false,
      //         "enableRadii": config.hasOwnProperty("enableRoundedRipple") && config.enableRoundedRipple
      //       })
      //     }
      //   );
      // }

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

    } else {
      // Works only for drawable
      if (!globalObjMap[keys[i]]) {
        if (getSetType == "set") {
          command += "set_arr=java.util.ArrayList->new;";
          command += "set_c=java.lang.Class->forName:s_android.graphics.drawable.Drawable;";
          command += "infl->convertAndStoreArray:get_arr,get_c,s_lyrArr,b_false;";
          globalObjMap[keys[i]] = {ctr: objMap[keys[i]].ctr,  val:  keys[i] };
          command += 'set_' +  globalObjMap[keys[i]].val + '=' +  parseAttrs(groups[keys[i]], keys[i], true, type)
            + 'this->' + objMap[keys[i]].viewMethod.split(',')[0] + ':' + 'get_' +  globalObjMap[keys[i]].val + ';'
        } else {
          globalObjMap[keys[i]] = {ctr: 'get_view->getBackground',  val:  keys[i] };
          command += 'set_' +  globalObjMap[keys[i]].val + '=' +  parseAttrs(groups[keys[i]], keys[i], true, type);
          command += 'this->' + objMap[keys[i]].viewMethod.split(',')[0] + ':' + 'get_' +  globalObjMap[keys[i]].val + ';';
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

// function addClickFeedback(rippleColor, disableFeedback, enableRadii) {
//   if (disableFeedback)
//     return "";

//   var feedback = "set_mask=android.graphics.drawable.ShapeDrawable->new;";
//   if (enableRadii) {
//     feedback += "set_c=java.lang.Class->forName:s_java.lang.Float;";
//     feedback += "set_arr=java.util.ArrayList->new;";
//     // 8 values, 2 for each corner. Starts at the left-top and moves clock-wise
//     feedback += "set_r=java.lang.Float->new:dpf_30;";
//     for (var i = 0; i < 8; i++)
//       feedback += "get_arr->add:get_r;";

//     feedback += "infl->convertAndStoreArray:get_arr,get_c,s_pArr,b_true;";
//     feedback += "set_rect=android.graphics.drawable.shapes.RoundRectShape->new:get_pArr,null_pointer,null_pointer;";
//     feedback += "get_mask->setShape:get_rect;";

//   }
//   feedback += parseColor(rippleColor, "set_ripplecolor");
//   feedback += "set_paint=get_mask->getPaint;get_paint->setColor:get_ripplecolor;";
//   feedback += "set_colorlist=android.content.res.ColorStateList->valueOf:get_ripplecolor;";
//   feedback += "set_ripple=android.graphics.drawable.RippleDrawable->new:get_colorlist,null_pointer,get_mask;";
//   return feedback;
// }

function configFunction(type, config, _getSetType, totalProps) {
  if(totalProps == undefined) {
    totalProps = config;
  }
  if(config.cornerRadius && (totalProps["rippleColor"] && ! totalProps["rcc"])) {
    config.rcc = config.cornerRadius +"," + config.cornerRadius + "," + config.cornerRadius + "," + config.cornerRadius + "," +config.cornerRadius +"," + config.cornerRadius + "," + config.cornerRadius + "," + config.cornerRadius;
  }
  config = flattenObject(config);
  getSetType = _getSetType;
  elementType = type;

  var groups = getConfigGroups(config, elementType);

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
  if (config['lottieAnimation']) {
    try {
      var animationArray = JSON.parse(config['lottieAnimation']);
      for (i = 0; i < animationArray.length; i++) {
        if (!animationArray[i].lottieUrl) continue;
        var lottieUrl = JSON.parse(animationArray[i].lottieUrl);
        if (!isURL(lottieUrl)) continue;
        var strictMode = animationArray[i].strictMode ? JSON.parse(animationArray[i].strictMode) : false;
        var animation = animationArray[i];
        var lottieName = lottieUrl.substring(lottieUrl.lastIndexOf('/') + 1)
        var filePresent = (typeof JBridge.isFilePresent == "function") && JBridge.isFilePresent(lottieName);
        if (filePresent) {
          animationArray[i].lottieUrl = lottieName;
          config.lottieAnimation = JSON.stringify(animationArray);
        }
        else {
          if (strictMode) {
            JBridge.renewFile(lottieUrl, lottieName);
          }
          else {
            var callback = callbackMapper.map(function (isNew, url, fileName) {
              animation.lottieUrl = lottieName;
              var updatedProps = {};
              updatedProps.id = config.id;
              updatedProps.lottieAnimation = JSON.stringify([animation]);
              Android.updateProperties(JSON.stringify(updatedProps));
            });
            JBridge.renewFile(lottieUrl, lottieName, callback);
          }
          animationArray.splice(i, 1);
        }
      }
    }
    catch (err) {
      console.log(">>>>error in prestoUI lottie Animation:", err);
    }
  }
  if (!flag) {
    config.runInUI = parseGroups(type, groups, config);
  }
  return config;
}

function appendToFontWhiteList(fonts) {
  state.fontsWhiteList = state.fontsWhiteList.concat(fonts);
}

module.exports = {
  configFunction: configFunction,
  appendToFontWhiteList: appendToFontWhiteList
}
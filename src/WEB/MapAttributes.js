let utils = require("./Utils"); 


function mapPropToStyle(element,props,type){
    let ele_style = "";                                                            
    ele_style += addProps(props);                                                 
    ele_style += addFontProp(props);                                    
    ele_style += addTransformProp(props);                                       
    ele_style += addStrokeProp(props);
    ele_style += addGradientProp(props);  
    ele_style += addRotateProp(props); 
    ele_style += addShadowProp(props); 
    ele_style += addTypeSpecificProp(type,props);

    // TODO: mapPropToStyle should not do these side effect, when merging Render.js and MapAttributes.js, seperate out these functions from here. 
    ele_style += addSetInputTypeProp(element,props); // also sets an attribute on mutable element 
    // setElemAttributes(element,props);

    return ele_style; 
}

// Author's Note: Haskel's pattern matching would've made this code prettier. - Convert Presto to Purs?  
// fontStyle take precedence over fontFamily 
function addProps(props){
    
    let ele_style = ""; 

    if ((props.hasOwnProperty("onClick") || props.hasOwnProperty("onClickEvent"))) {
        if(window.innerWidth > 550 && !props.cursorType) {ele_style += "cursor:pointer;";}
    }

    if (props.hasOwnProperty("cursorType")) { ele_style += "cursor: " + props.cursorType + ";"; }

    if (props.hasOwnProperty("textSize"))   { ele_style += "font-size: " + props.textSize + "px;"; }

    if (props.hasOwnProperty("fontSize"))   { ele_style += "font-size: " + props.fontSize + "px;"; }

    if (props.hasOwnProperty("backgroundColor")) { ele_style += "background-color: " + utils.parseColors(props.backgroundColor) + ";"};

    if (props.hasOwnProperty("background")) { ele_style += "background: " + props.background + ";"};
    
    if (props.hasOwnProperty("backgroundDrawable")) { ele_style += "background-image: " + "url('"+props.backgroundDrawable+"')" + ";"}; 

    if (props.hasOwnProperty("color")) { ele_style += "color: " + utils.parseColors(props.color) + ";"}; 

    if (props.hasOwnProperty("position")) {ele_style += "position: " + props.position + ";"}; 

    if (props.hasOwnProperty("bottomFixed")) {ele_style += "bottom: " + props.bottomFixed + ";"}; 

    if (props.hasOwnProperty("topFixed")) {ele_style += "top: " + props.topFixed + ";"}; 

    if (props.hasOwnProperty("leftFixed")) {ele_style += "left: " + props.leftFixed + ";"}; 

    if (props.hasOwnProperty("rightFixed")) {ele_style += "right: " + props.rightFixed + ";"}; 

    if (props.hasOwnProperty("zIndex")) {ele_style += "z-index:" + props.zIndex + ";"}; 

    if (props.hasOwnProperty("cornerRadius")) {ele_style += "border-radius:" + props.cornerRadius + "px;"}; 

    if (props.hasOwnProperty("alpha")) {ele_style += "opacity:" + props.alpha + ";"};
    
    if (props.hasOwnProperty("fontFamily")) {ele_style += "font-family:" + props.fontFamily + ";"}; 

    if (props.hasOwnProperty("blurBackground") && props.blurBackground) {ele_style += "backdrop-filter: blur(3px)";}

    if (props.hasOwnProperty("lineHeight")) {ele_style += "line-height: " + props.lineHeight + ";";}

    if (props.hasOwnProperty("objectFit")) {ele_style += "object-fit: " + props.objectFit + ";";}

    if (props.hasOwnProperty("clickable")) {ele_style += "pointer-events: " + (props.clickable ? "auto" : "none") + ";";}

    if (props.hasOwnProperty("display")) { ele_style += "display:" + props.display + ";"; }

    return ele_style; 

}

// These values are hardcoded likely since same prestoDOM property is being used for Android, iOS and Web
function addFontProp(props){

    let ele_style = "";
    
    
    if (props.typeface) {
        switch(props.typeface){
            case 'normal':
            ele_style += "font-weight: 400;";
            break;
            case 'bold':
            ele_style += "font-weight: 700;";
            break;
            case 'italic':
            ele_style += "font-style: italic;";
            break;
            case 'bold_italic':
            ele_style += "font-weight: 700;";
            ele_style += "font-style: italic;";
            break;
            case 'underline':
            ele_style += "text-decoration: underline;";
            break;
        }
    }

    if (props.fontStyle) {

        let match = props.fontStyle.match(/[/-]/);
        let fontName = match ? props.fontStyle.slice(0, match.index) : props.fontStyle;
        
        ele_style += "font-family:" + fontName + ";"; 
    
        if (match) {
            let type = props.fontStyle.slice(match.index + 1);
            type = type.replace(/[-/]/g, '');
            type  = type.toLowerCase();
        
            if (type.indexOf('italic') != -1)
                ele_style += "font-style: italic;";
        
            let fontWeight = 0;
        
            if (type.indexOf('extralight') != -1)
                fontWeight = 200;
            else if (type.indexOf('light') != -1)
                fontWeight = 300;
            else if (type.indexOf('regular') != -1 || type.indexOf('book') != -1)
                fontWeight = 400;
            else if (type.indexOf('semibold') != -1 || type.indexOf('medium') != -1)
                fontWeight = 500;
            else if (type.indexOf('bold') != -1 || type.indexOf('heavy') != -1)
                fontWeight = 700;
            else if (type.indexOf('black') != -1)
                fontWeight = 900;
        
            if(fontWeight > 0)
                ele_style += "font-weight:"+ fontWeight +";";
        }
    }


    return ele_style; 
}


function addTransformProp(props){
    let ele_style = "";
    let transform = ""; 
    if (props.translationX) {transform += "translateX(" + props.translationX + "px) "}; 

    if (props.translationY) {transform += "translateY(" + props.translationY + "px) "}; 

    if (props.scaleX) {transform += "scaleX(" + props.scaleX + ") "}; 

    if (props.scaleY) {transform += "scaleY(" + props.scaleY + ") "}; 

    if (props.rotation) {transform += "rotate(" + props.rotation + ") "}; 

    if (props.rotationX) {transform += "rotateX(" + props.rotationX + ") "}; 

    if (props.rotationY) {transform += "rotateY(" + props.rotationY + ") "}; 

    // if (key == "translationZ") {
    //     var v = config[key];
    //     config.style["-webkit-box-shadow"] = "0 0 "+v.toString()+"px rgba(0,0,0, .1)";
    //     config.style["-moz-box-shadow"]= "0 0 "+v.toString()+"px rgba(0,0,0, .1)";
    //     config.style["box-shadow"]=  "0 0 "+v.toString()+"px rgba(0,0,0, .1)";
        
    //   }
    if (transform.length > 0) {ele_style += "transform : " + transform + ";"};
    return ele_style; 
}


function addStrokeProp(props){

    var ele_style = ""; 

    if (props.hasOwnProperty("stroke")) {
    
        let values = props.stroke.split(",");

        if(values.length == 2) { ele_style += "border: " + values[0] + "px solid " + values[1] + ";";}
        else if(values.length == 3){

            if (values[2] == "rbl"){
                ele_style += "border-bottom: " + values[0] + "px solid " + values[1] + ";";
                ele_style += "border-left: " + values[0] + "px solid " + values[1] + ";";
                ele_style += "border-right: " + values[0] + "px solid " + values[1] + ";";
            }
            else if (values[2] == "b"){
                ele_style += "border-bottom: " + values[0] + "px solid " + values[1] + ";";
            }
            else if (values[2] == "r"){
                ele_style += "border-right: " + values[0] + "px solid " + values[1] + ";";
            }
            else if (values[2] == "rb"){
                ele_style += "border-bottom: " + values[0] + "px solid " + values[1] + ";";
                ele_style += "border-right: " + values[0] + "px solid " + values[1] + ";";
            }
            else
                ele_style += "border: " + values[0] + "px  " + values[1] + " " + values[2] + ";";
            }
    }

    if (props.hasOwnProperty("strokeTop")) {
        let values = props.strokeTop.split(",");
        if(values.length == 2)
            ele_style += "border-top: " + values[0] + "px solid " + values[1] + ";";            
        else if(values.length == 3)
            ele_style += "border-top: " + values[0] + "px  " + values[1] + " " + values[2] + ";";
    }

    if (props.hasOwnProperty("strokeRight")) {
        let values = props.strokeRight.split(",");
        if(values.length == 2)
            ele_style += "border-right: " + values[0] + "px solid " + values[1] + ";";            
        else if(values.length == 3)
            ele_style += "border-right: " + values[0] + "px  " + values[1] + " " + values[2] + ";";
    }

    if (props.hasOwnProperty("strokeBottom")) {
        let values = props.strokeBottom.split(",");
        if(values.length == 2)
            ele_style += "border-bottom: " + values[0] + "px solid " + values[1] + ";";            
        else if(values.length == 3)
            ele_style += "border-bottom: " + values[0] + "px  " + values[1] + " " + values[2] + ";";
    }

    if (props.hasOwnProperty("strokeRight")) {
        let values = props.strokeRight.split(",");
        if(values.length == 2)
            ele_style += "border-right: " + values[0] + "px solid " + values[1] + ";";            
        else if(values.length == 3)
            ele_style += "border-right: " + values[0] + "px  " + values[1] + " " + values[2] + ";";
    }

    if (props.hasOwnProperty("strokeLeft")) {
        let values = props.strokeLeft.split(",");
        if(values.length == 2)
            ele_style += "border-left: " + values[0] + "px solid " + values[1] + ";";            
        else if(values.length == 3)
            ele_style += "border-left: " + values[0] + "px  " + values[1] + " " + values[2] + ";";
    }

    return ele_style; 
}

function addGradientProp(props){

    var ele_style = "";
    
    if (props.hasOwnProperty("gradient")) {
        var gradientObj =JSON.parse(props.gradient);
        if (gradientObj.type == "linear") {
          var angle = gradientObj.angle;
          var values = gradientObj.values;
          var colors = values.join(", ");
          ele_style += "background-image: " + "linear-gradient("+angle+"deg, "+colors+");"; 
        }
        else {
          var values = gradientObj.values;
          var colors = values.join(", ");
          ele_style += "background-image: " + "radial-gradient("+colors+");"; 
        }
    }

    return ele_style; 
}


function addTypeSpecificProp(type,props){

    let ele_style = ""; 

    if (props.hasOwnProperty('visibility')){
        if (props.visibility == "gone") return ele_style; 
    }

    if (props.hasOwnProperty('display')){
        if (props.display == "none") return ele_style; 
    }


    if (type == "textView" && props.hasOwnProperty("gravity")) {
        ele_style += "text-align:"+props.gravity+";"; 
        
        if (props.gravity == "center_vertical") {
            ele_style += "align-items:center;"; 
            ele_style += "display:flex;";   
        } 
        else if (props.gravity == "center_horizontal") {
            ele_style += "justify-content:center;"; 
            ele_style += "display:flex;";   
        } 
        else if (props.gravity == "center") {
            ele_style += "justify-content:center;"; 
            ele_style += "align-items:center;"; 
            ele_style += "display:flex;";   
        }
    }

    if (type == "linearLayout" && props.hasOwnProperty("gravity")){
        if (props.margin && props.gravity=="center_vertical"){
            
            var margin=props.margin.split(",");
            if (props.width == "match_parent"){
                let width = "calc(100% - "+(parseInt(margin[0])+parseInt(margin[2])).toString()+"px )";
                ele_style += "width:" + width + ";"; 
            }
        }
    }
    
    return ele_style; 
}




function addRotateProp(props){

    var ele_style = ""; 
    
    if (props.hasOwnProperty("rotateImage")){
        if(props.rotateImage){
          ele_style += "-webkit-animation:load3 4s infinite linear;";
          ele_style += "animation-duration:4s;";
          ele_style += "animation-timing-function:linear;";
          ele_style += "animation-delay:0s;";
          ele_style += "animation-iteration-count:infinite;";
          ele_style += "animation-direction:normal;";
          ele_style += "animation-fill-mode:none;";
          ele_style += "animation-play-state:running;";
          ele_style += "animation-name:rotation;";
        }
    }

    return ele_style; 
}

function addShadowProp(props){

    var ele_style = ""; 

    if (props.hasOwnProperty("shadow")) {
        var shadowValues = props.shadow.split(props.shadowSeparator || ',');
        var shadowBlur = utils.rWS(utils.cS(shadowValues[2]));
        var shadowSpread = utils.rWS(utils.cS(shadowValues[3]));
        var shadowOpacity = utils.rWS(utils.cS(shadowValues[5]));
        var shadowOffset = {
            x: utils.rWS(utils.cS(shadowValues[0])),
            y: utils.rWS(utils.cS(shadowValues[1]))
          };

        var shadowColor = utils.convertColorToRgba(shadowValues[4]);
        var shadowType = props.shadowType ? `${props.shadowType} ` : ''

        ele_style += "box-shadow:" + shadowType + parseInt(shadowOffset.x) + "px " + parseInt(shadowOffset.y) + "px " + parseInt(shadowBlur) + "px " + parseInt(shadowSpread) + "px rgba(" + shadowColor.r + ", " +  shadowColor.g + ", " +  shadowColor.b + ", " +  shadowColor.a + ");" ;
    }

    return ele_style; 
}


function addSetInputTypeProp(ele,props){
    
    var ele_style = ""; 

    if (props.hasOwnProperty("inputType")) {
    
        var inputType = "text";

        if (props.inputType == "numericPassword" || props.inputType == "password") {          
          if(props.inputTypeI == 4 && window.innerWidth < 550){ // This feels like a very specific use-case? Investigate 
            inputType = "tel";
            ele_style += "-webkit-text-security:disc;";
            ele_style += "-moz-text-security:disc;";
            ele_style += "text-security:disc;"; 
          } 
          else {
            ele.setAttribute("autocomplete","new-password"); 
            inputType = "password"; 
          }
        } 

        else if (props.inputType == "disabled") {
            ele.setAttribute("disabled","disabled");
        } 

        else if (props.inputType == "numeric") {
            inputType = "number"
        }

        if (props.hasOwnProperty("separator")) {
          if(props.inputType == "numeric"){
            inputType = "tel"  
          } else {
            inputType = "text"
          }
        }

        ele.setAttribute("type",inputType); 
    }

    return ele_style; 
}


function getAnimeTransform(props){

    var elem_style_value = ""; 

    if (props.hasOwnProperty("a_translationY")) {
        elem_style_value += "translateY(" + props["a_translationY"] + "px) ";
    }

    if (props.hasOwnProperty("a_translationX")) {
        elem_style_value += "translateX(" + props["a_translationX"] + "px) ";
    }

    if (props.hasOwnProperty("a_scaleX")) {
        elem_style_value += "scaleX(" + props["a_scaleX"] + ") ";
    }

    if (props.hasOwnProperty("a_scaleY")) {
        elem_style_value += "scaleY(" + props["a_scaleY"] + ") ";
    }

    if (props.hasOwnProperty("a_rotation")) {
        elem_style_value += "rotate(" + props["a_rotation"] + "deg) ";
    }

    if (props.hasOwnProperty("a_rotationX")) {
        elem_style_value += "rotateX(" + props["a_rotationX"] + "deg) ";
    }

    if (props.hasOwnProperty("a_rotationY")) {
        elem_style_value += "rotateY(" + props["a_rotationY"] + "deg) ";
    }



    if (elem_style_value.length > 0) 
        return " transform: "+ elem_style_value +";";
    else 
        return ""; 

}


function getAnimeOpacity(props){
    if (props.hasOwnProperty("a_alpha")){
        return "opacity: " + props["a_alpha"] + "; "; 
    }
    else 
        return ""; 
}

function getAnimeTransition(props){

    if (props.hasOwnProperty("a_duration") && !isNaN(props["a_duration"])) {
        const suffix = props.transitionTimingFunction ? (" " + props.transitionTimingFunction) : "";
        return "transition: " + props["a_duration"] + 'ms all' + suffix + ";"; 
    }
    else return ""; 

}

// add attributes to the mutable element 
function setElemAttributes(element,props){
    
    if (props.hasOwnProperty("url")) { element.setAttribute('src',url) } 
    
    if (props.hasOwnProperty("autofocus") && (navigator.userAgent.indexOf("iPhone") == -1)) { element.setAttribute('autofocus','autofocus') }; // device should not be an iphone
    

    if(props.hasOwnProperty("focus")) {
            if (props.focus && props.id){
                var doc = document.getElementById(props.id);
                if (doc){
                doc.focus();
                }
        }
    }


    if (props.hasOwnProperty('contentEditable')) {element.setAttribute('contentEditable','true')}; 
    
    if (props.hasOwnProperty('hint')) {element.setAttribute('hint',props.hint)}; 

    if (props.hasOwnProperty("pattern")) {
        element.setAttribute("data-pattern",props.pattern); 
        var data = props.pattern.split(',');
        var length = parseInt(data.pop());
        if(length>10) { length = 10;    }
        element.setAttribute("size",length); 
    }

    if (props.hasOwnProperty("separator")) {
        element.setAttribute("separator",props.separator);
    }
    
    if (props.hasOwnProperty("separatorRepeat")) {
        element.setAttribute("separatorRepeat",props.separatorRepeat);
    }

    return element; 

    // if (props.hasOwnProperty("myAttr")) {
    //     element.setAttribute(config.myAttr,config.myAttr);
    // }

}





module.exports = {
    mapPropToStyle,
    getAnimeTransform,
    getAnimeOpacity,
    getAnimeTransition,
    setElemAttributes
}






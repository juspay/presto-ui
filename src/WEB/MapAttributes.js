let utils = require("./Utils"); 


function mapPropToStyle(element,props,type){

    let ele_style = ""; // contains the css of the element
    ele_style += simpleMap(props); // normal one liner mapping
    ele_style += prestoSpecificTransform(props); // hardcoded font values etc. 
    ele_style += transformCSSProperty(props);  // specific transform css property 
    ele_style += typeMap(type,props)
    attachAttributes(element,props);  // element is mututable, adding attributes to it like src, url etc. things which are not css basically 
    console.log("custom ",ele_style);
    return ele_style; 
}

// Author's Note: Haskel's pattern matching would've made this code neat. 
// fontStyle take precedence over fontFamily 
function simpleMap(props){
    
    let ele_style = ""; 

    if (props.cursorType) { ele_style += "cursor: " + props.cursorType + ";"; }

    if (props.textSize)   { ele_style += "font-size: " + props.textSize + "px;"; }

    if (props.fontSize)   { ele_style += "font-size: " + props.fontSize + "px;"; }

    if (props.backgroundColor) { ele_style += "background-color: " + utils.parseColors(props.backgroundColor) + ";"};

    if (props.background) { ele_style += "background: " + props.background + ";"};
    
    if (props.backgroundDrawable) { ele_style += "background-image: " + "url('"+props.backgroundDrawable+"')" + ";"}; 

    if (props.color) { ele_style += "color: " + utils.parseColors(props.color) + ";"}; 

    if (props.position) {ele_style += "position: " + props.position + ";"}; 

    if (props.bottomFixed) {ele_style += "bottom: " + props.bottomFixed + ";"}; 

    if (props.topFixed) {ele_style += "top: " + props.topFixed + ";"}; 

    if (props.leftFixed) {ele_style += "left: " + props.leftFixed + ";"}; 

    if (props.rightFixed) {ele_style += "right: " + props.rightFixed + ";"}; 

    if (props.zIndex) {ele_style += "z-index:" + props.zIndex + ";"}; 

    if (props.cornerRadius) {ele_style += "border-radius:" + props.cornerRadius + "px;"}; 

    if (props.alpha) {ele_style += "opacity:" + props.alpha + ";"};
    
    if (props.fontFamily) {ele_style += "font-family:" + props.fontFamily + ";"}; 

    
    return ele_style; 

}

// These values are hardcoded likely since same property is being used for Android, iOS and Web
function prestoSpecificTransform(props){

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

// transform css property mappings 
function transformCSSProperty(props){
    let ele_style = "";
    let transform = ""; 
    
    if (props.translationX) {transform += "translateX(" + props.translationX + ") "}; 

    if (props.translationY) {transform += "translateY(" + props.translationY + ") "}; 

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

// add attributes to the mutable element 
function attachAttributes(element,props){
    if (props.url) { element.setAttribute('src',url) } 
    if (props.autofocus && (navigator.userAgent.indexOf("iPhone") !== -1)) { element.setAttribute('autofocus',"autofocus") }; // device should not be an iphone

}

function typeMap(type,props){
    let ele_style = ""; 
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

module.exports = {
    mapPropToStyle
}






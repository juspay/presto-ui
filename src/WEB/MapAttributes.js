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

let initializeShow = function (elem, props, type) {
    var style = "";
    if (type == 'linearLayout') {
        if (props.hasOwnProperty('width') && props.width == 'wrap_content') {
            style += "display: inline-flex;";
            style += "width: max-content;";
            // elem.style.display = 'inline-flex';
            // elem.style.width = 'max-content';
        } else {
            style += "display: flex;";
            //elem.style.display = "flex";
        }
    } else {
        if (props.hasOwnProperty('width') && props.width == 'wrap_content') {
            style += "display:inline-block;";
            style += "width:max-content;";
            // elem.style.display = 'inline-block';
            // elem.style.width = 'max-content';
        } else {
            // iFrame/webView display is set to none by default in hyper-sdk-web.
            // enabling explicitly for visible case.
            if(type == 'webView') {
                style += "display: block;";
            }
            // style += "display:'';";
        //    elem.style.display = '';
        }
    }
    return style;
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

    if (props.hasOwnProperty("background") && !props.hasOwnProperty("shouldShimmer")) { ele_style += "background: " + utils.parseColors(props.background) + ";"};
    
    if (props.hasOwnProperty("background") && props.hasOwnProperty("shouldShimmer") && props.shouldShimmer) { 
        shimmerColor = utils.parseColors(props.background);
        ele_style += "animation : shimmer 2s infinite;";
        ele_style += "background-color: " + shimmerColor + ";";
        ele_style += "background-repeat: no-repeat;";
        ele_style += "background-image: linear-gradient(to right," + shimmerColor + " 0%, #edeef1 20%, " + shimmerColor + " 40%, " + shimmerColor + " 100%);";
        ele_style += "background-size: " + props.width + " 100%;";
    }

    if (props.hasOwnProperty("backgroundDrawable")) { ele_style += "background-image: " + "url('"+props.backgroundDrawable+"')" + ";"};

    if (props.hasOwnProperty("color")) { ele_style += "color: " + utils.parseColors(props.color) + ";"};

    if (props.hasOwnProperty("position")) {ele_style += "position: " + props.position + ";"};

    if (props.hasOwnProperty("bottomFixed")) {ele_style += "bottom: " + props.bottomFixed + ";"};

    if (props.hasOwnProperty("topFixed")) {ele_style += "top: " + props.topFixed + ";"};

    if (props.hasOwnProperty("leftFixed")) {ele_style += "left: " + props.leftFixed + ";"};

    if (props.hasOwnProperty("rightFixed")) {ele_style += "right: " + props.rightFixed + ";"};

    if (props.hasOwnProperty("zIndex")) {ele_style += "z-index:" + props.zIndex + ";"};

    if (props.hasOwnProperty("cornerRadius")) {ele_style += "border-radius:" + props.cornerRadius + "px;"};

    if (props.hasOwnProperty("cornerRadii")) {
        const [radius, ...corners] = props.cornerRadii.split(',');
        ele_style += "border-radius: " + corners.map(bool => `${bool * radius}px`).join(' ') + ";";
    }

    if (props.hasOwnProperty("alpha")) {ele_style += "opacity:" + props.alpha + ";"};

    if (props.hasOwnProperty("fontFamily")) {ele_style += "font-family:" + props.fontFamily + ";"};

    if (props.hasOwnProperty("blurBackground") && props.blurBackground) {ele_style += "backdrop-filter: blur(3px)";}

    if (props.hasOwnProperty("lineHeight")) {ele_style += "line-height: " + props.lineHeight + ";";}

    if (props.hasOwnProperty("objectFit")) {ele_style += "object-fit: " + props.objectFit + ";";}

    if (props.hasOwnProperty("clickable")) {ele_style += "pointer-events: " + (props.clickable ? "auto" : "none") + ";";}

    if (props.hasOwnProperty("display")) { ele_style += "display:" + props.display + ";"; }

    if (props.ellipsize) { ele_style += "white-space: nowrap; overflow: hidden; text-overflow: ellipsis;";}

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

        if(values.length == 2) { 
            ele_style += "border: " + values[0] + "px solid " + values[1] + ";";
        }
        else if(values.length == 3){

            strokeMap = {"b": "border-bottom", "t" : "border-top", "r" : "border-right", "l" : "border-left"};
      
            for (var i of values[2]){
                if (strokeMap[i] !== undefined)
                ele_style += strokeMap[i] + ": " + values[0] + "px solid " + values[1] + ";";
            }
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

function addTransitionValue(props) {
    //let elem_transition = props.transition == undefined ? "0ms all" : props.transition // It will always be undefined lol
    var transition_val = [String(props.a_duration || 0) +"ms","all",props.transitionTimingFunction].filter(Boolean).join(" ");
    return "transition:" + transition_val + ";";


}
function addSize(view = {}){

    var props = view.props
    var parentView = view.parent || {}
    parentView.state = parentView.state || {}
    view.state = view.state || {}
    var parentProps = parentView.props || {}
    // Add elem as an argument if you are gonna uncomment it
    // elem.style.width = 'auto';
    // elem.style.height = 'auto';
    let elem_style = "width : auto; ";
    elem_style += "height: auto; ";


    if (props.hasOwnProperty('width')) {
        if (props.width == 'match_parent' && !parentView.state.treatMatchParentAsWrapWidth) {
            // treat parent wrap content as wrap_content instead of match_parent
            if(props.hasOwnProperty('margin')){
                var margin=props.margin.split(",");
                elem_style += "width:" + "calc(100% - "+(parseInt(margin[0])+parseInt(margin[2])).toString()+"px );";
            }
            else elem_style += "width : 100%; ";
            //elem.style.width = '100%';
        } else if (props.width == 'match_parent' && parentView.state.treatMatchParentAsWrapWidth) { 
            view.state.practicalWidth = 'wrap_content'
        } else if (props.width == 'wrap_content') {
            view.state.practicalWidth = 'wrap_content';
        } else if (!isNaN(props.width)) {
            if (props.hasOwnProperty('percentWidth') && props.percentWidth)
                elem_style += "width: " + props.width + "%;";
                // elem.style.width = props.width + '%';
            else
            elem_style += "width: " + props.width + "px;";
            //elem.style.width = props.width + 'px';
        }
    }
    if (props.hasOwnProperty('height')) {
        if (props.height == 'match_parent' && !parentView.state.treatMatchParentAsWrapHeight) {
            elem_style += "height: 100%;";
            // elem.style.height = '100%';
        } else if (props.height == 'match_parent' && parentView.state.treatMatchParentAsWrapHeight) { 
            view.state.practicalHeight = 'wrap_content'
            elem_style += "height: auto;";
            //elem.style.height = "auto";
            // You see below
        } else if (props.height == 'wrap_content') {
            view.state.practicalHeight = 'wrap_content'
        } else if (!isNaN(props.height)) {
            if (props.hasOwnProperty('percentHeight') && props.percentHeight)
                elem_style += "height: " + props.height + "%;";
//                elem.style.height = props.height + '%';
            else
                elem_style += "height: " + props.height + "px;";
//            elem.style.height = props.height + 'px';
        }
    }

    if (props.hasOwnProperty('minWidth') && !isNaN(props.minWidth)) {
        if (props.percentMinWidth)
            elem_style += "min-width: " + props.minWidth + "%;";
//            elem.style.minWidth = props.minWidth + '%';
        else
            elem_style += "min-width: " + props.minWidth + "px;";

        //    elem.style.minWidth = props.minWidth + 'px';
    }

    if (props.hasOwnProperty('minHeight') && !isNaN(props.minHeight)) {
        if (props.percentMinHeight)
            elem_style += "min-height: " + props.minHeight + "%;";
            // elem.style.minHeight = props.minHeight + '%';
        else
            elem_style += "min-height: " + props.minHeight + "px;";
            // elem.style.minHeight = props.minHeight + 'px';
    }

    if (props.hasOwnProperty('maxWidth') && !isNaN(props.maxWidth)) {
        if (props.percentMaxWidth)
            elem_style += "max-width: " + props.maxWidth + "%;";
//            elem.style.maxWidth = props.maxWidth + '%';
        else
            elem_style += "max-width: " + props.maxWidth + "px;";
        //            elem.style.maxWidth = props.maxWidth + 'px';
    }

    if (props.hasOwnProperty('maxHeight') && !isNaN(props.maxHeight)) {
        if (props.percentMaxHeight)
            elem_style += "max-height: " + props.maxHeight + "%;";
       // elem.style.maxHeight = props.maxHeight + '%';
        else
            elem_style += "max-height: " + props.maxHeight + "px;";
            //elem.style.maxHeight = props.maxHeight + 'px';
    }
    return elem_style;
}

function addBorder(props) {
    let elem_style = "";
    if (props.hasOwnProperty('padding')) {
        let padding = props.padding.split(',').map(a => a * 1);
        elem_style += "padding: " + padding[1] + "px " + padding[2] + "px " + padding[3] + "px " + padding[0] + "px;";
//        elem.style['padding'] = padding[1] + 'px ' + padding[2] + 'px ' + padding[3] + 'px ' + padding[0] + 'px';
    }

    if (props.hasOwnProperty('margin')) {
        let margin = props.margin.split(',').map(a => a * 1);
        elem_style += "margin: " + margin[1] + "px " + margin[2] + "px " + margin[3] + "px " + margin[0] + "px;";
//        elem.style['margin'] = margin[1] + 'px ' + margin[2] + 'px ' + margin[3] + 'px ' + margin[0] + 'px';
    }
    return elem_style;
}

function addVisibility(elem, props, type) {
    let elem_style = "";
    if (props.hasOwnProperty('visibility')) {
        let visibility = props.visibility;
        if (visibility == 'invisible')
            elem_style += "visibility: hidden;";
            //elem.style.visibility = "hidden";
        else if (visibility == 'gone')
            elem_style += "display: none;";
            //elem.style.display = "none";
        else {
            // elem_style += "visibility: '';";
            //elem.style.visibility = '';
            elem_style += initializeShow(elem, props, type);
        }
    } else {
        elem_style += initializeShow(elem, props, type);
    }
    return elem_style;
}

function addExpandability(elem, props, type) {
    let elem_style = "";
    if (type == "accordionLayout" && props.hasOwnProperty('expand')) {
        elem_style += "overflow: hidden;";
        var anim_duration = 0; // default anim duration in seconds
        var maxHeight;
        if (props.hasOwnProperty('maxHeight')) {
            maxHeight = props.maxHeight;
        } else {
            maxHeight = utils.calculateHeight(elem);
        }
        if (props.hasOwnProperty('expandDuration')) {
            anim_duration = +props.expandDuration / 1000;
        }
        elem_style += "transition: max-height " + anim_duration + "s ease-in-out;";
        if (props.expand){
            elem_style +=  "max-height: " + (maxHeight <= 0 ? 1080 : maxHeight) + "px;";
        }
        else {
            elem_style += "max-height: 0px;";
        }
    }
    return elem_style;
}
function addOverFlow(props) {
    let elem_style ="";
    if (props.hasOwnProperty('overFlowVisible')) {
        if (props.overFlowVisible) {
            elem_style += "overflow: visible;";
            // elem.style.overflow = "visible"
        }
    }
    return elem_style;
}
function setGravityStylesForRow(elem, props) {

    var gravity_row_style = "";

    if (!props.hasOwnProperty('gravity') || !props.gravity) {
        props.gravity = '';
        //return;
    }

    switch (props.gravity) {
        case 'center_vertical':
            gravity_row_style += "align-items: center;";
            gravity_row_style += "justify-content: flex-start;";

            // elem.gravity_row_style['align-items'] = 'center';
            // elem.gravity_row_style['justify-content'] = 'flex-start';
            break;
        case 'center_horizontal':
            gravity_row_style += "align-items: flex-start;";
            gravity_row_style += "justify-content: center;";
            // elem.gravity_row_style['align-items'] = 'flex-start';
            // elem.gravity_row_style['justify-content'] = 'center';
            break;
        case 'center':
            gravity_row_style += "align-items: center;";
            gravity_row_style += "justify-content: center;";
            // elem.gravity_row_style['align-items'] = "center";
            // elem.gravity_row_style['justify-content'] = "center";
            break;
        case 'left':
        case 'start':
            gravity_row_style += "align-items: flex-start;";
            gravity_row_style += "justify-content: flex-start;";
            // elem.gravity_row_style['align-items'] = 'flex-start';
            // elem.gravity_row_style['justify-content'] = 'flex-start';
            break;
        case 'right':
        case 'end':
            gravity_row_style += "align-items: flex-start;";
            gravity_row_style += "justify-content: flex-end;";
            // elem.gravity_row_style['align-items'] = 'flex-start';
            // elem.gravity_row_style['justify-content'] = 'flex-end';
            break;
        case 'stretch':
            gravity_row_style += "align-items: stretch;";
            gravity_row_style += "justify-content: flex-start;";
            // elem.gravity_row_style['align-items'] = 'stretch';
            // elem.gravity_row_style['justify-content'] = 'flex-start';
            break;
        default:
            gravity_row_style += "align-items: flex-start;";
            gravity_row_style += "justify-content: flex-start;";
            // elem.gravity_row_style['align-items'] = 'flex-start';
            // elem.gravity_row_style['justify-content'] = 'flex-start';
            break;
    }

    return gravity_row_style;
}
function setGravityStylesForColumn(elem, props) {

    var gravity_col_style = "";
    if (!props.hasOwnProperty('gravity') || !props.gravity) {
        props.gravity = '';
        //return;
    }

    switch (props.gravity) {
        case 'center_vertical':
            gravity_col_style += "align-items: flex-start;";
            gravity_col_style += "justify-content: center;";
            // elem.style['align-items'] = 'flex-start';
            // elem.style['justify-content'] = 'center';
            break;
        case 'center_horizontal':
            gravity_col_style += "align-items: center;";
            gravity_col_style += "justify-content: flex-start;";
            // elem.style['align-items'] = 'center';
            // elem.style['justify-content'] = 'flex-start';
            break;
        case 'center':
            gravity_col_style += "align-items: center;";
            gravity_col_style += "justify-content: center;";
            // elem.style["align-items"] = "center";
            // elem.style["justify-content"] = "center";
            break;
        case 'left':
        case 'start':
            gravity_col_style += "align-items: flex-start;";
            gravity_col_style += "justify-content: flex-start;";
            // elem.style['justify-content'] = 'flex-start';
            // elem.style['align-items'] = 'flex-start';
            break;
        case 'right':
        case 'end':
            gravity_col_style += "align-items: flex-end;";
            gravity_col_style += "justify-content: flex-start;";
            // elem.style['align-items'] = 'flex-end';
            // elem.style['justify-content'] = 'flex-start';
            break;
        case 'stretch':
            gravity_col_style += "align-items: stretch;";
            gravity_col_style += "justify-content: flex-start;";
            // elem.style['align-items'] = 'stretch';
            // elem.style['justify-content'] = 'flex-start';
            break;
        default:
            gravity_col_style += "align-items: flex-start;";
            gravity_col_style += "justify-content: flex-start;";
            // elem.style['align-items'] = 'flex-start';
            // elem.style['justify-content'] = 'flex-start';
            break;
    }
    return gravity_col_style;
}

function addLayout(elem, type, props) {
    let scrollBarX = props.hasOwnProperty('scrollBarX')?props.scrollBarX:true;
    let scrollBarY = props.hasOwnProperty('scrollBarY')?props.scrollBarX:true;
    let elem_style = "";
    switch(type){
        case 'linearLayout':
            elem_style += "box-sizing: border-box;";
            //elem.style["box-sizing"] = "border-box";

            if (props.hasOwnProperty('fixedWrap') && !props.fixedWrap) {
                elem_style += "flex-wrap: nowrap;";
                //elem.style["flex-wrap"] = "nowrap";
            } else {
                // elem_style += "flex-wrap: wrap;";
                //elem.style["flex-wrap"] = "wrap";
            }


            let orient = props.orientation == "vertical" ? "column" : "row";
            elem_style += "flex-direction: " + orient + ";";
            // elem.style["flex-direction"] =

            if (orient == 'row')
                elem_style += setGravityStylesForRow(elem, props);
            else
                elem_style += setGravityStylesForColumn(elem, props);

            // if (elem.style["flex-direction"] == 'row')
            //     setGravityStylesForRow(elem, props);
            // else
            //     setGravityStylesForColumn(elem, props);

            if (props.hasOwnProperty('scrollBarX')) {
                if (props.scrollBarX)
                    elem_style += "overflow-x: auto;";
//                  elem.style.overflowX = 'auto'
                else
                    elem_style += "overflow-x: hidden;";
//              elem.style.overflowX = 'hidden'
            }

            if (props.hasOwnProperty('scrollBarY')) {
                if (props.scrollBarY)
                    elem_style += "overflow-y: auto;";
                    // elem.style.overflowY = 'auto'
                else
                    elem_style += "overflow-y: hidden;";
                    // elem.style.overflowY = 'hidden'
            }
            break;
        case "horizontalScrollView":
            elem_style += "overflow-x: auto;";
            elem_style += "overflow-y: hidden;";
            // elem.style.overflowX = "auto";
            // elem.style.overflowY = "hidden";

            // if (!scrollBarX)
            //     elem_style += "overflow-x: hidden;";
            break;
        case 'listView':
            elem_style += "overflow-x: hidden;";
            elem_style += "overflow-y: auto;";

            // elem.style.overflowY = "auto";
            // elem.style.overflowX = "hidden";

            // if (!scrollBarY)
            //     elem_style += "overflow-y: hidden;";
                // elem.style.overflowY = 'hidden';
            break;
        case 'scrollView':
            elem_style += "overflow-x: auto;";
            elem_style += "overflow-y: auto;";

            // elem.style.overflowX = 'auto';
            // elem.style.overflowY = 'auto';

            // if (!scrollBarX)
            //     elem_style += "overflow-x: hidden;";
            // if (!scrollBarY)
            //     elem_style += "overflow-y: hidden;";
            break;
        case 'relativeLayout':
            elem_style += "position: relative;";
            // elem.style.position = 'relative';

            if (props.hasOwnProperty('scrollBarX')) {
                if (props.scrollBarX)
                    elem_style += "overflow-x: auto;";
                    // elem.style.overflowX = 'auto'
                else
                    elem_style += "overflow-x: hidden;";
                    // elem.style.overflowX = 'hidden'
                }

                if (props.hasOwnProperty('scrollBarY')) {
                    if (props.scrollBarY)
                        elem_style += "overflow-y: auto;";
                        //  elem.style.overflowY = 'auto'
                    else
                        elem_style += "overflow-y: hidden;";
                //          elem.style.overflowY = 'hidden'
        }
    }

    return elem_style;
}

function addImage(type,props,elem) {
    if (type == 'imageView') {
        if (props.imageUrl) {
            let imageUrl = props.imageUrl

            if (props.rawData) {
                // Do Nothing
            } else {
                let temp = imageUrl.split('.')
                let ext = ''
                if (temp && temp.length > 0)
                    ext = temp[temp.length - 1]

                let exts = ["jpeg", "jpg", "png", "bmp", "svg", "gif"]
                ext = ext.toLowerCase()

                if(!imageUrl.includes("data:image/") && !exts.includes(ext)) {
                    imageUrl += '.png'
                }
            }

            elem.setAttribute('src', imageUrl)
        }
    }
}
function findArticle(children){
    let article = null;
    if (children.length) {
        for (let i = 0; i < children.length; i++) {
            if (children[i].nodeName.toLowerCase() == 'article') {
                article = children[i]
                break
            }
        }
    }
    return article? article:document.createElement('article');
}
function getArticle(children, config) {
    let article = findArticle(children);

    if (config.isHtmlContent)
        article.innerHTML = config.textFromHtml
    else
        article.innerText = config.text
    article.style.wordBreak = "break-word"
    article.style.display = "inline"
    return article;

}
function getTextStyle(config){
    let text = "white-space:initial;";
    return config.letterSpacing ? text + "letter-spacing:"+config.letterSpacing+";" : text;
}
function createTextElement(elem, config) {

    let text_style = getTextStyle(config);
    let article = getArticle(elem.childNodes, config);
    elem.appendChild(article)
    return text_style;
}
function addTextProperties(props, elem, type) {
    let elem_style = ""
    if (props.hasOwnProperty("text")){
        if (type == "editText")
            elem.value = props.text
        else
            elem_style += createTextElement(elem, props)
    }

    if (props.hasOwnProperty("textFromHtml")) {
        props.isHtmlContent = true;
        if (type == "editText")
            elem.value = props.textFromHtml
        else
            elem_style += createTextElement(elem, props)
    }
    delete props.text;
    return elem_style;
}
function addClassNameProperties(props, elem) {
    if (props.hasOwnProperty("className")) {
        if ((props.className || "").trim() !== "") {
            props.className.split(" ").map(className => {
                elem.classList.add(className);
            })
        }
    }

    if (props.hasOwnProperty("classList")) {
        JSON.parse(props.classList).forEach(function (obj) {
            elem.classList.add(obj);
        });
    }

    if (props.hasOwnProperty("removeClassList")){
        JSON.parse(props.removeClassList).forEach(function (obj) {
            elem.classList.remove(obj);
        });
    }
}
function addFunctions(props, elem) {
    let elem_style ="";
    for (let key in props) {
        if (props[key] && typeof props[key] == "function") {
            var eventType = key.substring(2, key.length).toLowerCase();
            var elemCB = props[key];
            elem_style += "user-select: none;";
            //elem.style.userSelect = 'none';
            if (eventType == "change") {
                eventType = "input";
            }

            elem.addEventListener('blur', function () {
                var inputValue = elem.value;
                if (inputValue == "") {
                    elem.classList.remove("filled");
                    elem.parentNode.classList.remove('focused');
                } else {
                    elem.classList.add('filled');
                }
            });

            elem['onfocus'] = function (e) {
                elem.parentNode.classList.add('focused');
                if (eventType == "focus") {
                    e.stopPropagation();
                    elemCB(e);
                }
            };
        }
    }
    return elem_style;
}
function addAnimationAttributes(props) {
    let elem_style ="";
    var animation_transition = getAnimeTransition(props);

    var animation_transform = getAnimeTransform(props);

    var animation_opacity = getAnimeOpacity(props);

    if (animation_transition.length > 0 && (animation_transform.length + animation_opacity.length > 0)) { // this will need to be renamed actually to VDOM output's
        const afterTransition = () => {
            elem_style += animation_transition;
            if (animation_transform.length > 0) elem_style += animation_transform;
            if (animation_opacity.length > 0) { elem_style += animation_opacity;}
        };

        if (props.style.transform || props.style.opacity) {
            setTimeout(afterTransition, 100); // Why is a time out here?
        } else {
            afterTransition();
        }
    }
    return elem_style;
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
          if(props.inputType == "numericPassword"){
            ele.setAttribute("inputmode","numeric");
          }
          if(props.inputTypeI == 4 && window.innerWidth < 550 || navigator.userAgent.search("Firefox") === -1){ // This feels like a very specific use-case? Investigate
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

        else if(props.inputType === "telephone") {
            inputType = "tel";
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

    if (props.hasOwnProperty("url")) { element.setAttribute('src',props.url) }

    if (props.hasOwnProperty("autofocus") && (navigator.userAgent.indexOf("iPhone") == -1)) { element.setAttribute('autofocus','autofocus') }; // device should not be an iphone


    if(props.hasOwnProperty("focus")) {
            if (props.focus && props.id){
                var doc = document.getElementById(props.id);
                if (doc) {
                    if (window.hasAnimationProps) {
                        if (window.focusedElement == undefined) {
                            window.focusedElement = props.id;
                        };
                    } else { doc.focus(); }
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

function addPseudoClasses(elem, props){


    let styleElem = document.getElementById(window.__STYLE_ID) || document.getElementsByTagName("body")[0].getElementsByTagName("style")[0]
    let css = "";

    if (props.hasOwnProperty("hoverBg")) {
        css += "div#\\3" + elem.id[0] + " " + elem.id.substring(1) + ":hover{background:" + props["hoverBg"] + "!important;}";
    }

    if (props.hasOwnProperty("hoverColor")) {
        css += "div#\\3" + elem.id[0] + " " + elem.id.substring(1) + ":hover{color:" + props["hoverColor"] + "!important;}";
    }

    if (!css) return
    if(styleElem) {
      styleElem.innerText += css;
    } else {
      styleElem = document.createElement('style');
      styleElem.appendChild(document.createTextNode(css));
      document.getElementsByTagName("body")[0].appendChild(styleElem);
    }

}


module.exports = {
    mapPropToStyle,
    getAnimeTransform,
    getAnimeOpacity,
    getAnimeTransition,
    setElemAttributes,
    addAnimationAttributes,
    addTransitionValue,
    addSize,
    addBorder,
    addVisibility,
    addExpandability,
    addOverFlow,
    addLayout,
    addImage,
    addTextProperties,
    addClassNameProperties,
    addFunctions,
    addPseudoClasses
}






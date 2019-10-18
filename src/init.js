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

/*
 Used to initialize defaults for window funcions and variables.
*/
const getOS = require('./helper').getOS
const merge = require('./helper').merge
window.PrestoUI = require("./PrestoUIInterface");

const getCurrTime = () => (new Date()).getTime()

// window.__OS = getOS()

if (window.__OS == "WEB") {
    window.Android = require("./WEB/AndroidInterface")
    window.JBridge = require("./WEB/JBridgeInterface")
} else if (window.__OS == "IOS") {
    window.Android = require("./IOS/AndroidInterface")
    window.JBridge = merge(window.JBridge, {})
}

if (window.__DEVICE_DETAILS && window.__DEVICE_DETAILS.hasOwnProperty("screen_width")) {
    window.__WIDTH = window.__DEVICE_DETAILS.screen_width;
} else {
    window.__WIDTH = "1080";
}

if (window.__DEVICE_DETAILS && window.__DEVICE_DETAILS.hasOwnProperty("screen_height")) {
    window.__HEIGHT = window.__DEVICE_DETAILS.screen_height;
} else {
    window.__HEIGHT = "1920";
}

//Intializing defaults
if (window.__OS == "WEB") {
    /* Components */
    window.__COM_EVENT = false
    window.__COM_RENDERED = {
        SWITCH_GLOBAL: false,
        DRP: {},
        DSB: {},
        DB: {},
        NAVBAR: {}
    }

    window.__COM_CLASS_GROUP = {
        WRAPPER: 'PDC_com_wrapper',
        NAVBAR: 'PDC_com_navbar',
        NAVBAR_ITEM: 'PDC_com_navbar_item',
        NAVBAR_ITEM_WITH_SUB: 'PDC_com_navbar_has_sub',
        NAVBAR_SUB: 'PDC_com_navbar_sub',
        NAVBAR_SUB_RIGHT: 'PDC_com_navbar_sub_right',
        NAVBAR_SUB_ITEM: 'PDC_com_navbar_subitem',
        DRP: 'PDC_com_drp',
        DRP_BODY: 'PDC_com_drp_body',
        DB: 'PDC_com_db',
        DB_FULL_BODY: 'PDC_com_db_full_body',
        DB_BODY: 'PDC_com_db_body',
        DB_OPTIONS: 'PDC_com_db_options',
        DB_OPTION: 'PDC_com_db_option',
        DSB: 'PDC_com_dsb',
        DSB_FULL_BODY: 'PDC_com_dsb_full_body',
        DSB_BODY: 'PDC_com_dsb_body',
        DSB_OPTIONS: 'PDC_com_dsb_options',
        DSB_OPTION: 'PDC_com_dsb_option',
        DSB_SEARCH_WRAP: 'PDC_com_dsb_search_wrap',
        DSB_SEARCH: 'PDC_com_dsb_search',
        SWITCH: 'PDC_com_switch',
        SWITCH_BODY: 'PDC_com_switch_body',
        SWITCH_SLIDER: 'PDC_com_switch_slider',
        BT: 'PDC_com_bt',
        BT_DISABLED: 'PDC_com_bt_disabled'
    }
    window.__COM_COLOR_GROUP = {
        BG: '#ffffff',
        ACTIVE_BG: '#EEF1F8',
        ACTIVE_COLOR: 'rgb(53, 64, 82)',
        INACTIVE_COLOR: 'rgba(53, 64, 82, 0.5)',
        BORDER_COLOR: '#A3AFC2',
        ACTIVE_BORDER_COLOR: '#707886',
        SEARCH_COLOR: '#dddddd',
        INACTIVE_SWITCH: '#B7DBBC',
        ACTIVE_SWITCH: '#36AF47',
        BT_BORDER_COLOR: '#1585D8',
        BT_BG_COLOR: '#1991EB',
        BT_COLOR: '#ffffff'
    }
    window.__COM_ACTIVE = {
        DSB: '',
        NAVBAR: '',
        DB: ''
    }
    /* Components End */

    /* Modal */
    window.__MODAL_PROPS = {}
    window.__CONTENTMODAL_CLASS = 'PDC_modal'
    window.__OPENMODAL_CLASS = 'PDC_modal-open'
    window.__BACKDROPMODAL_CLASS = 'PDC_modal-backdrop'
    window.__DISABLEDBACKDROP_CLASS = 'PDC_modal-backdrop-disabled'
    window.__SHOWNMODAL_CLASS = 'PDC_modal-shown'
    window.__FADEMODAL_CLASS = 'PDC_modal-fade'
    window.__SLIDEMODAL_CLASS = 'PDC_modal-slide'
    /* Modal End */

    window.onclick = (event) => {
        if (event.target &&
            event.target.classList.contains(window.__BACKDROPMODAL_CLASS) &&
            !event.target.classList.contains(window.__DISABLEDBACKDROP_CLASS)
        ) {
            document.body.classList.remove(window.__OPENMODAL_CLASS);
            event.target.classList.remove(window.__SHOWNMODAL_CLASS);

            let id = event.target.id;
            id = id.replace(window.__BACKDROPMODAL_CLASS + '_', '');

            let view = __VIEWS[id];
            if (view && view.props.onDismiss && typeof view.props.onDismiss ==
                "function") {
                view.props.onDismiss();
            }
        }
    }

    const duiShowScreen = (callback, state) => {
        let popupMenu = document.getElementsByClassName("popupMenu");
        for (let i = 0; i < popupMenu.length; i++) {
            popupMenu[i].style.display = "none";
        }
    };
    window.__duiShowScreen = duiShowScreen;

} else if (window.__OS == "IOS") {
    window.__COLOR_INDEX = window.__COLOR_INDEX || 1;
    window.__FONT_INDEX = window.__FONT_INDEX || 1;
    window.__RECT_INDEX = window.RECT_INDEX || 1;
    window.__VIEW_INDEX = window.__VIEW_INDEX || 1;
    window.__IMAGE_INDEX = window.__IMAGE_INDEX || 1;
    window.__POINT_INDEX = window.__POINT_INDEX || 1;
    window.__LAYER_INDEX = window.__LAYER_INDEX || 1;
    window.__SIZE_INDEX = window.__SIZE_INDEX || 1;
} else {
    //This would be case for android
    window.__FN_MAP = {};
    window.__ALL_ONCLICKS = [];
}

window.__ID = 1;
window.__NODE_ID = 1;
window.__SCREEN_INDEX = -1;

window.__PROXY_FN = {};
window.__FN_INDEX = 0;
window.__ROOTSCREEN = null;
window.__CACHED_SCREENS = {};
window.__SCREEN_COUNT = 0;
window.__CURR_SCREEN = null;
window.__PREV_SCREEN = null;
window.__ANIMATE_DIR = null;
window.__SCREEN_STACK = [];
window.__LAST_FN_CALLED = null;
window.__THROTTELED_ACTIONS = [];
window.__VIEWS = {};
window.__VIEW_DIMENSIONS = {};
window.__OBSERVERS = {};
window.ZIndex = 0;

window.callUICallback = function () {
    let args = (arguments.length === 1 ? [arguments[0]] : Array.apply(null,
        arguments));
    var fName = args[0]
    var functionArgs = args.slice(1)
    var currTime;
    var timeDiff;
    
    if (window.__ALL_ONCLICKS && window.__ALL_ONCLICKS.indexOf(fName) != -1 && args[2] == "feedback" && JBridge && JBridge.setClickFeedback) {
        return JBridge.setClickFeedback(args[1]);
    }

    if (window.__THROTTELED_ACTIONS && window.__THROTTELED_ACTIONS.indexOf(fName) == -1) {
        window.__PROXY_FN[fName].apply(null, functionArgs);
    } else if (window.__LAST_FN_CALLED && (fName == window.__LAST_FN_CALLED.fName)) {
        currTime = getCurrTime();
        timeDiff = currTime - window.__LAST_FN_CALLED.timeStamp;

        if (timeDiff >= 300) {
            window.__PROXY_FN[fName].apply(null, functionArgs);
            window.__LAST_FN_CALLED.timeStamp = currTime;
        } else {
            console.warn("function throtteled", fName);
            console.warn("time diff", timeDiff);
        }
    } else {
        window.__PROXY_FN[fName].apply(null, functionArgs);
        window.__LAST_FN_CALLED = {
            timeStamp: (new Date()).getTime(),
            fName: fName
        }
    }
};
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

var map = {
  textFromHtml: {
    values: [{
      type: 's',
    }],
    dontMap: 'true',
    fnName: 'setText',
    inVokedIn: 'VIEW',
  },
  ellipsize: {
    values: [{
      type: 'b',
    }],
    dontMap: 'true',
    fnName: 'setEllipsize',
    inVokedIn: 'VIEW',
  },
  baseAlign: {
    values: [{
      type: 'b'
    }],
    dontMap: true,
    inVokedIn: 'VIEW',
    fnName: "setBaselineAligned",
  },
  enableRefresh: {
    values: [{
      type: 'b'
    }],
    dontMap: true,
    inVokedIn: 'VIEW',
    fnName: "setRefreshing",
  },
  setEnable: {
    values: [{
      type: 'b'
    }],
    dontMap: true,
    inVokedIn: 'VIEW',
    fnName: "setEnabled",
  },
  showDividers: {
    values: [{
      type: 'i',
    }],
    dontMap: 'true',
    fnName: 'setShowDividers',
    inVokedIn: 'VIEW',
  },
  "dividerDrawable": {
    values: [{
      type: 's',
    }],
    'dontMap': true,
    fnName: 'setDividerDrawable',
    inVokedIn: 'VIEW',
  },
  tabTextColors: {
    values: [{
      type: 's'
    }, {
      type: 's'
    }],
    dontMap: true,
    inVokedIn: 'VIEW',
    fnName: 'setTabTextColors',
  },
  "selectedTabIndicatorHeight": {
    values: [{
      type: 'i',
    }],
    'dontMap': true,
    fnName: 'setSelectedTabIndicatorHeight',
    inVokedIn: 'VIEW',
  },
  foreground: {
    values: [{
      type: 'b',
    }],
    dontMap: 'true',
    fnName: 'setColor',
    inVokedIn: 'FOREGROUND',
  },
  selectedTabIndicatorColor: {
    values: [{
      type: 's'
    }],
    dontMap: true,
    fnName: 'setSelectedTabIndicatorColor',
    inVokedIn: 'VIEW',
  },
  layoutTransition: {
    values: [{
      type: 'b',
    }],
    dontMap: 'true',
    fnName: 'setLayoutTransition',
    inVokedIn: 'LAYOUT_TRANSITION',
  },

  focusOut: { // doesnt work
    dontMap: 'true',
    fnName: 'clearFocus',
    inVokedIn: 'VIEW',
  },
  focus: {
    dontMap: 'true',
    fnName: 'requestFocus',
    inVokedIn: 'VIEW',
  },

  fillViewport: {
    values: [{
      type: 'b'
    }],
    dontMap: true,
    inVokedIn: 'VIEW',
    fnName: "setFillViewport",
  },
  "primitive": {
    values: [{
      type: 's'
    }],
    'dontMap': true,
    fnName: 'setPrimitive',
    inVokedIn: 'VIEW'
  },
  "cx": {
    values: [{
      type: 'f'
    }],
    'dontMap': true,
    fnName: 'setCx',
    inVokedIn: 'VIEW'
  },
  "cy": {
    values: [{
      type: 'f'
    }],
    'dontMap': true,
    fnName: 'setCy',
    inVokedIn: 'VIEW'
  },
  "radius": {
    values: [{
      type: 'f'
    }],
    'dontMap': true,
    fnName: 'setRadius',
    inVokedIn: 'VIEW'
  },
  "hex": {
    values: [{
      type: 's'
    }],
    'dontMap': true,
    fnName: 'setColor',
    inVokedIn: 'VIEW'
  },
  "style": {
    values: [{
      type: 's'
    }],
    'dontMap': true,
    fnName: 'setStyle',
    inVokedIn: 'VIEW'
  },
  "sweepAngle": {
    values: [{
      type: 'f'
    }],
    'dontMap': true,
    fnName: 'setSweepAngle',
    inVokedIn: 'VIEW'
  },
  "startAngle": {
    values: [{
      type: 'f'
    }],
    'dontMap': true,
    fnName: 'setStartAngle',
    inVokedIn: 'VIEW'
  },
  "strokeWidth": {
    values: [{
      type: 'f'
    }],
    'dontMap': true,
    fnName: 'setStrokeWidth',
    inVokedIn: 'VIEW'
  },
  setDate: {
    values: [{
      type: 'l',
    }],
    dontMap: 'true',
    fnName: 'setDate',
    inVokedIn: 'VIEW',
  },
  minDate: {
    values: [{
      type: 'l',
    }],
    dontMap: 'true',
    fnName: 'setMinDate',
    inVokedIn: 'VIEW',
  },
  maxDate: {
    values: [{
      type: 'l',
    }],
    dontMap: 'true',
    fnName: 'setMaxDate',
    inVokedIn: 'VIEW',
  },
  clipChildren: {
    values: [{
      type: 'b',
    }],
    dontMap: 'true',
    fnName: 'setClipChildren',
    inVokedIn: 'VIEW',
  },
  adjustViewBounds: {
    values: [{
      type: 'b',
    }],
    dontMap: 'true',
    fnName: 'setAdjustViewBounds',
    inVokedIn: 'VIEW',
  },
  maxLines: {
    values: [{
      type: 'i',
    }],
    dontMap: 'true',
    fnName: 'setMaxLines',
    inVokedIn: 'VIEW',
  },
  singleLine: {
    values: [{
      type: 'b',
    }],
    dontMap: 'true',
    fnName: 'setSingleLine',
    inVokedIn: 'VIEW',
  },
  hardware: {
    values: [{
      type: 'i'
    }, {
      type: 'i'
    }],
    dontMap: true,
    fnName: 'setLayerType',
    inVokedIn: 'VIEW',
  },
  selected: {
    values: [{
      type: 'b'
    }],
    dontMap: true,
    fnName: 'setSelected',
    inVokedIn: 'VIEW',
  },
  curve: {
    values: [{
      type: 's',
      'linear': "0"
    }],
    fnName: 'setInterpolator',
    inVokedIn: 'VIEW',
  },
  fontFamily: {
    values: [{
      type: 's',
      dontMap: true
    }, {
      type: 'i',
      'normal': 0,
      'bold': 1,
      'italic': 2,
      'bold_italic': 3
    }],
    fnName: 'setFontFamily',
    inVokedIn: 'VIEW'
  },
  x: {
    values: [{
      type: 'f'
    }],
    'dontMap': true,
    fnName: 'setX',
    inVokedIn: 'VIEW',
  },
  'bringToFront': {
    values: [],
    inVokedIn: 'VIEW',
    fnName: "bringToFront",
  },
  'above': {
    values: [{
      type: 'i',
      dontMap: true
    }, {
      type: 'i',
      dontMap: true
    }, ],
    inVokedIn: 'PARAMS',
    fnName: "addRule",
  },
  "checked": {
    values: [{
      type: 'b',
    }],
    'dontMap': true,
    fnName: 'setChecked',
    inVokedIn: 'VIEW',
  },
  y: {
    values: [{
      type: 'f'
    }],
    'dontMap': true,
    fnName: 'setY',
    inVokedIn: 'VIEW',
  },
  "backgroundDrawable": {
    values: [{
      type: 's',
    }],
    'dontMap': true,
    fnName: 'setBackground',
    inVokedIn: 'VIEW',
  },
  buttonTint: {
    value: [{
      type: 's'
    }],
    dontMap: true,
    fnName: 'setButtonTintList',
    inVokedIn: 'VIEW',
  },
  visibility: {
    values: [{
      type: 'i',
      visible: 0,
      invisible: 4,
      gone: 8
    }],
    fnName: 'setVisibility',
    inVokedIn: 'VIEW',
  },
  "scaleType": {
    values: [{
      type: 's',
    }],
    'dontMap': true,
    fnName: 'setScaleType',
    inVokedIn: 'VIEW',
  },
  "progressColor": {
    values: [{
      type: 's',
    }],
    'dontMap': true,
    fnName: 'setIndeterminateTintList',
    inVokedIn: 'VIEW',
  },
  "alpha": {
    values: [{
      type: 'f',
    }],
    'dontMap': true,
    fnName: 'setAlpha',
    inVokedIn: 'VIEW',
  },
  "imageUrl": {
    values: [{
      type: 's',
    }],
    'dontMap': true,
    fnName: 'setImageDrawable',
    inVokedIn: 'VIEW',
  },
  "imageWithFallback": {
    values: [{
      type: 's',
    }],
    'dontMap': true,
    fnName: 'setImageDrawable',
    inVokedIn: 'VIEW',
  },
  "gifUrl": {
    values: [{
      type: 's',
    }],
    'dontMap': true,
    fnName: 'setBackgroundDrawable',
    inVokedIn: 'VIEW',
  },
  "numFrames": {
    values: [{
      type: 's',
    }],
    'dontMap': true,
    fnName: 'setBackgroundDrawable',
    inVokedIn: 'VIEW',
  },
  "frameDelay": {
    values: [{
      type: 's',
    }],
    'dontMap': true,
    fnName: 'setBackgroundDrawable',
    inVokedIn: 'VIEW',
  },
  "placeHolder": {
    values: [{
      type: 's',
    }],
    'dontMap': true,
    fnName: 'setImageDrawable',
    inVokedIn: 'VIEW',
  },
  "packageIcon": {
    values: [{
      type: 's'
    }],
    'dontMap': true,
    fnName: 'setImageDrawable',
    inVokedIn: 'VIEW'
  },
  "scrollTo": {
    values: [{
      type: 'i'
    },
    {
      type: 'i'
    }],
    'dontMap': true,
    fnName: 'smoothScrollTo',
    inVokedIn: 'VIEW'
  },
  "cornerRadii": {
    values: [{
      type: 's'
    }],
    'dontMap': true,
    fnName: 'setCornerRadii',
    inVokedIn: 'DRAWABLE'
  },
  "lineSpacing": {
    values: [{
      type: 'dp'
    }, {
      type: 'f'
    }],
    'dontMap': true,
    fnName: 'setLineSpacing',
    inVokedIn: 'VIEW'
  },
  "url": {
    values: [{
      type: 's',
    }],
    'dontMap': true,
    fnName: 'loadUrl',
    inVokedIn: 'VIEW',
  },
  "translationY": {
    values: [{
      type: 'f',
    }],
    'dontMap': true,
    fnName: 'setTranslationY',
    inVokedIn: 'VIEW',
  },
  "translationX": {
    values: [{
      type: 'f',
    }],
    'dontMap': true,
    fnName: 'setTranslationX',
    inVokedIn: 'VIEW',
  },
  translationZ: {
    values: [{
      type: 'f',
    }],
    'dontMap': true,
    fnName: 'setTranslationZ',
    inVokedIn: 'VIEW',
  },
  "delay": {
    values: [{
      type: 'l',
    }],
    'dontMap': true,
    fnName: 'setStartDelay',
  },
  "duration": {
    values: [{
      type: 'l',
    }],
    'dontMap': true,
    fnName: 'setDuration',
  },
  "pivotX": {
    values: [{
      type: 'f',
    }],
    'dontMap': true,
    fnName: 'setPivotX',
    inVokedIn: 'VIEW',
  },
  "pivotY": {
    values: [{
      type: 'f',
    }],
    'dontMap': true,
    fnName: 'setPivotY',
    inVokedIn: 'VIEW',
  },
  "minWidth": {
    values: [{
      type: 'dp',
    }],
    'dontMap': true,
    fnName: 'setMinimumWidth',
    inVokedIn: 'VIEW',
  },
  "minHeight": {
    values: [{
      type: 'dp',
    }],
    'dontMap': true,
    fnName: 'setMinimumHeight',
    inVokedIn: 'VIEW',
  },
  "maxWidth": {
    values: [{
      type: 'dp',
    }],
    'dontMap': true,
    fnName: 'setMaxWidth',
    inVokedIn: 'VIEW',
  },
  "testID": {
    values: [{
      type: 'cs',
    }],
    'dontMap': true,
    fnName: 'setContentDescription',
    inVokedIn: 'VIEW',
  },
  "shadowTag": {
      values: [{
            type: 'cs',
          }],
      'dontMap': true,
      fnName: 'shadowTag',
      inVokedIn: 'VIEW',
    },
  "androidShadow": {
      values: [{
            type: 'cs',
          }],
      'dontMap': true,
      fnName: 'androidShadow',
      inVokedIn: 'VIEW',
    },
  "gradient": {
      values: [{
        type: 'cs'
      }],
      'dontMap': true,
      fnName: 'setColors',
      inVokedIn: 'DRAWABLE'
  },
  "gradientAngle": {
    values: [{
      type: 's'
    }],
    'dontMap': true,
    fnName: 'setOrientation',
    inVokedIn: 'DRAWABLE'
},
  "lineHeight": {
    values: [{
      type: 'dp'
    }],
    'dontMap': true,
    fnName: 'setLineHeight',
    inVokedIn: 'VIEW'
  },
  "letterSpacing": {
    values: [{
      type: 'f',
    }],
    'dontMap': true,
    fnName: 'setLetterSpacing',
    inVokedIn: 'VIEW',
  },
  "hint": {
    values: [{
      type: 'cs',
    }],
    'dontMap': true,
    fnName: 'setHint',
    inVokedIn: 'VIEW',
  },
  "inputType": {
    values: [{
      type: 'i',
      password: '129',
      numeric: '2',
      telephone: '3',
      numericPassword: '18',
      numericWithoutSuggestion: '524291',
      disabled: '0',
      text: '1',
      multiText: '3'
    }],
    fnName: 'setInputType',
    inVokedIn: 'VIEW',
  },
  "inputTypeI": {
    values: [{
      type: 'i'
    }],
    'dontMap': true,
    fnName: 'setInputType',
    inVokedIn: 'VIEW',
  },
  "textSize": {
    values: [{
      type: 'i'
    }, {
      type: 'f',
    }],
    'dontMap': true,
    fnName: 'setTextSize',
    inVokedIn: 'VIEW',
  },
  "textSizeSp": {
    values: [{
      type: 'i'
    }, {
      type: 'f',
    }],
    'dontMap': true,
    fnName: 'setTextSize',
    inVokedIn: 'VIEW',
  },
  "fontSize": {
    values: [{
      type: 'i',
    }, {
      type: 'f',
    }],
    'dontMap': true,
    fnName: 'setTextSize',
    inVokedIn: 'VIEW',
  },
  "textIsSelectable": {
    values: [{
      type: 'b',
    }],
    'dontMap': true,
    fnName: 'setTextIsSelectable',
    inVokedIn: 'VIEW',
  },
  "fontStyle": {
    values: [{
      type: 's',
    }],
    dontMap: 'true',
    fnName: 'setTypeface',
    inVokedIn: 'VIEW',
  },
  "fontWeight": {
    values: [{
      type: 'i',
    }, {
      type: 'b',
    }],
    dontMap: 'true',
    fnName: 'setTypeface',
    inVokedIn: 'VIEW',
  },
  "font" : {
    values: [{
      type: 's',
    }],
    dontMap: 'true',
    fnName: 'setTypeface',
    inVokedIn: 'VIEW',
  },
  "textAllCaps": {
    values: [{
      type: 'b',
    }],
    'dontMap': true,
    fnName: 'setAllCaps',
    inVokedIn: 'VIEW',
  },
  "expand": {
    values: [{
      type: 'b'
    }],
    'dontMap': true,
    fnName: 'setExpand',
    inVokedIn: 'VIEW'
  },
  "focusableInTouchMode": {
    values: [{
      type: 'b'
    }],
    'dontMap': true,
    fnName: 'setFocusableInTouchMode',
    inVokedIn: 'VIEW'
  },
  "descendantFocusability": {
    values: [{
      type: 'i'
    }],
    'dontMap': true,
    fnName: 'setDescendantFocusability',
    inVokedIn: 'VIEW'
  },
  "expandDuration": {
    values: [{
      type: 'i'
    }],
    'dontMap': true,
    fnName: 'setExpandDuration',
    inVokedIn: 'VIEW'
  },
  "expandScrollParent": {
    values: [{
      type: 'i'
    }],
    'dontMap': true,
    fnName: 'setScrollParent',
    inVokedIn: 'VIEW'
  },
  "expandAlpha": {
    values: [{
      type: 'f'
    }],
    'dontMap': true,
    fnName: 'setExpandAlpha',
    inVokedIn: 'VIEW'
  },
  "defaultExpand": {
    values: [{
      type: 'b'
    }],
    'dontMap': true,
    fnName: 'setDefaultExpand',
    inVokedIn: 'VIEW'
  },
  "swypeEnabled": {
    values: [{
      type: 'b'
    }],
    'dontMap': true,
    fnName: 'setSwypeEnabled',
    inVokedIn: 'VIEW'
  },
  toast: {
    values: [{
      type: 'cs',
    }],
    'dontMap': true,
    fnName: 'showToast',
    inVokedIn: 'CONTEXT',
  },
  scaleX: {
    values: [{
      type: 'f',
    }],
    'dontMap': true,
    fnName: 'setScaleX',
    inVokedIn: 'VIEW',
  },
  scaleY: {
    values: [{
      type: 'f',
    }],
    'dontMap': true,
    fnName: 'setScaleY',
    inVokedIn: 'VIEW',
  },
  id: {
    values: [{
      type: 'i',
    }],
    'dontMap': true,
    fnName: 'setId',
    inVokedIn: 'VIEW',
  },
  gravity: {
    values: [{
      type: 'i',
      center_horizontal: 1,
      center_vertical: 16,
      bottom : 80,
      left: 8388611,
      right: 8388613,
      center: 17,
      bottom: 80,
      top_vertical: 48,
      start: 8388611,
      end: 8388613,
    }],
    fnName: 'setGravity',
    inVokedIn: 'VIEW',
  },
  orientation: {
    values: [{
      type: 'i',
      horizontal: 0,
      vertical: 1,
    }],
    fnName: 'setOrientation',
    inVokedIn: 'VIEW',
  },
  text: {
    values: [{
      type: 'cs'
    }],
    dontMap: true,
    fnName: 'setText',
    inVokedIn: 'VIEW',
  },
  width: {
    values: [{
      type: 'i',
      match_parent: -1,
      wrap_content: -2,
    }],
    inVokedIn: 'PARAMS',
    ctr: true,
    varName: 'var_width'
  },
  weight: {
    values: [{
      type: 'f',
      match_parent: -1,
      wrap_content: -2,
    }],
    dontMap: true,
    inVokedIn: 'PARAMS',
    varName: 'var_weight'
  },
  height: {
    values: [{
      type: 'i',
      match_parent: -1,
      wrap_content: -2,
    }],
    inVokedIn: 'PARAMS',
    ctr: true,
    varName: 'var_height'
  },
  layout_gravity: {
    values: [{
      type: 'i',
      bottom_right: 21,
      top: 30,
      bottom: 50,
      left: 3,
      right: 5,
      center: 17,
      bottom: 80,
      center_horizontal: 1,
      center_vertical: 16,
      start: 8388611,
      end: 8388613,
    }],
    inVokedIn: 'PARAMS',
    varName: "var_gravity",
  },
  margin: {
    values: [{
      type: 'dp'
    }, {
      type: 'dp'
    }, {
      type: 'dp'
    }, {
      type: 'dp'
    }],
    dontMap: true,
    inVokedIn: 'PARAMS',
    fnName: "setMargins",
  },
  marginStart: {
    values: [{
      type: 'dp'
    }],
    dontMap: true,
    inVokedIn: 'PARAMS',
    fnName: "setMarginStart",
  },
  marginEnd: {
    values: [{
      type: 'dp'
    }],
    dontMap: true,
    inVokedIn: 'PARAMS',
    fnName: "setMarginEnd",
  },
  padding: {
    values: [{
      type: 'dp'
    }, {
      type: 'dp'
    }, {
      type: 'dp'
    }, {
      type: 'dp'
    }],
    dontMap: true,
    inVokedIn: 'VIEW',
    fnName: "setPaddingRelative",
  },
  'centerInParent': {
    values: [{
      type: 'i',
      'true': 13,
      'false': 12121
    }, {
      type: 'i',
      dontMap: true
    }, ],
    inVokedIn: 'PARAMS',
    fnName: "addRule",
  },
  'centerHorizontal': {
    values: [{
      type: 'i',
      'true': 14,
      'false': 12121
    }, {
      type: 'i',
      dontMap: true
    }, ],
    inVokedIn: 'PARAMS',
    fnName: "addRule",
  },
  'centerVertical': {
    values: [{
      type: 'i',
      'true': 15,
      'false': 12121
    }, {
      type: 'i',
      dontMap: true
    }, ],
    inVokedIn: 'PARAMS',
    fnName: "addRule",
  },
  "checked": {
    values: [{
      type: 'b',
    }],
    'dontMap': true,
    fnName: 'setChecked',
    inVokedIn: 'VIEW',
  },
  'alignParentBottom': {
    values: [{
      type: 'i',
      'true': 12,
      'false': 12121
    }, {
      type: 'i',
      dontMap: true
    }, ],
    inVokedIn: 'PARAMS',
    fnName: "addRule",
  },
  'alignParentTop': {
    values: [{
      type: 'i',
      'true': 10,
      'false': 12121
    }, {
      type: 'i',
      dontMap: true
    }, ],
    inVokedIn: 'PARAMS',
    fnName: "addRule",
  },
  'alignParentRight': {
    values: [{
      type: 'i',
      'true': 11,
      'false': 12121
    }, {
      type: 'i',
      dontMap: true
    }, ],
    inVokedIn: 'PARAMS',
    fnName: "addRule",
  },
  'alignParentLeft': {
    values: [{
      type: 'i',
      'true': 9,
      'false': 12121
    }, {
      type: 'i',
      dontMap: true
    }, ],
    inVokedIn: 'PARAMS',
    fnName: "addRule",
  },
  'leftOf': {
    values: [{
      type: 'i',
      'true': 0,
      'false': 12121
    }, {
      type: 'i',
      dontMap: true
    }, ],
    inVokedIn: 'PARAMS',
    fnName: "addRule",
  },
  cornerRadius: {
    values: [{
      type: 'dpf'
    }],
    dontMap: true,
    inVokedIn: 'DRAWABLE',
    fnName: "setCornerRadius",
  },
  stroke: {
    values: [{
      type: 'dp'
    }, {
      type: 's'
    }],
    dontMap: true,
    inVokedIn: 'DRAWABLE',
    fnName: "setStroke",
  },
  "typeface": {
    values: [{
      type: 'i',
      'normal': 0,
      'bold': 1,
      'italic': 2,
      'bold_italic': 3
    }],
    fnName: 'setTypeface',
    inVokedIn: 'VIEW',
  },
  background: {
    values: [{
      type: 's'
    }],
    dontMap: true,
    inVokedIn: 'DRAWABLE',
    fnName: "setColor",
  },
  backgroundDrawable: {
    values: [{
      type: 's',
    }],
    'dontMap': true,
    fnName: 'setBackgroundDrawable',
    inVokedIn: 'VIEW',
  },
  backgroundColor: {
    values: [{
      type: 's'
    }],
    dontMap: true,
    inVokedIn: 'VIEW',
    fnName: "setBackgroundColor",
  },
  color: {
    values: [{
      type: 's'
    }],
    dontMap: true,
    fnName: 'setTextColor',
    inVokedIn: 'VIEW',
  },
  hintColor: {
    values: [{
      type: 's'
    }],
    dontMap: true,
    fnName: 'setHintTextColor',
    inVokedIn: 'VIEW',
  },
  btnBackground: {
    values: [{
      type: 's'
    }, {
      type: 'i'
    }],
    dontMap: true,
    inVokedIn: 'MUTATEBG',
    fnName: "setColorFilter",
  },
  colorFilter: {
    values: [{
      type: 's'
    }, {
      type: 'i'
    }],
    dontMap: true,
    inVokedIn: 'VIEW',
    fnName: "setColorFilter",
  },
  btnColor: {
    values: [{
      type: 's'
    }],
    dontMap: true,
    fnName: 'setTextColor',
    inVokedIn: 'VIEW',
  },
  shadowLayer: {
    values: [{
      type: 'f'
    }, {
      type: 'f'
    }, {
      type: 'f'
    }, {
      type: 'i'
    }],
    dontMap: true,
    fnName: 'setShadowLayer',
    inVokedIn: 'VIEW',
  },
  elevation: {
    values: [{
      type: 'i'
    }],
    dontMap: true,
    fnName: 'setElevation',
    inVokedIn: 'VIEW',
  },
  rotationX: {
    values: [{
      type: 'f'
    }],
    dontMap: true,
    fnName: 'setRotationX',
    inVokedIn: 'VIEW',
  },
  rotationY: {
    values: [{
      type: 'f'
    }],
    dontMap: true,
    fnName: 'setRotationY',
    inVokedIn: 'VIEW',
  },
  rotation: {
    values: [{
      type: 'f'
    }],
    dontMap: true,
    fnName: 'setRotation',
    inVokedIn: 'VIEW',
  },
  backgroundTint: {
    values: [{
      type: 's'
    }],
    dontMap: true,
    fnName: 'setBackgroundTintList',
    inVokedIn: 'VIEW',
  },
  "scrollBarX": {
    values: [{
      type: 'b',
    }],
    'dontMap': true,
    fnName: 'setHorizontalScrollBarEnabled',
    inVokedIn: 'VIEW',
  },
  "scrollBarY": {
    values: [{
      type: 'b',
    }],
    'dontMap': true,
    fnName: 'setVerticalScrollBarEnabled',
    inVokedIn: 'VIEW',
  },
  "clickable": {
    values: [{
      type: 'b',
    }],
    'dontMap': true,
    fnName: 'setClickable',
    inVokedIn: 'VIEW',
  },
  "cursor": {
    values: [{
      type: 'b'
    }],
    'dontMap': true,
    fnName: 'setCursorVisible',
    inVokedIn: 'VIEW'
  },
  "longClickable": {
    values: [{
      type: 'b'
    }],
    'dontMap': true,
    fnName: 'setLongClickable',
    inVokedIn: 'VIEW'
  },
  "focusable": {
    values: [{
      type: 'b',
    }],
    'dontMap': true,
    fnName: 'setFocusable',
    inVokedIn: 'VIEW',
  },
  "selectable": {
    values: [{
      type: 'b',
    }],
    'dontMap': true,
    fnName: 'setBackgroundResource',
    inVokedIn: 'VIEW',
  },
  "selectableItem": {
    values: [{
      type: 'b',
    }],
    'dontMap': true,
    fnName: 'setBackgroundResource',
    inVokedIn: 'VIEW',
  },
  values: {
    values: [{
      type: 's'
    }],
    dontMap: true,
    fnName: 'setAdapter',
    inVokedIn: 'VIEW'
  },
  maxSeek: {
    values: [{
      type: 'i'
    }],
    fnName: 'setMax',
    inVokedIn: "VIEW",
    dontMap: true
  },
  accessibilityHint: {
    values: [{
      type: 's',
    }],
    dontMap: 'true',
    fnName: 'setContentDescription',
    inVokedIn: 'VIEW',
  },
  accessibilityImportance: {
    values: [{
      type: 'i',
      auto: 0, // automatic
      disable_accessibility: 2 , // not imp
      enable_accessibility: 1, // imp
      disable_descendant_accessibility: 4 // not much imp
    }],
    // dontMap: 'true',
    fnName: 'setImportantForAccessibility',
    inVokedIn: 'VIEW',
  },
  accessibilityFocusable : {
    values: [{
      type: 'b',
    }],
    dontMap: 'true',
    fnName: 'setScreenReaderFocusable',
    inVokedIn: 'VIEW',
  },
  imeOptions: {
    values: [{
      type: 'i',
    }],
    dontMap: 'true',
    fnName: 'setImeOptions',
    inVokedIn: 'VIEW',
  },
  "horizontalFade": {
    values: [{
      type: 'b',
    }],
    'dontMap': true,
    fnName: 'setHorizontalFadingEdgeEnabled',
    inVokedIn: 'VIEW',
  },
  "fadingEdgeLength": {
    values: [{
      type: 'i'
    }],
    'dontMap': true,
    fnName: 'setFadingEdgeLength',
    inVokedIn: 'VIEW',
  },
  "shimmer": {
    values: [{
      type: 'b'
    }],
    'dontMap': true,
    fnName: 'setBackground',
    alternateFnName: 'setShimmer',
    inVokedIn: 'VIEW',
  },
  "shimmerActive": {
    values : [],
    'dontMap': true,
    fnName: 'startShimmer',
    inVokedIn: 'VIEW',
  },
  "shimmerInactive": {
    values : [],
    'dontMap': true,
    fnName: 'stopShimmer',
    inVokedIn: 'VIEW',
  },
  "peakHeight": {
    values : [{
      type: 'dp'
    }],
    'dontMap': true,
    fnName: 'setPeakHeight',
    inVokedIn: 'VIEW',
  },
  "sheetState": {
    values : [{
      type: 'i',
      expanded : 3,
      collapsed : 4,
      hidden : 5,
      halfExpanded : 6
    }],
    fnName: 'setState',
    inVokedIn: 'VIEW',
  },
  "halfExpandedRatio": {
    values : [{
      type: 'f'
    }],
    'dontMap': true,
    fnName: 'setHalfExpandedRatio',
    inVokedIn: 'VIEW',
  },
  "hideable": {
    values : [{
      type: 'b'
    }],
    'dontMap': true,
    fnName: 'setHideable',
    inVokedIn: 'VIEW',
  },
  "cursorColor": {
    values : [{
      type: 'b'
    }],
    'dontMap': true,
    fnName: 'setTextCursorDrawable',
    inVokedIn: 'VIEW',
  },
  "cursorColorV2": {
    inVokedIn: 'VIEW',
  },
  "progressBarColor": {
    values: [{
      type: 'b'
    }],
    'dontMap': true,
    fnName: "setIndeterminateTintList",
    inVokedIn: 'VIEW',
  },
  "disableFeedback": {
    values : [{
      type: 'b'
    }],
    inVokedIn: 'VIEW'
  },
  "scrollToDescendant": {
    values: [
      {
        type: "s",
      },
    ],
    dontMap: true,
    fnName: "scrollToDescendant",
    inVokedIn: "VIEW",
  }
}

module.exports = map;

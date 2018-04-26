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
      type: 'i',
    }],
    'dontMap': true,
    fnName: 'setMinimumWidth',
    inVokedIn: 'VIEW',
  },
  "minHeight": {
    values: [{
      type: 'i',
    }],
    'dontMap': true,
    fnName: 'setMinimumHeight',
    inVokedIn: 'VIEW',
  },
  "maxWidth": {
    values: [{
      type: 'i',
    }],
    'dontMap': true,
    fnName: 'setMaxWidth',
    inVokedIn: 'VIEW',
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
      numericPassword: '12',
      disabled: '0',
      text: '1'
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
  "textAllCaps": {
    values: [{
      type: 'b',
    }],
    'dontMap': true,
    fnName: 'setAllCaps',
    inVokedIn: 'VIEW',
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
      left: 8388611,
      right: 8388613,
      center: 17,
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
  }
}

module.exports = map;
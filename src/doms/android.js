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

var excluded = {
  "CoordinatorLayout": "androidx.coordinatorlayout.widget.",
  "SwipeRefreshLayout": "androidx.swiperefreshlayout.widget.",
  "FloatingActionButton": "android.support.design.widget.",
  "Toolbar": "android.support.v7.widget.",
  "AppBarLayout": "android.support.design.widget.",
  "CollapsingToolbarLayout": "android.support.design.widget.",
  "View": "android.view.",
  "WebView": "android.webkit.",
  "ViewPager": "android.support.v4.view.",
  "RotateAnimation": "android.view.animation.",
  "LinearInterpolator": "android.view.animation.",
  "Animation": "android.view.animation.",
  "RecyclerView": "androidx.recyclerview.widget.",
  "TextureView": "android.view.",
  "PagerTabStrip": "android.support.v4.view.",
  "PagerTitleStrip": "android.support.v4.view.",
  "TabLayout": "in.org.npci.upiapp.",
  "ShimmerFrameLayout": "com.facebook.shimmer.",
  "SwypeLayout": "in.juspay.mystique.",
  "SwypeScroll": "in.juspay.mystique.",
  "AccordionLayout": "in.juspay.mystique.",
  "Shape": "in.juspay.mystique.",
  "BottomSheetLayout": "in.juspay.mystique.",
  "LottieAnimationView": "com.airbnb.lottie.",
  "NestedScrollView": "androidx.core.widget."
}

function getCtr(viewGroup) {
  var viewGroupMap = {
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
    'recyclerView': 'android.support.v7.widget.RecyclerView$LayoutParams->new',
    'ratingBar': 'android.widget.LinearLayout$LayoutParams->new',
    'accordionLayout': 'android.widget.FrameLayout$LayoutParams->new',
    'swypeLayout': 'android.widget.FrameLayout$LayoutParams->new',
    'swypeScroll': 'android.widget.LinearLayout$LayoutParams->new',
    'shimmerFrameLayout': 'android.widget.FrameLayout$LayoutParams->new',
    "bottomSheetLayout": 'android.widget.FrameLayout$LayoutParams->new'
  }

  return viewGroupMap[viewGroup];
}

Array.prototype.flatten = function() {
  return this.reduce(function(prev, cur) {
    var more = [].concat(cur).some(Array.isArray);
    return prev.concat(more ? cur.flatten() : cur);
  }, []);
};

var parseParams = require('../helpers/android').parseParams;

function setAutogenId(props) {
    props.node_id = window.__NODE_ID + '';
    window.__NODE_ID++;

    if (!props.__filename)
      props.__filename = "filename not added";
  return props;
}

module.exports = function(type, props, ...children) {
  var paramType;

  children = children.flatten();

  if (!props)
    props = {};

  if(typeof type === "object") {
    paramType = getCtr(type.parentType);
    props = parseParams(type.elemType, props, "set");
    props = setAutogenId(props);
    props.runInUI = props.runInUI.replace('PARAM_CTR_HOLDER', paramType);
    if(type.elemType == "webView") {
      props.runInUI = "set_xyz=android.webkit.WebViewClient->new;this->setWebViewClient:get_xyz;" + props.runInUI;
    }
    var finalType = type.elemType;
    finalType = finalType[0].toUpperCase() + finalType.substr(1, finalType.length);
    for (var excludedType in excluded) {
      if (excludedType === finalType) {
        return { type: excluded[excludedType] + finalType, props: props, children: children }
      }
    }
    return {type: "android.widget." + finalType, props: props, children: children}
  } else if (typeof type === "string") {
    paramType = getCtr(type);
    props = parseParams(type, props, "set");

    props = setAutogenId(props);

    for (let j = 0; j < children.length; j++) {
      if (children[j].props.runInUI) {
        children[j].props.runInUI = children[j].props.runInUI.replace('PARAM_CTR_HOLDER', paramType);
      }
    }

    type = type[0].toUpperCase() + type.substr(1, type.length)

    for (var excludedType in excluded) {
      if (excludedType === type) {
        return { type: excluded[excludedType] + type, props: props, children: children }
      }
    }

    return { type: "android.widget." + type, props: props, children: children }

  } else {
    return new type(props, children);
  }
}
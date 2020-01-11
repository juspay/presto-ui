var { domAll} = require("../PrestoUIInterface")

function applyItemPropertiesToChildren(
  item,
  itemProperties,
  holderIDProperties
) {
  // item.props.id = elem.__id

  const itemID = String(item.props.id);

  if (Object.keys(holderIDProperties).includes(itemID)) {
    // var prevItem = JSON.parse(JSON.stringify(item))
    var obj = holderIDProperties[itemID];
    Object.keys(obj).forEach(function(key) {
      var value = obj[key];
      item.props[key] = itemProperties[value] || item.props[key];
    });
    // console.log("ID found do something", itemID, [prevItem, item], itemProperties, holderIDProperties[itemID])
  }
  item.children.forEach(function(child) {
    applyItemPropertiesToChildren(child, itemProperties, holderIDProperties);
  });
  delete item.props.id;
  if (item.props.attributes) {
    delete item.props.attributes.id;
  }
}

function computeListViewChildren(elem) {
  var listItem = JSON.parse(elem.props.listItem);
  var listData = JSON.parse(elem.props.listData);
  console.log("domAll xyz", elem.props.id, {
    elem: elem,
    listItem: listItem,
    listData: listData
  });
  var listItems = [];

  var holderIDProperties = listItem.holderViews.reduce(function(acc, x) {
    acc[x.id] = Object.keys(x).reduce(function(acc, key) {
      if (key !== "id") {
        acc[key] = x[key];
      }
      return acc;
    }, {});
    return acc;
  }, {});

  for (var ix = 0; ix < listData.length; ix++) {
    // var elem2 = window.createPrestoElement();
    // console.log("domAll elem", elem2)
    // Deep-clone the listItem.itemView object
    var clonedItemView = JSON.parse(JSON.stringify(listItem.itemView));

    var itemProperties = listData[ix];

    applyItemPropertiesToChildren(
      clonedItemView,
      itemProperties,
      holderIDProperties
    );

    console.log("clonedItemView", [listItem.itemView, clonedItemView]);

    // clonedItemView.props.id = elem2.__id

    if (clonedItemView.props.height === "match_parent") {
      delete clonedItemView.props.height;
    }
    clonedItemView.props.onClick = (function(index) {
      return function() {
        if (elem.props.onItemClick) {
          elem.props.onItemClick(index);
        }
        console.log("hello world", index);
      };
    })(ix);
    clonedItemView.props.cursor = "pointer";

    listItems[ix] = domAll(clonedItemView);
  }

  var children = listItems
  console.log("computeListViewChildren listItems", elem, listItems);
  return children
}

module.exports = computeListViewChildren

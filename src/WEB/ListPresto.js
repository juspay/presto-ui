

//view.data= itemView && holderViews
//itemView=template
//holderViews= array of props that will be changed from the template

const {invoke} = require("../helpers/common/callbackInvoker")
const {clone} = require("../helper")

//sets the holder attributes
let setChildAttributes = function(view,holder,itemData,index){
    
    for(var key in holder) {
        if(key == 'onClick') {
            let onClickFunction =()=> invoke(holder.onClick,index);
            view.props.onClick = onClickFunction;
        } else if (itemData.hasOwnProperty(holder[key])) {
            view.props[key] = itemData[holder[key]]
        }
    }
}

let setList = function(view,holderViews,itemData,index){
    if(holderViews[view.props.holderId]){
        setChildAttributes(view,holderViews[view.props.holderId], itemData,index);
    }
    for(let i=0;i<view.children.length;i++){
        setList(view.children[i], holderViews, itemData,index);
    }
    return view;
    
}

//gets the mapped view
let getItemView = function(view,holderViews,itemData,index){

    if(holderViews[view.props.holderId]  ){
        setChildAttributes(view,holderViews[view.props.holderId], itemData,index);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
    }
    if(view.children)
    for(let i=0;i<view.children.length;i++){
        setList(view.children[i], holderViews, itemData, index);
    }
    return view;
    
}



//returns "filter" if arrays are of different length
//returns the indexes which have different elements in it
function diffArray(oldItems,newItems){
    if(oldItems.length!=newItems.length)
        return "filter";
    let diffIndexes=[];
    let limit = 10
    limit = newItems.length>10?10:newItems.length;
    for(let i =0;i<newItems.length;i++)
    {
        let keys = Object.keys(newItems[i]);
        if(keys)
        for(let key of keys)
        {
            if(newItems[i][key] != oldItems[i][key]){
                diffIndexes.push(i);
                break;
            }
        }
    }
    return diffIndexes;
}



  
function mergeHolderViews(holderViews){
    let finalHolder = {};
    for(let i=0;i<holderViews.length;i++){
        if(finalHolder[holderViews[i].id] == undefined){
            finalHolder[holderViews[i].id] = {};
        }
        for(let key in holderViews[i]){
            finalHolder[holderViews[i].id][key] = holderViews[i][key];
        }
    }
    return finalHolder;
}



//generates the list items views
function createListView(view){
    view.props.data.holderViews = mergeHolderViews(view.props.data.holderViews);
    view.children=[]
    changeItemView(view.props.data.itemView);
    for(let i=0;i<view.props.itemDatas.length;i++){
        let cloneTemplate = clone(view.props.data.itemView);
        let childView = getItemView(cloneTemplate,view.props.data.holderViews,view.props.itemDatas[i],i)
        view.children.push(childView);
    }
}

let itemClick = function(onItemClick){
    return function(){
        return function(){
            onItemClick(i);
        }
    }
}

//Get the child element for a particular index
let getChildItemViewByIndex = function(view,i){
    let cloneTemplate = clone(view.props.data.itemView);
    // if(view.props.hasOwnProperty('onItemClick')){
    //     let onItemClick = view.props.onItemClick;
    //     cloneTemplate.props.onClick =itemClick(onItemClick)(i);
    // }
    let res= getItemView(cloneTemplate,view.props.data.holderViews,view.props.itemDatas[i],i)
    return res;
}


//reformat the template
function changeItemView(view)
{
    view.props.holderId = view.props.id;
    view.props.id = undefined;
    if(view.children)
        for( let child of view.children)
            changeItemView(child);
}


module.exports={diffArray,createListView,getItemView,getChildItemViewByIndex};

//newinflated -> isNewInflated
//add spaces
//add summary
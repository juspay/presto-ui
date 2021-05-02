

//view.data= itemView && holderViews
//itemView=template
//holderViews= array of props that will be changed from the template

const { computeChildDimens } = require("../compute");


let availableHolders = ['text','imageUrl', 'packageIcon', 'background', 'color', 'visibility', 'textSize', 'fontStyle', 'alpha'];


//sets the holder attributes
let setChildAttributes = function(view,holder,itemData){
    for(let prop of availableHolders){

        if(holder[prop])
        {
            // console.log('HELLO WORLD')
            // console.log(holder[prop])
            // console.log(prop +" to "+ holder[prop] + " to "+itemData[holder[prop]]);
            if(itemData[holder[prop]])
                view.props[prop] = itemData[holder[prop]]
            
        }
    }
}
let setList = function(view,holderViews,itemData){
    let currentHolderObject = null;
    if(listIndex==holderViews.length)
        return view;
    currentHolderObject = holderViews[listIndex];
    if(view.props.holderId == currentHolderObject.id){
        setChildAttributes(view,currentHolderObject, itemData);
        listIndex++;
    }
    for(let i=0;i<view.children.length;i++){
        setList(view.children[i], holderViews, itemData);
    }
    return view;
    
}

//gets the mapped view
let getItemView = function(view,holderViews,itemData){
    let currentHolderObject = null;
    // if(!holderViews)
    //     console.log("doajdfadf");
    if(listIndex==holderViews.length)
        return view;
    currentHolderObject = holderViews[listIndex];
    if(view.props.holderId == currentHolderObject.id){
        // console.log("FOUND ONE EQUAL")
        setChildAttributes(view,currentHolderObject, itemData);
        listIndex++;
    }
    if(view.children)
    for(let i=0;i<view.children.length;i++){
        setList(view.children[i], holderViews, itemData);
    }
    return view;
    
}
let listIndex;



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





  




//generates the list items views
function createListView(view){

    //console.log("lendth of the list is "+view.props.itemDatas.length)
    view.children=[]
    changeItemView(view.props.data.itemView);
    for(let i=0;i<view.props.itemDatas.length;i++){
        listIndex=0;
        let cloneTemplate = JSON.parse(JSON.stringify(view.props.data.itemView));
        if(view.props.hasOwnProperty('onItemClick')){
            let onItemClick = view.props.onItemClick;
            cloneTemplate.props.onClick = itemClick(onItemClick)(i);
        }
        let childView = getItemView(cloneTemplate,view.props.data.holderViews,view.props.itemDatas[i])
        view.children.push(childView);
    }
}

let itemClick = function(onItemClick){
    return function(i){
        return function(){
            onItemClick(i);
        }
    }
}

//Get the child element for a particular index
let getChildItemViewByIndex = function(view,i){
    listIndex=0;
    let cloneTemplate = JSON.parse(JSON.stringify(view.props.data.itemView));
    if(view.props.hasOwnProperty('onItemClick')){
        let onItemClick = view.props.onItemClick;
        cloneTemplate.props.onClick =itemClick(onItemClick)(i);
    }
    let res= getItemView(cloneTemplate,view.props.data.holderViews,view.props.itemDatas[i])
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
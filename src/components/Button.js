function Button() {}

Button.prototype._renderMain = function(elem, props, renderEvent) {
    let guid = props.guid 
    if(elem.getAttribute('guid'))
        guid = elem.getAttribute('guid')

    elem.style.cursor = 'pointer' 
    elem.style.padding = 0
    elem.innerHTML = ''

    let linkElem = document.createElement('A')
    elem.appendChild(linkElem)

    if (props.text) 
        linkElem.innerHTML = props.text
    else
        linkElem.innerHTML = "Button Text"

    linkElem.style.pointerEvents = 'auto'

    if(props.hasOwnProperty('padding') && props.padding) {
        let padding = props.padding.split(',').map(a => a * 1)
        
        linkElem.style.padding = padding[1] + 'px ' + padding[2] + 'px ' + padding[3] + 'px ' + padding[0] + 'px'
    } else {
        linkElem.style.padding = 0
    }

    if (!props.stroke) {
        linkElem.style.border = '1px solid ' + window.__COM_COLOR_GROUP.BT_BORDER_COLOR
    }

    if (!props.backgroundColor) {
        linkElem.style.backgroundColor = window.__COM_COLOR_GROUP.BT_BG_COLOR
    }

    if (!props.color) {
        linkElem.style.color = window.__COM_COLOR_GROUP.BT_COLOR
    }
}

module.exports = new Button()
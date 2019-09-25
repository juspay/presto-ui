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

    linkElem.style.pointerEvents = 'auto'

    if (props.hasOwnProperty('disabled') && props.disabled) {
        elem.classList.add(window.__COM_CLASS_GROUP.BT_DISABLED)
        linkElem.style.pointerEvents = 'none'        
    }

    let html = ''
    /* Button Image */
    if (props.imageUrl) { // Image URL
        let imageUrl = props.imageUrl

        let temp = imageUrl.split('.')
        let ext = ''
        if(temp && temp.length > 0)
            ext = temp[temp.length - 1]
        
        let exts = ["jpeg", "jpg", "png", "bmp", "svg", "gif"]
        ext = ext.toLowerCase()

        if(!exts.includes(ext)) {
            imageUrl += '.png'
        }

        html += '<img src="' + imageUrl + '"/>'
    } else if (props.iconName) { // Font Icon
        html += '<i class="' + props.iconName + '"></i>'
    }

    /* Button Text */
    if (props.text) 
        html += "<span>" + props.text + "</span>"
    else
        html += "<span>Button Text</span>"

    linkElem.innerHTML = html

    if(props.hasOwnProperty('padding') && props.padding) {
        let padding = props.padding.split(',').map(a => a * 1)
        
        linkElem.style.padding = padding[1] + 'px ' + padding[2] + 'px ' + padding[3] + 'px ' + padding[0] + 'px'
    } else {
        linkElem.style.padding = 0
    }

    if (!props.stroke) {
        elem.style.border = '1px solid ' + window.__COM_COLOR_GROUP.BT_BORDER_COLOR
    }

    if (!props.backgroundColor) {
        elem.style.backgroundColor = window.__COM_COLOR_GROUP.BT_BG_COLOR
    }

    if (!props.color) {
        elem.style.color = window.__COM_COLOR_GROUP.BT_COLOR
    }
}

module.exports = new Button()
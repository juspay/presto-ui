function DropdownBox() {}

DropdownBox.prototype._getMainObject = function(guid) {
     let query = '.' + window.__COM_CLASS_GROUP.DB + '[guid="' + guid +'"]'
     return document.body.querySelector(query)
}

DropdownBox.prototype._getBodyObject = function(guid) {
     let query = '.' + window.__COM_CLASS_GROUP.DB_BODY + '[guid="' + guid +'"]'
     return document.body.querySelector(query)
}

DropdownBox.prototype._getOptionsObject = function(guid) {
     let query = '.' + window.__COM_CLASS_GROUP.DB_OPTIONS + '[guid="' + guid +'"]'
     return document.body.querySelector(query)
}

DropdownBox.prototype._isValidOV = function(optionValue, options) {
     let exist = false
     
     if(options && options.length > 0) {
          for(let i in options) {
               if(options[i].value == optionValue) {
                    exist = true
                    break
               }
          }
     } 

     return exist
}

DropdownBox.prototype._selectOptionByGUID = function(guid, optionElem) {
     let value = optionElem.getAttribute('option-value')
     let text = optionElem.getAttribute('option-text')

     let object = this._getMainObject(guid)
     let objectID = object.id
     
     if(!value || !text || !objectID)
          return
     
     let view = window.__VIEWS[objectID]
     
     if(!view || !view.props)
          return

     /* Event Trigger */
     if (view.props.onSelect && typeof view.props.onSelect == "function") {
          view.props.onSelect(value)
     }
}

DropdownBox.prototype._openByGUID = function(guid) {
     let object = this._getMainObject(guid)
     let bodyElem = this._getBodyObject(guid)
     
     if(!object || !bodyElem)
          return

     object.classList.add('selected')
     bodyElem.style.display = 'flex'
     window.__COM_ACTIVE.DB = guid
}

DropdownBox.prototype._closeByGUID = function(guid) {
     let object = this._getMainObject(guid)
     let bodyElem = this._getBodyObject(guid)
     
     if(!object || !bodyElem)
          return

     object.classList.remove('selected')
     bodyElem.style.display = 'none'
     window.__COM_ACTIVE.DB = ''
}

DropdownBox.prototype._renderMain = function(elem, props, renderEvent) {
     /* Default Styles */
     let children = elem.childNodes
     let article = null

     if(children.length){
          for(let i = 0; i < children.length; i++){
               if(children[i].nodeName.toLowerCase() == 'article'){
                    article = children[i]
                    break
               }
          }
     }

     elem.style.pointerEvents = 'auto'
     elem.style.color = window.__COM_COLOR_GROUP.INACTIVE_COLOR
     elem.style.display = 'flex'
     elem.style.alignItems = 'center'
     elem.style.cursor = 'pointer'
     elem.style.fontSize = '14px'
     elem.style.letterSpacing = '0.4px'
     elem.style.fontFamily = 'Helvetica'
     elem.style.padding = "5px 15px 5px 15px"
     
     if(!props.stroke)
          elem.style.border = "1px solid " + window.__COM_COLOR_GROUP.BORDER_COLOR
     
     if(article)
          article.style.pointerEvents = 'none'

     if(props.optionValue && props.options) {
          let options = []
          let optionValue = props.optionValue

          if(props.options) {
               options = JSON.parse(props.options)
          }

          if(this._isValidOV(optionValue, options)) {
               elem.style.color = window.__COM_COLOR_GROUP.ACTIVE_COLOR

               if(article)
                    article.innerText = optionValue
          }
     }
     /* Default Styles End */
}

DropdownBox.prototype._renderBody = function(elem, props, renderEvent) {
     elem.style.border = "1px solid " + window.__COM_COLOR_GROUP.BORDER_COLOR
     elem.style.display = 'none'
}

DropdownBox.prototype._renderOptions = function(elem, props, renderEvent) {
     let options = []

     if(props.options) {
          options = JSON.parse(props.options)
     }

     elem.innerHTML = ''
     elem.style.pointerEvents = 'auto'
     
     let height = 50
     if(props.optionHeight && !isNaN(props.optionHeight)) {
          height = parseFloat(props.optionHeight)
     }

     if(options.length > 5) {
          elem.style.maxHeight = (height * 5) + 'px'
     }

     let virtualElem = document.createElement('div')
     virtualElem.style.width = '100%'  
     virtualElem.style.pointerEvents = 'none'

     elem.appendChild(virtualElem)

     let guid = props.guid
     if(elem.getAttribute('guid'))
          guid = elem.getAttribute('guid')

     if(options && options.length > 0) {
          for(let i = 0; i < options.length; i++) {
               let option = options[i]
               
               this._renderOption(virtualElem, props, guid, option, renderEvent)
          }
     }
}

DropdownBox.prototype._renderOption = function(parentElem, props, guid, option, renderEvent) {
     let elem = document.createElement('div')

     elem.className = window.__COM_CLASS_GROUP.DB_OPTION
     elem.setAttribute('option-value', option.value)
     elem.setAttribute('option-text', option.text)

     elem.style.width = '100%'
     
     let height = 50
     if(props.optionHeight && !isNaN(props.optionHeight)) {
          height = parseFloat(props.optionHeight)
     }

     elem.style.height = height + 'px'
     elem.style.color = window.__COM_COLOR_GROUP.ACTIVE_COLOR
     elem.style.display = 'flex'
     elem.style.alignItems = 'center'
     elem.style.cursor = 'pointer'
     elem.style.fontSize = '14px'
     elem.style.letterSpacing = '0.4px'
     elem.style.fontFamily = 'Helvetica'
     elem.style.padding = "5px 15px 5px 15px"
     elem.style.pointerEvents = 'auto'

     elem.setAttribute('guid', guid)

     if(props.optionValue && props.optionValue == option.value) {
          elem.classList.add('selected')
     } else {
          elem.classList.remove('selected')
     }

     let article = document.createElement('ARTICLE')
     article.innerText = option.text
     article.style.pointerEvents = 'none'

     elem.appendChild(article)
     parentElem.appendChild(elem)
}

module.exports = new DropdownBox()
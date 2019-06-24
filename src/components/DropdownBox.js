function DropdownBox() {}

DropdownBox.prototype._equalOptions = function(a, b, j) {
     let stringA = a.join(j).trim()
     let stringB = b.join(j).trim()

     if (stringA == stringB)
          return true
     return false
}

DropdownBox.prototype._selectOptionByGUID = function(guid, optionElem) {
     let value = optionElem.getAttribute('option-value')
     let text = optionElem.getAttribute('option-text')

     let mainObject = this._getMainObject(guid)
     let mainObjectID = mainObject.id

     if(!value || !text || !mainObjectID)
          return
     
     let view = window.__VIEWS[mainObjectID] 
     
     if(!view || !view.props)
          return

     // Save Option Value
     if (!window.__COM_RENDERED.DB[guid])
          window.__COM_RENDERED.DB[guid] = {}
     window.__COM_RENDERED.DB[guid].optionValue = value

     // Update UI
     let optionsElem = this._getOptionsObject(guid)
     if (optionsElem && optionsElem.childNodes) {
          for (let i = 0; i < optionsElem.childNodes.length; i++) {
               if (optionsElem.childNodes[i].getAttribute('option-value') == value && optionsElem.childNodes[i].getAttribute('option-text') == text) {
                    optionsElem.childNodes[i].classList.add('selected')
               } else {
                    optionsElem.childNodes[i].classList.remove('selected')
               }
          }
     }

     let children = mainObject.childNodes
     let article = null

     if(children.length){
          for(let i = 0; i < children.length; i++){
               if(children[i].nodeName.toLowerCase() == 'article'){
                    article = children[i]
                    break
               }
          }
     }

     mainObject.style.color = window.__COM_COLOR_GROUP.ACTIVE_COLOR
     if (article)
          article.innerText = text

     // Event Trigger
     if (view.props.onSelect && typeof view.props.onSelect == "function") {
          view.props.onSelect(value)
     }
}

DropdownBox.prototype._isValidOV = function(optionValue, options) {
     let text = ""
     
     if(options && options.length > 0) {
          for(let i in options) {
               if(options[i].value == optionValue) {
                    text = options[i].text
                    break
               }
          }
     } 

     return text
}

DropdownBox.prototype._getMainObject = function(guid) {
     let query = '.' + window.__COM_CLASS_GROUP.DB + '[guid="' + guid +'"]'
     return document.body.querySelector(query)
}

DropdownBox.prototype._getFullBodyObject = function(guid) {
     let query = '.' + window.__COM_CLASS_GROUP.DB_FULL_BODY + '[guid="' + guid +'"]'
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

DropdownBox.prototype._renderOption = function(parentElem, props, guid, option, optionValue, renderEvent) {
     let elem = document.createElement('div')

     elem.className = window.__COM_CLASS_GROUP.DB_OPTION
     elem.setAttribute('option-value', option.value)
     elem.setAttribute('option-text', option.text)

     let height = 50
     if(props.optionHeight && !isNaN(props.optionHeight)) {
          height = parseFloat(props.optionHeight)
     }

     elem.style.height = height + 'px'
     
     if(props.fontSize) 
          elem.style.fontSize = props.fontSize + 'px'
     if(props.fontFamily)
          elem.style.fontFamily = props.fontFamily
     if(props.optionPadding) { 
          let padding = props.optionPadding.split(',').map(a => a * 1);
  
          elem.style.padding = padding[1] + 'px ' + padding[2] + 'px ' + padding[3] + 'px ' + padding[0] + 'px'
     }

     elem.setAttribute('guid', guid) 

     if(optionValue && optionValue == option.value) {
          elem.classList.add('selected')
     } else {
          elem.classList.remove('selected')
     }

     let article = document.createElement('ARTICLE')
     article.innerText = option.text
     
     elem.appendChild(article)
     parentElem.appendChild(elem)
}

DropdownBox.prototype._openByGUID = function(guid) {
     let object = this._getMainObject(guid)
     let bodyElem = this._getBodyObject(guid)
     
     if(!object || !bodyElem)
          return

     object.classList.add('selected')
     bodyElem.style.display = 'block'
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
     // GUID
     let guid = props.guid
     if(elem.getAttribute('guid'))
          guid = elem.getAttribute('guid')

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

     if(!props.stroke)
          elem.style.border = "1px solid " + window.__COM_COLOR_GROUP.BORDER_COLOR
     
     if(props.options) {
          let options = JSON.parse(props.options)
          let optionValue = null

          if (props.optionValue)
               optionValue = props.optionValue

          // Read option value
          if (window.__COM_RENDERED.DB[guid] && window.__COM_RENDERED.DB[guid].optionValue)
               optionValue = window.__COM_RENDERED.DB[guid].optionValue + ""

          if(optionValue) {
               let optionText = this._isValidOV(optionValue, options)

               if (optionText != "") { 
                    elem.style.color = window.__COM_COLOR_GROUP.ACTIVE_COLOR

                    if(article)
                         article.innerText = optionText
               }
          }
     }
     /* Default Styles End */
}

DropdownBox.prototype._renderFullBody = function(elem, props, renderEvent) {
     // GUID
     let guid = props.guid
     if(elem.getAttribute('guid'))
          guid = elem.getAttribute('guid')

     let bodyElem = null
          let optionsElement = null

     if (renderEvent) {
          bodyElem = document.createElement('div')
          bodyElem.classList.add(window.__COM_CLASS_GROUP.DB_BODY)
          bodyElem.style.display = 'none'
          bodyElem.setAttribute('guid', guid)
          
               optionsElement = document.createElement('div')
               optionsElement.classList.add(window.__COM_CLASS_GROUP.DB_OPTIONS)
               optionsElement.setAttribute('guid', guid)

               bodyElem.appendChild(optionsElement)

          elem.appendChild(bodyElem)
     } else {
          bodyElem = this._getBodyObject(guid)
                    
               optionsElement = this._getOptionsObject(guid)
     }

     if (!bodyElem || !optionsElement)
          return

     // Options
     this._renderOptions(optionsElement, props, guid, renderEvent)
}

DropdownBox.prototype._renderOptions = function(elem, props, guid, renderEvent) {
     let previousOptions = []
     let options = []

     // Current Options
     if(props.options) {
          options = JSON.parse(props.options)
     }

     // Previous Options
     if (window.__COM_RENDERED.DB[guid] && window.__COM_RENDERED.DB[guid].options) {
          previousOptions = JSON.parse(window.__COM_RENDERED.DB[guid].options)
     }

     // Read option value
     let optionValue = null
     if (props.optionValue)
          optionValue = props.optionValue
     if (window.__COM_RENDERED.DB[guid] && window.__COM_RENDERED.DB[guid].optionValue)
          optionValue = window.__COM_RENDERED.DB[guid].optionValue + ""

     // Save Options
     if (!window.__COM_RENDERED.DB[guid])
          window.__COM_RENDERED.DB[guid] = {}
     window.__COM_RENDERED.DB[guid].options = props.options
     
     // Style
     let height = 50
     if(props.optionHeight && !isNaN(props.optionHeight)) {
          height = parseFloat(props.optionHeight)
     }

     if(options.length > 5) {
          elem.style.maxHeight = (height * 5) + 'px'
     } else {
          elem.style.maxHeight = 'auto'
     }
     
     if (!this._equalOptions(previousOptions, options, guid)) { // Options Changed - Need to Re-render
          elem.innerHTML = ''
          
          if(options && options.length > 0) {
               for(let i = 0; i < options.length; i++) {
                    let option = options[i]
                    
                    this._renderOption(elem, props, guid, option, optionValue, renderEvent)
               }
          }
     }
}

module.exports = new DropdownBox()
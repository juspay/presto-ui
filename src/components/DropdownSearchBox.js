function DropdownSearchBox() {}

DropdownSearchBox.prototype._equalOptions = function(a, b, j) {
     let stringA = a.join(j).trim()
     let stringB = b.join(j).trim()

     if (stringA == stringB)
          return true
     return false
}

DropdownSearchBox.prototype._selectOptionByGUID = function(guid, optionElem) {
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
     if (!window.__COM_RENDERED.DSB[guid])
          window.__COM_RENDERED.DSB[guid] = {}
     window.__COM_RENDERED.DSB[guid].optionValue = value

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

DropdownSearchBox.prototype._isValidOV = function(optionValue, options) {
     let optionText = ""
     
     if(options && options.length > 0) {
          for(let i in options) {
               if(options[i].value == optionValue) {
                    optionText = options[i].text
                    break
               }
          }
     } 

     return optionText
}

DropdownSearchBox.prototype._getMainObject = function(guid) {
     let query = '.' + window.__COM_CLASS_GROUP.DSB + '[guid="' + guid +'"]'
     return document.body.querySelector(query)
}

DropdownSearchBox.prototype._getFullBodyObject = function(guid) {
     let query = '.' + window.__COM_CLASS_GROUP.DSB_FULL_BODY + '[guid="' + guid +'"]'
     return document.body.querySelector(query)
}

DropdownSearchBox.prototype._getBodyObject = function(guid) {
     let query = '.' + window.__COM_CLASS_GROUP.DSB_BODY + '[guid="' + guid +'"]'
     return document.body.querySelector(query)
}

DropdownSearchBox.prototype._getSearchWrapObject = function(guid) {
     let query = '.' + window.__COM_CLASS_GROUP.DSB_SEARCH_WRAP + '[guid="' + guid +'"]'
     return document.body.querySelector(query)
}

DropdownSearchBox.prototype._getSearchObject = function(guid) {
     let query = '.' + window.__COM_CLASS_GROUP.DSB_SEARCH + '[guid="' + guid +'"]'
     return document.body.querySelector(query)
}

DropdownSearchBox.prototype._getOptionsObject = function(guid) {
     let query = '.' + window.__COM_CLASS_GROUP.DSB_OPTIONS + '[guid="' + guid +'"]'
     return document.body.querySelector(query)
}

DropdownSearchBox.prototype._filterOptions = function(guid, query) {
     let optionsElem = this._getOptionsObject(guid)

     if (!optionsElem)
          return

     query = query.toLowerCase()

     if (optionsElem.childNodes) {
          for (let i = 0; i < optionsElem.childNodes.length; i++) {
               let optionElem = optionsElem.childNodes[i]
               let text = optionElem.getAttribute('option-text')

               if (text) {
                    text = text.toLowerCase()

                    if(text.indexOf(query) !== -1) {
                         optionElem.style.display = 'flex'
                    } else {
                         optionElem.style.display = 'none'
                    }
               }
          }
     }
}

DropdownSearchBox.prototype._renderOption = function(parentElem, props, guid, option, optionValue, renderEvent) {
     let elem = document.createElement('div')

     elem.className = window.__COM_CLASS_GROUP.DSB_OPTION
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

DropdownSearchBox.prototype._openByGUID = function(guid) {
     let object = this._getMainObject(guid)
     let bodyElem = this._getBodyObject(guid)
     
     if(!object || !bodyElem)
          return

     object.classList.add('selected')
     bodyElem.style.display = 'block'
     window.__COM_ACTIVE.DSB = guid
}

DropdownSearchBox.prototype._closeByGUID = function(guid) {
     let object = this._getMainObject(guid)
     let bodyElem = this._getBodyObject(guid)
     
     if(!object || !bodyElem)
          return

     object.classList.remove('selected')
     bodyElem.style.display = 'none'
     window.__COM_ACTIVE.DSB = ''
}

DropdownSearchBox.prototype._renderMain = function(elem, props, renderEvent) {
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
          if (window.__COM_RENDERED.DSB[guid] && window.__COM_RENDERED.DSB[guid].optionValue)
               optionValue = window.__COM_RENDERED.DSB[guid].optionValue + ""

          if (optionValue) {
               let optionText = this._isValidOV(optionValue, options)

               if(optionText != "") {
                    elem.style.color = window.__COM_COLOR_GROUP.ACTIVE_COLOR

                    if(article)
                         article.innerText = optionText
               }
          }
     }
     /* Default Styles End */
}

DropdownSearchBox.prototype._renderFullBody = function(elem, props, renderEvent) {
     // GUID
     let guid = props.guid
     if(elem.getAttribute('guid'))
          guid = elem.getAttribute('guid')

     let bodyElem = null
          let searchWrapElement = null
               let searchElement = null
          let optionsElement = null

     if (renderEvent) {
          bodyElem = document.createElement('div')
          bodyElem.classList.add(window.__COM_CLASS_GROUP.DSB_BODY)
          bodyElem.style.display = 'none'
          bodyElem.setAttribute('guid', guid)
          
               searchWrapElement = document.createElement('div')
               searchWrapElement.classList.add(window.__COM_CLASS_GROUP.DSB_SEARCH_WRAP) 
               searchWrapElement.setAttribute('guid', guid)
                    
                    searchElement = document.createElement('INPUT')
                    searchElement.setAttribute('type', 'text')
                    searchElement.setAttribute('placeholder', 'Search...')
                    searchElement.classList.add(window.__COM_CLASS_GROUP.DSB_SEARCH)
                    searchElement.setAttribute('guid', guid)

                    searchWrapElement.appendChild(searchElement)

               bodyElem.appendChild(searchWrapElement)

               optionsElement = document.createElement('div')
               optionsElement.classList.add(window.__COM_CLASS_GROUP.DSB_OPTIONS)
               optionsElement.setAttribute('guid', guid)

               bodyElem.appendChild(optionsElement)

          elem.appendChild(bodyElem)
     } else {
          bodyElem = this._getBodyObject(guid)

               searchWrapElement = this._getSearchWrapObject(guid)

                    searchElement = this._getSearchObject(guid)

               optionsElement = this._getOptionsObject(guid)
     }

     if (!bodyElem || !searchWrapElement || !searchElement || !optionsElement)
          return

     // Styles
     if(props.fontSize) 
          searchElement.style.fontSize = props.fontSize + 'px'
     if(props.fontFamily)
          searchElement.style.fontFamily = props.fontFamily

     // Options
     this._renderOptions(optionsElement, props, guid, renderEvent)
}

DropdownSearchBox.prototype._renderOptions = function(elem, props, guid, renderEvent) {
     let previousOptions = []
     let options = []

     // Current Options
     if(props.options) {
          options = JSON.parse(props.options)
     }

     // Previous Options
     if (window.__COM_RENDERED.DSB[guid] && window.__COM_RENDERED.DSB[guid].options) {
          previousOptions = JSON.parse(window.__COM_RENDERED.DSB[guid].options)
     }

     // Read option value
     let optionValue = null
     if (props.optionValue)
          optionValue = props.optionValue
     if (window.__COM_RENDERED.DSB[guid] && window.__COM_RENDERED.DSB[guid].optionValue)
          optionValue = window.__COM_RENDERED.DSB[guid].optionValue + ""

     // Save Options
     if (!window.__COM_RENDERED.DSB[guid])
          window.__COM_RENDERED.DSB[guid] = {}
     window.__COM_RENDERED.DSB[guid].options = props.options
     
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

module.exports = new DropdownSearchBox()
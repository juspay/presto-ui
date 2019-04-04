/* Input Box */
function controlInputBoxStyle(elem, props, renderEvent) {
     /* Stroke Apply */
     if(props.errorText && props.errorText.trim() != '') {
          elem.setAttribute('has_error', 'yes')
          elem.style.border = "1px solid #D75353"
     } else {
          elem.setAttribute('has_error', 'no')
          elem.style.border = "1px solid #A3AFC2"
     }

     if(renderEvent) {
          elem.addEventListener('focus', function() {
               let has_error = elem.getAttribute('has_error')
               let focusColor = (has_error && has_error == 'yes')?'#D75353':'#707886'

               elem.style.border =  "1px solid " + focusColor
          })

          elem.addEventListener('blur', function() {
               let has_error = elem.getAttribute('has_error')
               let borderColor = (has_error && has_error == 'yes')?'#D75353':'#A3AFC2'

               elem.style.border = "1px solid " + borderColor
          })
     }
     /* Stroke Apply End */
}

/* Dropdown Box */
function controlDropdownBoxStyle(elem, props, renderEvent) {
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

     elem.style.color = 'rgba(53, 64, 82, 0.5)'

     elem.style.display = 'flex'
     elem.style.alignItems = 'center'
     elem.style.cursor = 'pointer'
     elem.style.fontSize = 14
     elem.style.letterSpacing = 0.4
     elem.style.fontFamily = 'Helvetica'
     elem.style.padding = "5 15 5 15"

     if(article)
          article.style.pointerEvents = 'none'
     /* Default Styles End */

     /* Stroke Apply */
     if(props.errorText && props.errorText.trim() != '') {
          elem.setAttribute('has_error', 'yes')
          elem.style.border = "1px solid #D75353"
     } else {
          elem.setAttribute('has_error', 'no')
          elem.style.border = "1px solid #A3AFC2"
     }

     if(renderEvent) {
          elem.addEventListener('click', function() {
               let dropdownElem = getDropdownBoxOptionsWrapperFromMain(elem)
               if(!dropdownElem)
                    return

               let has_value = elem.getAttribute('has_value')
               
               if(has_value && has_value == 'yes') {
                    elem.removeAttribute('has_value')
                    elem.style.border = "1px solid #A3AFC2"
                    elem.style.color = 'rgba(53, 64, 82, 0.5)'

                    dropdownElem.style.display = 'none'
               } else {
                    elem.setAttribute('has_value', 'yes')
                    elem.style.border = '1px solid #707886'
                    elem.style.color = 'rgba(53, 64, 82, 0.75)'

                    dropdownElem.style.display = 'flex'
               }
          })
     }
     /* Stroke Apply End */
}

/* Get Dropdown Box Options Wrapper from Main */
function getDropdownBoxOptionsWrapperFromMain(elem) {
     let parentElem = elem.parentNode
     let dropdownElem = null

     if(parentElem && parentElem.childNodes) {
          let children = parentElem.childNodes

          for(let i = 0; i < children.length; i++) {
               if(children[i].classList.contains('relativeLayout')) {
                    let subChildren = children[i].childNodes

                    if(subChildren && subChildren.length == 1) {
                         dropdownElem = subChildren[0]
                    }

                    break
               }
          }
     }

     return dropdownElem
}

/* Dropdown Box Options */
function controlDropdownBoxOptionsStyle(elem, props, renderEvent) {
     let options = []

     if(props.options) {
          options = JSON.parse(props.options)
     }

     elem.innerHTML = ''
     elem.style.border = '1px solid #A3AFC2'
     elem.style.display = 'none'

     if(options && options.length > 0) {
          for(let i = 0; i < options.length; i++) {
               let option = options[i]
               let lastOption = (i == options.length - 1)?true:false

               createComponentDropdownBoxOption(elem, props, option, lastOption, renderEvent)
          }
     }
}

/* Create Component DropdownBox Option */
function createComponentDropdownBoxOption(parentElem, props, option, lastOption, renderEvent) {
     let elem = document.createElement('div')

     elem.className = 'componentDropdownOption'
     elem.setAttribute('option-value', option.value)
     elem.style.width = '100%'
     
     let height = 50
     if(props.optionHeight && !isNaN(props.optionHeight)) {
          height = parseFloat(props.optionHeight)
     }

     elem.style.height = height + 'px'
     elem.style.color = 'rgb(53, 64, 82)'
     elem.style.display = 'flex'
     elem.style.alignItems = 'center'
     elem.style.cursor = 'pointer'
     elem.style.fontSize = 14
     elem.style.letterSpacing = 0.4
     elem.style.fontFamily = 'Helvetica'
     elem.style.padding = "5 15 5 15"

     if(!lastOption)
          elem.style.borderBottom = '1px solid #A3AFC2'

     let article = document.createElement('ARTICLE')
     article.innerText = option.text
     article.style.pointerEvents = 'none'

     elem.appendChild(article)
     parentElem.appendChild(elem)
}

/* Control Components */
function controlComponent(elem, props, firstRender) {
     if(!props.componentType)
          return

     let componentType = props.componentType

     switch(componentType) {
          case 'inputBox':
               controlInputBoxStyle(elem, props, firstRender)
          break
          case 'dropdownBox':
               controlDropdownBoxStyle(elem, props, firstRender)
          break
          case 'dropdownBoxOptions':
               controlDropdownBoxOptionsStyle(elem, props, firstRender)
          break
     }

     if(!window.__COMPONENT_EVENT) {
          window.__COMPONENT_EVENT = true

          document.body.addEventListener('click', function(e) {
               console.log(e.target)
          })
     }
}

module.exports = {
     controlComponent
}
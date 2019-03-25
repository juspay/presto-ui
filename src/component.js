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
     if(props.hasOwnProperty('hint') && props.hint.trim() != '') {
          elem.innerHTML = props.hint.trim()
          elem.style.color = 'rgba(53, 64, 82, 0.5)'
     }

     if(props.hasOwnProperty('height') && !isNaN(props.height)) {
          let lineHeight = parseFloat(props.height) - 10

          if(lineHeight > 0) {
               elem.style.lineHeight = lineHeight
          }
     }

     elem.style.cursor = 'pointer'
     elem.style.fontSize = 14
     elem.style.letterSpacing = 0.4
     elem.style.fontFamily = 'Helvetica'
     elem.style.padding = "5 15 5 15"
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
     }
     /* Stroke Apply End */
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
     }
}

module.exports = {
     controlComponent
}
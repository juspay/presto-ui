/* Input Box */
function controlInputBoxStyle(elem, props, renderEvent) {
     /* Stroke Apply */
     if(props.stroke) {
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
     }
     /* Stroke Apply End */
}

/* Control components dynamic style control */
function controlComponentStyle(elem, props) {
     if(!props.componentType)
          return

     let componentType = props.componentType

     switch(componentType) {
          case 'inputBox':
               controlInputBoxStyle(elem, props, false)
          break
     }
}

/* Control components after rendered */
function controlComponentAfterRender(elem, view) {
     if(!view.props.componentType)
          return

     let componentType = view.props.componentType
  
     switch(componentType) {
          case 'inputBox':
               controlInputBoxStyle(elem, view.props, true)
          break
  }
}

module.exports = {
     controlComponentAfterRender,
     controlComponentStyle
}
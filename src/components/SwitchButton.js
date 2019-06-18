function SwitchButton() {}

SwitchButton.prototype._renderMain = function(elem, props, renderEvent) {
     if (renderEvent) {
          elem.innerHTML = ''

          let guid = props.guid 
          if(elem.getAttribute('guid'))
               guid = elem.getAttribute('guid')

          this._renderStyle(elem, props, guid)

          let virtualElem = document.createElement('LABEL')
          virtualElem.classList.add(window.__COM_CLASS_GROUP.SWITCH_BODY)
          virtualElem.setAttribute('guid', guid)
          
          elem.appendChild(virtualElem)

          this._renderSlider(virtualElem, props, guid, renderEvent)
     }
}

SwitchButton.prototype._renderSlider = function(parentElem, props, guid, renderEvent) {
     let selectedDefault = false
     if(props.hasOwnProperty('selectedDefault')) 
          selectedDefault = props.selectedDefault

     let checkbox = document.createElement('INPUT')
     checkbox.setAttribute('type', 'checkbox')
     
     if(selectedDefault) {
          checkbox.setAttribute('checked', 'checked')
     }
     
     let elem = document.createElement('SPAN')
     elem.classList.add(window.__COM_CLASS_GROUP.SWITCH_SLIDER)

     parentElem.appendChild(checkbox)
     parentElem.appendChild(elem)

     // Events
     if (renderEvent && props.onSwitch && typeof props.onSwitch == "function") {
          checkbox.addEventListener('change', function() {
               props.onSwitch(this.checked)
          })
     }
}

SwitchButton.prototype._renderStyle = function(parentElem, props, guid) {
     let gap = 4
     let parentWidth = parentElem.offsetWidth
     let parentHeight = parentElem.offsetHeight

     let size = Math.min(parentWidth, parentHeight)
     let actualSize = size - 2 * gap
     if (actualSize < 0) {
          actualSize = size
          gap = 0
     }

     let tx = parentWidth - 2 * gap - actualSize
     if (tx < 0)
          tx = 0

     let styleElem = document.createElement('style')
     styleElem.type = 'text/css'

     let css = ''
     css += '.' + window.__COM_CLASS_GROUP.SWITCH_BODY + '[guid="' + guid + '"] .' + window.__COM_CLASS_GROUP.SWITCH_SLIDER + '{border-radius: ' + size + 'px} '
     css += '.' + window.__COM_CLASS_GROUP.SWITCH_BODY + '[guid="' + guid + '"] .' + window.__COM_CLASS_GROUP.SWITCH_SLIDER + ':before {border-radius: 50%; content: ""; position: absolute; width: ' + actualSize + 'px; height: ' + actualSize + 'px; left: ' + gap + 'px; bottom: ' + gap + 'px; background-color: white; -webkit-transition: .4s; transition: .4s;} '
     css += '.' + window.__COM_CLASS_GROUP.SWITCH_BODY + '[guid="' + guid + '"] input:checked + .' + window.__COM_CLASS_GROUP.SWITCH_SLIDER + ':before {transform: translateX(' + tx + 'px);} '

     styleElem.appendChild(document.createTextNode(css))
     document.head.appendChild(styleElem)
}

module.exports = new SwitchButton()
const DropdownSearchBox = require('./components/DropdownSearchBox') 
const NavBar = require('./components/NavBar')

/* Components */
function renderComponent(elem, props, firstRender) {
     if(!props.componentType)
          return

     let componentType = props.componentType

     /* Attaching GUID only when firstRender */
     if(firstRender && props.guid)
          elem.setAttribute('guid', props.guid)

     switch(componentType) {
          case 'NAVBAR':
               elem.classList.add(window.__COM_CLASS_GROUP.NAVBAR)

               NavBar._renderMain(elem, props, firstRender)
          break
          case 'DSB':
               elem.classList.add(window.__COM_CLASS_GROUP.DSB)

               DropdownSearchBox._renderMain(elem, props, firstRender)
          break
          case 'DSB_BODY':
               elem.classList.add(window.__COM_CLASS_GROUP.DSB_BODY)

               DropdownSearchBox._renderBody(elem, props, firstRender)
          break
          case 'DSB_SEARCH':
               elem.classList.add(window.__COM_CLASS_GROUP.DSB_SEARCH)

               DropdownSearchBox._renderSearch(elem, props, firstRender)
          break
          case 'DSB_OPTIONS':
               elem.classList.add(window.__COM_CLASS_GROUP.DSB_OPTIONS)
               
               DropdownSearchBox._renderOptions(elem, props, firstRender)
          break
     }

     if(!window.__COM_EVENT) {
          window.__COM_EVENT = true

          // Body click event
          document.body.addEventListener('click', function(e) {
               let target = e.target
               let guid = target.getAttribute('guid')
               
               if(!guid) { // We need to close any active components
                    if(window.__COM_ACTIVE.DSB != '')
                         DropdownSearchBox._closeByGUID(window.__COM_ACTIVE.DSB)
               } else {
                    let classList = target.classList

                    if(classList.contains(window.__COM_CLASS_GROUP.DSB)) { // DSB Main Click
                         if(guid == window.__COM_ACTIVE.DSB) {
                              DropdownSearchBox._closeByGUID(guid)
                         } else {
                              if(window.__COM_ACTIVE.DSB != '') {
                                   DropdownSearchBox._closeByGUID(window.__COM_ACTIVE.DSB)
                              }
          
                              DropdownSearchBox._openByGUID(guid)
                         }
                    } else if(classList.contains(window.__COM_CLASS_GROUP.DSB_OPTION)) { // DSB Option Select
                         DropdownSearchBox._closeByGUID(guid)
                         DropdownSearchBox._selectOptionByGUID(guid, target)
                    }
               }
          })

          // Keydown event
          document.body.addEventListener('keyup', function(e) {
               let target = e.target
               let guid = target.getAttribute('guid')
               
               if(!guid)
                    return 
               
               let classList = target.classList
               
               if(classList.contains(window.__COM_CLASS_GROUP.DSB_SEARCH)) {
                    if(guid == window.__COM_ACTIVE.DSB) {
                         let query = target.value.trim()
                         DropdownSearchBox._filterOptions(guid, query)
                    }
               }
          })
     }
}

module.exports = {
     renderComponent
}
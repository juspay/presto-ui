function NavBar() {}

NavBar.prototype._getActiveRouteItem = function(guid) {
     let query = '.' + window.__COM_CLASS_GROUP.NAVBAR_ITEM_WITH_SUB + '.selected[guid="' + guid +'"]'
     return document.body.querySelector(query) 
}

NavBar.prototype._getMainObject = function(guid) {
     let query = '.' + window.__COM_CLASS_GROUP.NAVBAR + '[guid="' + guid +'"]'
     return document.body.querySelector(query)
}

NavBar.prototype._openByGUID = function(guid, parentElem) {
     parentElem.classList.add('selected')
     window.__COM_ACTIVE.NAVBAR = guid
}

NavBar.prototype._closeByGUID = function(guid) {
     let object = this._getActiveRouteItem(guid)
     if(object)
          object.classList.remove('selected')

     window.__COM_ACTIVE.NAVBAR = ''
}

NavBar.prototype._selectRouteByGUID = function(guid, elem) {
     let key = elem.getAttribute('route-key')
     let text = elem.getAttribute('route-text')

     let object = this._getMainObject(guid)
     let objectID = object.id
     
     if(!key || !text || !objectID)
          return
     
     let view = window.__VIEWS[objectID]
     
     if(!view || !view.props)
          return

     /* Event Trigger */
     if (view.props.onSelect && typeof view.props.onSelect == "function") {
          view.props.onSelect(key)
     }
     
}

NavBar.prototype._renderRoute = function(parentElem, props, guid, route, renderEvent) {
     if(!route.key || !route.text)
          return

     let elem = document.createElement('LI')
     elem.classList.add(window.__COM_CLASS_GROUP.NAVBAR_ITEM)
     
     elem.setAttribute('route-key', route.key)
     elem.setAttribute('route-text', route.text)
     elem.setAttribute('guid', guid)

     if(props.value && props.value == route.key)
          elem.classList.add('selected')
     else
          elem.classList.remove('selected')

     let article = document.createElement('article')
     if(props.height && !isNaN(props.height))
          article.style.lineHeight = props.height + 'px'

     elem.appendChild(article)

     if(route.subroutes && route.subroutes.length > 0) {
          article.innerHTML = route.text + ' &#9662;'
          elem.classList.add(window.__COM_CLASS_GROUP.NAVBAR_ITEM_WITH_SUB)

          let virtualElem = document.createElement('UL')
          virtualElem.classList.add(window.__COM_CLASS_GROUP.NAVBAR_SUB)

          if(route.navDirection && route.navDirection == 'from_right') 
               virtualElem.classList.add(window.__COM_CLASS_GROUP.NAVBAR_SUB_RIGHT)

          virtualElem.setAttribute('guid', guid)          

          if(props.translationZ_nav)
               virtualElem.style.zIndex = props.translationZ_nav

          elem.appendChild(virtualElem)

          for(let i = 0; i < route.subroutes.length; i++) {
               let subroute = route.subroutes[i]

               this._renderSubRoute(virtualElem, props, guid, subroute, renderEvent)
          }
     } else {
          article.innerHTML = route.text
     }

     parentElem.appendChild(elem)
}

NavBar.prototype._renderSubRoute = function(parentElem, props, guid, route, renderEvent) {
     if(!route.key || !route.text)
          return

     let elem = document.createElement('LI')
     elem.classList.add(window.__COM_CLASS_GROUP.NAVBAR_SUB_ITEM)

     elem.setAttribute('route-key', route.key)
     elem.setAttribute('route-text', route.text)
     elem.setAttribute('guid', guid)

     if(props.value && props.value == route.key)
          elem.classList.add('selected')
     else
          elem.classList.remove('selected')

     let article = document.createElement('article') 
     article.innerHTML = route.text

     elem.appendChild(article)
     parentElem.appendChild(elem)
}

NavBar.prototype._renderMain = function(elem, props, renderEvent) {
     elem.innerHTML = ''
     elem.style.letterSpacing = '0.4px'

     let routes = []
     if(props && props.routes)
          routes = JSON.parse(props.routes)

     let guid = props.guid
     if(elem.getAttribute('guid'))
          guid = elem.getAttribute('guid')

     let virtualElem = document.createElement('UL')
     virtualElem.style.height = '100%'

     elem.appendChild(virtualElem)

     if(routes.length > 0) {
          for(let i = 0; i < routes.length; i++) {
               let route = routes[i]

               this._renderRoute(virtualElem, props, guid, route, renderEvent)
          }
     }
}

module.exports = new NavBar()
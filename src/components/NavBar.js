function NavBar() {}

NavBar.prototype._renderRoute = function(parentElem, props, guid, route, renderEvent) {
     if(!route.key || !route.text)
          return

     let elem = document.createElement('LI')
     elem.classList.add(window.__COM_CLASS_GROUP.NAVBAR_ITEM)
     
     elem.setAttribute('route-key', route.key)
     elem.setAttribute('route-text', route.text)
     elem.setAttribute('guid', guid)

     let article = document.createElement('article')
     elem.appendChild(article)

     if(route.subroutes && route.subroutes.length > 0) {
          article.innerHTML = route.text + ' &#9662;'
          elem.classList.add(window.__COM_CLASS_GROUP.NAVBAR_ITEM_WITH_SUB)

          let virtualElem = document.createElement('UL')
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

     let article = document.createElement('article')
     article.innerHTML = route.text

     elem.appendChild(article)
     parentElem.appendChild(elem)
}

NavBar.prototype._renderMain = function(elem, props, renderEvent) {
     elem.innerHTML = ''
     elem.style.pointerEvents = 'none'
     elem.style.fontSize = 14
     elem.style.letterSpacing = 0.2
     elem.style.fontFamily = 'Helvetica'

     let routes = []
     if(props && props.routes)
          routes = JSON.parse(props.routes)

     let guid = props.guid
     if(elem.getAttribute('guid'))
          guid = elem.getAttribute('guid')

     let virtualElem = document.createElement('UL')  
     elem.appendChild(virtualElem)

     if(routes.length > 0) {
          for(let i = 0; i < routes.length; i++) {
               let route = routes[i]

               this._renderRoute(virtualElem, props, guid, route, renderEvent)
          }
     }
}

module.exports = new NavBar()
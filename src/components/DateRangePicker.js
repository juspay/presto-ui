const $ = require('jquery')
const moment = require('moment') 
const daterangepicker = require('daterangepicker')

function DateRangePicker() {}

DateRangePicker.prototype._getBodyObject = function(guid) {
     let query = '.' + window.__COM_CLASS_GROUP.DRP_BODY + '[guid="' + guid +'"]'
     return document.body.querySelector(query)
}

DateRangePicker.prototype._getStartDate = function(props) {
     let start = moment().subtract(29, 'days')
     
     if(props.startDate && props.startDate.trim() != "") {
          start = moment(props.startDate)
     }

     return start
}

DateRangePicker.prototype._getEndDate = function(props) {
     let end = moment()

     if(props.endDate && props.endDate.trim() != "") {
          end = moment(props.endDate)
     }

     return end
}

DateRangePicker.prototype._renderText = function(elem, start, end) {
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
     
     if (article) {
          article.innerHTML = start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY')
     }
     
     elem.style.color = window.__COM_COLOR_GROUP.INACTIVE_COLOR
}

DateRangePicker.prototype._renderMain = function(elem, props, renderEvent) {
     // GUID
     let guid = props.guid
     if(elem.getAttribute('guid'))
          guid = elem.getAttribute('guid')

     if(renderEvent) {
          let start = this._getStartDate(props)
          let end = this._getEndDate(props)

          let cb = (start, end) => {
               let res = {
                    startLabel: start.format('MMMM D, YYYY'),
                    endLabel: end.format('MMMM D, YYYY'),
                    startDate: start.format('YYYY-MM-DD'),
                    endDate: end.format('YYYY-MM-DD')
               }

               /* Update UI */
               let bodyElem = this._getBodyObject(guid)
               this._renderText(bodyElem, start, end)

               if (!window.__COM_RENDERED.DRP[guid])
                    window.__COM_RENDERED.DRP[guid] = {}
               window.__COM_RENDERED.DRP[guid].start = start
               window.__COM_RENDERED.DRP[guid].end = end

               /* Events Trigger */
               if (props.onDateChange && typeof props.onDateChange == "function") {
                    props.onDateChange(JSON.stringify(res))
               }
          }

          $('.' + window.__COM_CLASS_GROUP.DRP + '[guid='+ guid +']').daterangepicker({
               startDate: start,
               endDate: end,
               ranges: {
                  'Today': [moment(), moment()],
                  'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                  'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                  'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                  'This Month': [moment().startOf('month'), moment().endOf('month')],
                  'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
               }
          }, cb)
     }
}

DateRangePicker.prototype._renderBody = function(elem, props, renderEvent) {
     // GUID
     let guid = props.guid
     if(elem.getAttribute('guid'))
          guid = elem.getAttribute('guid')

     let start = this._getStartDate(props)
     let end = this._getEndDate(props)

     if (window.__COM_RENDERED.DRP[guid]) {
          if (window.__COM_RENDERED.DRP[guid].start)
               start = window.__COM_RENDERED.DRP[guid].start
          if (window.__COM_RENDERED.DRP[guid].end)
               end = window.__COM_RENDERED.DRP[guid].end
     }

     this._renderText(elem, start, end)
}

module.exports = new DateRangePicker()
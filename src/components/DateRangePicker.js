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
          if(!window.__COM_RENDERED.DRP_GLOBAL) {
               window.__COM_RENDERED.DRP_GLOBAL = true
     
               this._renderStyle()
          }

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

DateRangePicker.prototype._renderStyle = function() {
     let style = ''

     style += '<style type="text/css">'
     
     style += ".daterangepicker{position: absolute; color: inherit; background-color: #fff; border-radius: 4px; border: 1px solid #ddd; width: 278px; max-width: none; padding: 0; margin-top: 7px; top: 100px; left: 20px; z-index: 3001; display: none; font-family: arial; font-size: 15px; line-height: 1em;}"
     style += ".daterangepicker:before, .daterangepicker:after {position: absolute; display: inline-block; border-bottom-color: rgba(0, 0, 0, 0.2); content: '';}"
     style += ".daterangepicker:before {top: -7px; border-right: 7px solid transparent; border-left: 7px solid transparent; border-bottom: 7px solid #ccc;}"
     style += ".daterangepicker:after {top: -6px; border-right: 6px solid transparent; border-bottom: 6px solid #fff; border-left: 6px solid transparent;}"
     style += ".daterangepicker.opensleft:before {right: 9px;}"
     style += ".daterangepicker.opensleft:after {right: 10px;}"
     style += ".daterangepicker.openscenter:before {left: 0;right: 0;width: 0; margin-left: auto; margin-right: auto;}"
     style += ".daterangepicker.openscenter:after {left: 0; right: 0; width: 0; margin-left: auto; margin-right: auto;}"
     style += ".daterangepicker.opensright:before {left: 9px;}"
     style += ".daterangepicker.opensright:after {left: 10px;}"
     style += ".daterangepicker.drop-up {margin-top: -7px;}"
     style += ".daterangepicker.drop-up:before {top: initial; bottom: -7px; border-bottom: initial; border-top: 7px solid #ccc;}"
     style += ".daterangepicker.drop-up:after {top: initial; bottom: -6px; border-bottom: initial; border-top: 6px solid #fff;}"
     style += ".daterangepicker.single .daterangepicker .ranges, .daterangepicker.single .drp-calendar {float: none;}"
     style += ".daterangepicker.single .drp-selected {display: none;}"
     style += ".daterangepicker.show-calendar .drp-calendar {display: block;}"
     style += ".daterangepicker.show-calendar .drp-buttons {display: block;}"
     style += ".daterangepicker.auto-apply .drp-buttons {display: none;}"
     style += ".daterangepicker .drp-calendar {display: none; max-width: 270px;}"
     style += ".daterangepicker .drp-calendar.left {padding: 8px 0 8px 8px;}"
     style += ".daterangepicker .drp-calendar.right {padding: 8px;}"
     style += ".daterangepicker .drp-calendar.single .calendar-table {border: none;}"
     style += ".daterangepicker .calendar-table .next span, .daterangepicker .calendar-table .prev span {color: #fff; border: solid black; border-width: 0 2px 2px 0; border-radius: 0; display: inline-block; padding: 3px;}"
     style += ".daterangepicker .calendar-table .next span {transform: rotate(-45deg); -webkit-transform: rotate(-45deg);}"
     style += ".daterangepicker .calendar-table .prev span {transform: rotate(135deg); -webkit-transform: rotate(135deg);}"
     style += ".daterangepicker .calendar-table th, .daterangepicker .calendar-table td {white-space: nowrap; text-align: center; vertical-align: middle; min-width: 32px; width: 32px; height: 24px; line-height: 24px; font-size: 12px; border-radius: 4px; border: 1px solid transparent; white-space: nowrap; cursor: pointer;}"
     style += ".daterangepicker .calendar-table {border: 1px solid #fff; border-radius: 4px; background-color: #fff;}"
     style += ".daterangepicker .calendar-table table {width: 100%; margin: 0; border-spacing: 0; border-collapse: collapse;}"
     style += ".daterangepicker td.available:hover, .daterangepicker th.available:hover {background-color: #eee; border-color: transparent; color: inherit;}"
     style += ".daterangepicker td.week, .daterangepicker th.week {font-size: 80%; color: #ccc;}"
     style += ".daterangepicker td.off, .daterangepicker td.off.in-range, .daterangepicker td.off.start-date, .daterangepicker td.off.end-date {background-color: #fff; border-color: transparent; color: #999;}"
     style += ".daterangepicker td.in-range {background-color: #ebf4f8; border-color: transparent; color: #000; border-radius: 0;}"
     style += ".daterangepicker td.start-date {border-radius: 4px 0 0 4px;}"
     style += ".daterangepicker td.end-date {border-radius: 0 4px 4px 0;}"
     style += ".daterangepicker td.start-date.end-date {border-radius: 4px;}"
     style += ".daterangepicker td.active, .daterangepicker td.active:hover {background-color: #357ebd; border-color: transparent; color: #fff;}"
     style += ".daterangepicker th.month {width: auto;}"
     style += ".daterangepicker td.disabled, .daterangepicker option.disabled {color: #999; cursor: not-allowed; text-decoration: line-through;}"
     style += ".daterangepicker select.monthselect, .daterangepicker select.yearselect {font-size: 12px; padding: 1px; height: auto; margin: 0; cursor: default;}"
     style += ".daterangepicker select.monthselect {margin-right: 2%; width: 56%;}"
     style += ".daterangepicker select.yearselect {width: 40%;}"
     style += ".daterangepicker select.hourselect, .daterangepicker select.minuteselect, .daterangepicker select.secondselect, .daterangepicker select.ampmselect {width: 50px; margin: 0 auto; background: #eee; border: 1px solid #eee; padding: 2px; outline: 0; font-size: 12px;}"
     style += ".daterangepicker .calendar-time {text-align: center; margin: 4px auto 0 auto; line-height: 30px; position: relative;}"
     style += ".daterangepicker .calendar-time select.disabled {color: #ccc; cursor: not-allowed;}"
     style += ".daterangepicker .drp-buttons {clear: both; text-align: right; padding: 8px; border-top: 1px solid #ddd; display: none; line-height: 12px; vertical-align: middle;}"
     style += ".daterangepicker .drp-selected {display: inline-block; font-size: 12px; padding-right: 8px;}"
     style += ".daterangepicker .drp-buttons .btn {margin-left: 8px; font-size: 12px; font-weight: bold; padding: 4px 8px;}"
     style += ".daterangepicker.show-ranges.single.rtl .drp-calendar.left {border-right: 1px solid #ddd;}"
     style += ".daterangepicker.show-ranges.single.ltr .drp-calendar.left {border-left: 1px solid #ddd;}"
     style += ".daterangepicker.show-ranges.rtl .drp-calendar.right {border-right: 1px solid #ddd;}"
     style += ".daterangepicker.show-ranges.ltr .drp-calendar.left {border-left: 1px solid #ddd;}"
     style += ".daterangepicker .ranges {float: none; text-align: left; margin: 0;}"
     style += ".daterangepicker.show-calendar .ranges {margin-top: 8px;}"
     style += ".daterangepicker .ranges ul {list-style: none; margin: 0 auto; padding: 0; width: 100%;}"
     style += ".daterangepicker .ranges li {font-size: 12px; padding: 8px 12px; cursor: pointer;}"
     style += ".daterangepicker .ranges li:hover {background-color: #eee;}"
     style += ".daterangepicker .ranges li.active {background-color: #08c; color: #fff;}"
     style += "@media (min-width: 564px) {"
          style += ".daterangepicker {width: auto;}"
          style += ".daterangepicker .ranges ul {width: 140px;}"
          style += ".daterangepicker.single .ranges ul {width: 100%;}"
          style += ".daterangepicker.single .drp-calendar.left {clear: none;}"
          style += ".daterangepicker.single .ranges, .daterangepicker.single .drp-calendar {float: left;}"
          style += ".daterangepicker {direction: ltr; text-align: left;}"
          style += ".daterangepicker .drp-calendar.left {clear: left; margin-right: 0;}"
          style += ".daterangepicker .drp-calendar.left .calendar-table {border-right: none; border-top-right-radius: 0; border-bottom-right-radius: 0;}"
          style += ".daterangepicker .drp-calendar.right {margin-left: 0;}"
          style += ".daterangepicker .drp-calendar.right .calendar-table {border-left: none; border-top-left-radius: 0; border-bottom-left-radius: 0;}"
          style += ".daterangepicker .drp-calendar.left .calendar-table {padding-right: 8px;}"
          style += ".daterangepicker .ranges, .daterangepicker .drp-calendar {float: left;}"
     style += "}"
     
     style += "@media (min-width: 730px) {"
          style += ".daterangepicker .ranges {width: auto;}"
          style += ".daterangepicker .ranges {float: left;}"
          style += ".daterangepicker.rtl .ranges {float: right;}"
          style += ".daterangepicker .drp-calendar.left {clear: none !important;}"
     style += "}"

     style += '</style>'
     
     $('head').append(style)
}

module.exports = new DateRangePicker()
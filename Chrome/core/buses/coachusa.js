function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}var coachUSABusManager=function(){function e(t,r){_classCallCheck(this,e),this.footprintCore=t,this.settingsProvider=r,this.dataSource="canada",this.validator=new BusValidator("coachcanada"),this.footprintCore.storeBusEmissionData(this.dataSource),this.footprintCore.storeBusSpeedData(this.dataSource)}return _createClass(e,[{key:"setStyle",value:function(e){return e.style.color="black",e}},{key:"insertInDom",value:function(e,t){e=this.setStyle(e),0===t.getElementsByClassName("carbon").length&&t.appendChild(e)}},{key:"update",value:function(){var e=this;0!==document.querySelectorAll(".schedule-table-container table tr").length&&this.validator.querySelectorAll(".schedule-table-container table tr").forEach(function(t){if(t.querySelector("td[nowrap=true]")&&0===t.getElementsByClassName("carbon").length){var r=e.validator.querySelectorAll("td[nowrap=true]",t),a=r[0].textContent.trim().split(":");a[1].indexOf("p")>0&&(a[0]=parseInt(a[0])%12+12),a=a.map(function(e){return parseInt(e)});var n=r[r.length-1].textContent.trim().split(":");n[1].indexOf("p")>0&&(n[0]=parseInt(n[0])%12+12),n=n.map(function(e){return parseInt(e)});var o=new Date(0,0,0,a[0],a[1],0),i=new Date(0,0,0,n[0],n[1],0),l=i.getTime()-o.getTime(),s=l/36e5;s<0&&(s+=24),e.insertInDom(e.footprintCore.getEmissionElementFromDuration(s),e.validator.querySelectorAll("td",t)[e.validator.querySelectorAll("td",t).length-1])}})}}]),e}(),WebsiteManager=coachUSABusManager;
function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,a){return t&&_defineProperties(e.prototype,t),a&&_defineProperties(e,a),e}var BusFootPrintCore=function(){function e(t,a){_classCallCheck(this,e),this.settingsProvider=t,this.helper=a,this.getData=function(e,t){var a=new XMLHttpRequest;a.open("GET",e),a.onreadystatechange=function(e){4==a.readyState&&200==a.status&&t(JSON.parse(a.responseText))},a.send()}}return _createClass(e,[{key:"storeBusEmissionData",value:function(e){this.getData(this.helper.getFilePath("core/resources/busesEmissions.json"),function(t){busEmissionData=t[e]})}},{key:"storeBusSpeedData",value:function(e){this.getData(this.helper.getFilePath("core/resources/buses.json"),function(t){busSpeedData=t[e]})}},{key:"getEmissionElementFromDuration",value:function(e,t){if(busEmissionData&&busSpeedData){t||(t="average");var a=t,n=t;busSpeedData[a]||(a="average"),busEmissionData[n]||(n="average");var r=e*busSpeedData[a],s=r*busEmissionData[n];return this.createHTMLElement(s)}}},{key:"getEmissionElementFromDistance",value:function(e,t){if(busEmissionData&&busSpeedData){t||(t="average");var a=t;busEmissionData[a]||(a="average");var n=e*busEmissionData[a];return this.createHTMLElement(n)}}},{key:"createHTMLElement",value:function(e){var t=document.createElement("div"),a=this.helper.getFilePath("pages/knowMore.html");return t.setAttribute("id","carbon-footprint-label"),t.innerHTML="<a href="+a+" target='_blank' title='footprint' class='carbon' id='carbon'>"+this.footprintToString(e)+CarbonFootprintCommon.prototype.getSVG(),t.querySelector("a").addEventListener("click",function(e){e.stopPropagation()}),t}},{key:"footprintToString",value:function(e){var t=" g";return e>=1e3&&(t=" kg",e/=1e3),""+(e=e.toFixed(1))+t+" CO<sub>2</sub> per person"}}]),e}(),CarbonFootprintCore=BusFootPrintCore,busEmissionData,busSpeedData;
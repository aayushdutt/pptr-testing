function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}var MapQuestMapsManager=function(){function e(t,i){_classCallCheck(this,e),this.footprintCore=t,this.settingsProvider=i,this.subtree=!1;var r=this;this.validator=new MapsValidator("mapquest"),document.getElementsByTagName("body")[0].addEventListener("click",function(e){"routes"===e.target.parentNode.classList[1]&&"LI"===e.target.tagName&&r.update()})}return _createClass(e,[{key:"isDriving",value:function(){var e=document.getElementsByClassName("transport-modes")[0];if(e){return"car"==e.classList[1].substring(0,3)}return!1}},{key:"getDistanceString",value:function(){var e=document.querySelector(".route-selection .distance");if(e){return e.innerText}return 0}},{key:"convertDistance",value:function(e){if(e){var t=e.match(/[0-9,.]+/)[0],i=e.match(/[a-z,A-Z]+/)[0];return this.footprintCore.getDistanceFromStrings(t,i)}}},{key:"insertFootprintElement",value:function(e){if(e.id="footprintDiv",document.getElementById("footprintDiv")){var t=this.validator.getById("footprintDiv");t.parentNode.removeChild(t)}var i=this.validator.querySelector(".route-selection .view-directions");e.setAttribute("style","padding:3px 15px;display:inline-block;position:relative;"),this.validator.querySelector(".via-area").insertBefore(e,i)}},{key:"insertTravelCostElement",value:function(e){if(e.id="travelCostDiv",document.getElementById("travelCostDiv")){var t=this.validator.getById("travelCostDiv");t.parentNode.removeChild(t)}var i=this.validator.querySelector(".route-selection .view-directions");e.setAttribute("style","padding:3px 15px;display:inline-block;position:relative;"),this.validator.querySelector(".via-area").insertBefore(e,i)}},{key:"update",value:function(){if(this.isDriving()){var e=this.getDistanceString();if(this.validator.isString(e),e){var t=this.convertDistance(e);this.validator.isNumber(t),this.insertFootprintElement(this.footprintCore.createFootprintElement(t)),this.settingsProvider.showTravelCost()&&this.insertTravelCostElement(this.footprintCore.createTravelCostElement(t))}}}}]),e}(),WebsiteManager=MapQuestMapsManager;
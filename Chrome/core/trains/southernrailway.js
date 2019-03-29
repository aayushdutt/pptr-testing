function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}var southernRailManager=function(){function e(t,r){_classCallCheck(this,e),this.footprintCore=t,this.settingsProvider=r,this.dataSource="europe",this.MODE=["uk"],this.stations={arrive:"",depart:""},this.validator=new TrainsValidator("southernrailway"),this.footprintCore.storeDataSource(this.dataSource),this.footprintCore.storeTrainSpeed("europe")}return _createClass(e,[{key:"setStyle",value:function(e){return e.style.fontSize="small",e}},{key:"insertInDom",value:function(e,t){e=this.setStyle(e),t=this.validator.querySelector(".service-item__duration",t),0===t.getElementsByClassName("carbon").length&&t.appendChild(e)}},{key:"update",value:function(){var e=this;0!==document.querySelectorAll(".display__row").length&&this.validator.querySelectorAll(".display__row").forEach(function(t){if(0===t.getElementsByClassName("carbon").length){var r,a="southernrailway",n=e.validator.querySelector(".duration",t).textContent.trim().split(" ");r=1===n.length?parseInt(n[0],10)/60:parseInt(n[0],10)+parseInt(n[1],10)/60,trainSpeedData[a]||(a=trainSpeedData.uk?"uk":"average"),distanceBetween=trainSpeedData[a]*r,e.insertInDom(e.footprintCore.getEmission([e.MODE]),t)}})}}]),e}(),WebsiteManager=southernRailManager;
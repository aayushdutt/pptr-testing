function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,a){return t&&_defineProperties(e.prototype,t),a&&_defineProperties(e,a),e}var mytrainticketManager=function(){function e(t,a){_classCallCheck(this,e),this.footprintCore=t,this.settingsProvider=a,this.dataSource="europe",this.MODE=["mytrainticket"],this.validator=new TrainsValidator("mytrainticket"),this.footprintCore.storeDataSource(this.dataSource),this.footprintCore.storeTrainSpeed("europe")}return _createClass(e,[{key:"setStyle",value:function(e){return e.style.display="inline",e.style["margin-left"]="1rem",e.style["padding-top"]="0",e}},{key:"insertInDom",value:function(e){e=this.setStyle(e),element=this.validator.querySelector("span[data-test=tab-train-container]"),0===element.getElementsByClassName("carbon").length&&element.appendChild(e)}},{key:"update",value:function(){if(0!==document.querySelectorAll("span[data-test=tab-train-disabled]").length){var e=this.validator.querySelector("span[data-test=tab-train-disabled]").textContent.trim().split(" "),t=parseInt(e[0],10)+parseInt(e[1],10)/60;distanceBetween=trainSpeedData.uk*t,this.insertInDom(this.footprintCore.getEmission([this.MODE]))}}}]),e}(),WebsiteManager=mytrainticketManager;
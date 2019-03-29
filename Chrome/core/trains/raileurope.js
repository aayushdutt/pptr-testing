function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}var railEuropeManager=function(){function e(t,r){_classCallCheck(this,e),this.footprintCore=t,this.settingsProvider=r,this.subtree=!0,this.dataSource="europe",this.stations={arrive:"",depart:""},this.validator=new TrainsValidator("raileurope"),this.footprintCore.storeTrainSpeed("europe"),this.footprintCore.storeDataSource(this.dataSource)}return _createClass(e,[{key:"setStyle",value:function(e){return e.style.fontSize="small",e}},{key:"insertInDom",value:function(e,t){0===t.getElementsByClassName("carbon").length&&(e=this.setStyle(e),t=this.validator.querySelector(".train-specs",t),0===t.getElementsByClassName("carbon").length&&t.appendChild(e))}},{key:"update",value:function(){var e=this;0!==document.querySelectorAll(".row.js-solution").length&&this.validator.querySelectorAll(".row.js-solution").forEach(function(t){if(0==t.getElementsByClassName("carbon").length){var r=0;e.validator.querySelectorAll(".segment-line",t).forEach(function(t){var a=e.validator.querySelector(".spec.spec-duration",t).textContent.trim().split(" "),n=parseInt(a[1],10)/60+parseInt(a[0],10),i=e.validator.querySelector(".spec.spec-carrier",t).textContent.trim(),o=!0;for(trainTestString in trainSpeedData)if(i.split(" ").forEach(function(t){if(e.footprintCore.fuzzySearch(t.toLowerCase(),trainTestString))return o=!1,void(distanceBetween=n*trainSpeedData[trainTestString])}),!o)break;o&&(distanceBetween=trainSpeedData.average*n),r+=trainData.average*distanceBetween}),e.insertInDom(e.footprintCore.createHTMLElement(r),t)}})}}]),e}(),WebsiteManager=railEuropeManager;
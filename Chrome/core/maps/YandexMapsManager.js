function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}var YandexMapsManager=function(){function e(t,i){_classCallCheck(this,e),this.footprintCore=t,this.settingsProvider=i,this.subtree=!0,this.validator=new MapsValidator("yandex")}return _createClass(e,[{key:"isDriving",value:function(){return!!document.getElementsByClassName("route-list-view _travel-mode_auto")[0]}},{key:"isTransit",value:function(){return!!document.getElementsByClassName("route-list-view _travel-mode_masstransit")[0]}},{key:"getAllDrivingRoutes",value:function(){var e=[];if(this.isDriving())for(var t=document.getElementsByClassName("route-view"),i=t.length-1;i>=0;i--)t[i].childNodes.length>0&&e.push(t[i]);return e}},{key:"getAllTransitRoutes",value:function(){var e=[];if(this.isTransit())for(var t=document.getElementsByClassName("route-view"),i=t.length-1;i>=0;i--)t[i].childNodes.length>0&&e.push(t[i]);return e}},{key:"getDistanceString",value:function(e){return this.validator.getByClass("driving-route-view__route-title-secondary",e)[0].innerText}},{key:"getTimeString",value:function(e){var t=this.validator.getByClass("masstransit-route-view__route-title-primary",e)[0].innerHTML;return t=" "+t}},{key:"convertDistance",value:function(e){if(e){var t=e.split(/\s/),i=t[0],r=t[1];return this.footprintCore.getDistanceFromStrings(i,r)}}},{key:"convertTime",value:function(e){if(e){e=e.replace(/&nbsp;/gi," ");var t=/ (\w*) d/.exec(e),i=/ (\w*) h/.exec(e),r=/ (\w*) m/.exec(e);return i=i?parseFloat(i[1]):0,r&&(r=parseFloat(r[1]),i+=r/60),t&&(t=parseFloat(t[1]),i+=24*t),i}}},{key:"insertFootprintElement",value:function(e,t){this.isDriving()?className="driving-route-view":this.isTransit()&&(className="masstransit-route-view"),0===e.getElementsByClassName("carbon").length&&this.validator.getByClass(className,e)[0].appendChild(t)}},{key:"insertTravelCostElement",value:function(e,t){0===e.getElementsByClassName("travelCost").length&&this.validator.getByClass("driving-route-view",e)[0].appendChild(t)}},{key:"update",value:function(){for(var e=this.getAllDrivingRoutes(),t=this.getAllTransitRoutes(),i=0;i<e.length;i++){var r=this.getDistanceString(e[i]);this.validator.isString(r);var n=this.convertDistance(r);this.validator.isNumber(n),this.insertFootprintElement(e[i],this.footprintCore.createFootprintElement(n)),this.settingsProvider.showTravelCost()&&this.insertTravelCostElement(e[i],this.footprintCore.createTravelCostElement(n))}for(i=0;i<t.length;i++){var s=this.getTimeString(t[i]);this.validator.isString(s);var a=this.convertTime(s);this.validator.isNumber(a),this.insertFootprintElement(t[i],this.footprintCore.createPTFootprintElement(a))}}}]),e}(),WebsiteManager=YandexMapsManager;
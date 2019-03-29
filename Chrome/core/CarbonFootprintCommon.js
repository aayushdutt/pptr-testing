function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),e}var CarbonFootprintCommon=function(){function e(){_classCallCheck(this,e),this.treeGrowthPerYear=8.3}return _createClass(e,[{key:"computeTrees",value:function(e){var r=e/this.treeGrowthPerYear;return r=Math.round(100*r)/100}},{key:"treesToString",value:function(e){return e>1?"You will need "+Math.round(e)+" tropical trees growing for 1 year to capture that much CO₂! (or "+Math.round(12*e)+" trees growing for 1 month, or "+Math.round(365*e)+" trees growing for 1 day)":12*e>1?"You will need "+Math.round(12*e)+" tropical trees growing for 1 month to capture that much CO₂! (or "+Math.round(365*e)+" trees growing for 1 day)":365*e>1?"You will need "+Math.round(365*e)+" tropical trees growing for 1 day to capture that much CO₂!":"Your Carbon Emission is almost nil. Great going!"}},{key:"getSVG",value:function(){return'<svg id="quest_mark_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92 92"><path d="M45.4 0C20 0.3-0.3 21.2 0 46.6c0.3 25.4 21.2 45.7 46.6 45.4 25.4-0.3 45.7-21.2 45.4-46.6C91.7 20 70.8-0.3 45.4 0zM45.3 74l-0.3 0c-3.9-0.1-6.7-3-6.6-6.9 0.1-3.8 2.9-6.5 6.7-6.5l0.2 0c4 0.1 6.7 3 6.6 6.9C51.9 71.3 49.1 74 45.3 74zM61.7 41.3c-0.9 1.3-2.9 2.9-5.5 4.9l-2.8 1.9c-1.5 1.2-2.5 2.3-2.8 3.4 -0.3 0.9-0.4 1.1-0.4 2.9l0 0.5H39.4l0-0.9c0.1-3.7 0.2-5.9 1.8-7.7 2.4-2.8 7.8-6.3 8-6.4 0.8-0.6 1.4-1.2 1.9-1.9 1.1-1.6 1.6-2.8 1.6-4 0-1.7-0.5-3.2-1.5-4.6 -0.9-1.3-2.7-2-5.3-2 -2.6 0-4.3 0.8-5.4 2.5 -1.1 1.7-1.6 3.5-1.6 5.4v0.5H27.9l0-0.5c0.3-6.8 2.7-11.6 7.2-14.5C37.9 18.9 41.4 18 45.5 18c5.3 0 9.9 1.3 13.4 3.9 3.6 2.6 5.4 6.5 5.4 11.6C64.4 36.3 63.5 38.9 61.7 41.3z" /></svg>'}}]),e}();
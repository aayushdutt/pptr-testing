function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),t}function _possibleConstructorReturn(t,e){return!e||"object"!==_typeof(e)&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var BusValidator=function(t){function e(t){var r;return _classCallCheck(this,e),r=_possibleConstructorReturn(this,_getPrototypeOf(e).call(this,t,"bus")),r.server=new Server,r.website=t,r}return _inherits(e,t),_createClass(e,[{key:"verifyBus",value:function(t){return"string"==typeof t&&0!==t.length||(this.counterMeasure("invalid bus type"),!1)}},{key:"verifyStation",value:function(t){return"string"==typeof t&&0!==t.length||(this.counterMeasure("invalid stop "+t),!1)}},{key:"verifyList",value:function(t){for(var e=0,r=t.length;e<r;e++){for(var o=0,n=t[e].mode.length;o<n;o++)this.verifyBus(t[e].mode[o]);this.verifyStation(t[e].arrive),this.verifyStation(t[e].depart)}}}]),e}(BasicValidator);
function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,a){return t&&_defineProperties(e.prototype,t),a&&_defineProperties(e,a),e}var hipmunkManager=function(){function e(t,a){_classCallCheck(this,e),this.core=t,this.settingsProvider=a,this.validator=new FlightsValidator("hipmunk")}return _createClass(e,[{key:"getList",value:function(){var e,t,a=document.getElementsByClassName("flight-routing-bar"),i=[],r=[],n=[];a.length&&(e=this.validator.getByClass("flight-tab-chart-header__city-name m-left")[0].innerText,t=this.validator.getByClass("flight-tab-chart-header__city-name m-right")[0].innerText);for(var s=0;s<a.length;s++){r=a[s].getElementsByClassName("flight-routing-bar__layover"),n=[];for(var l=0;l<r.length;l++)n.push(r[l].innerText);i.push({depart:e,arrive:t,stops:n,aircraft:"A380"})}return this.validator.verifyList(i),i}},{key:"insertInDom",value:function(e){if(e.length)for(var t=this.validator.getByClass("flight-tab-itin__info-row"),a=this.validator.getByClass("flight-tab-itin g-no-select js-itin m-roundtrip m-group-0"),i=[],r=0;r<t.length;r++)a[r].style.height="95px",i=t[r],t[r].getElementsByClassName("carbon").length<1&&i.appendChild(this.core.createMark(e[r].co2Emission))}}]),e}(),WebsiteManager=hipmunkManager;
function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}var travelocityManager=function(){function e(t,i){_classCallCheck(this,e),this.core=t,this.settingsProvider=i,this.validator=new FlightsValidator("travelocity")}return _createClass(e,[{key:"getList",value:function(){for(var e,t,i=document.getElementsByClassName("flight-module segment offer-listing"),a=[],r=[],n=[],s=0;s<i.length;s++)details=this.validator.getByClass("grid-container standard-padding",i[s]),r=this.validator.querySelector('div[data-test-id="flight-info"]',details[0]),e=this.validator.getChildNode([2],r).textContent.trim(),t=this.validator.getChildNode([r.childNodes.length-1],r).textContent.trim().split(" ").slice(-1).join(""),n=[],n=r.getElementsByClassName("stops-truncated").length>0?r.getElementsByClassName("stops-truncated")[0].innerText.split(" - "):this.validator.getChildNode([3],r).innerText.trim()?this.validator.getChildNode([3],r).innerText.trim().split(" ").slice(-1):[],e=e.split(" ")[0],a.push({depart:e,arrive:t,stops:n,aircraft:"A380"});return this.validator.verifyList(a),a}},{key:"insertInDom",value:function(e){if(e.length)for(var t=this.validator.getByClass("flight-module segment offer-listing"),i=[],a=0;a<t.length;a++)i=t[a],t[a].getElementsByClassName("carbon").length<1&&i.appendChild(this.core.createMark(e[a].co2Emission,0))}}]),e}(),WebsiteManager=travelocityManager;
function initMap(){var t=document.getElementById("map-type").value;$("#map-container").html('<div id="map"></div>');var o=L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy;  <a  href="http://openstreetmap.org/copyright">OpenStreetMap</a>  contributors'}),a="http://tiles.aqicn.org/tiles/"+t+"/{z}/{x}/{y}.png?token=99a82d982d2bbcacc291962fba93d7535029ba17",e=L.tileLayer(a,{attribution:'Air  Quality  Tiles  &copy;  <a  href="http://waqi.info">waqi.info</a>'}),i=L.map("map");navigator.geolocation?navigator.geolocation.getCurrentPosition(function(t){var a={lat:t.coords.latitude,lng:t.coords.longitude};i.setView([a.lat,a.lng],11),i.addLayer(o).addLayer(e)}):handleLocationError(!1),$("#tileModal1").on("show.bs.modal",function(){setTimeout(function(){i.invalidateSize()},200)})}function handleLocationError(t){$("#map").append('<p class="geolocation-failure">Error: The Geolocation service failed. Your browser doesn\'t support geolocation.</p>')}function loadMapsAPI(){initMap(),document.getElementById("map-type").onchange=initMap}window.onload=loadMapsAPI;
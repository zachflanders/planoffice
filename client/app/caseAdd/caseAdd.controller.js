'use strict';
(function(){

class CaseAddComponent {
  constructor($scope, $http) {
    //$scope.map = L.map('selectmap');

    mapboxgl.accessToken = 'pk.eyJ1IjoiemFjaGZsYW5kZXJzIiwiYSI6Im5PQWUydWMifQ.K3IgstPvVhP6ZDoXsKNzJQ';
    var map = new mapboxgl.Map({
      container: 'selectmap',
      style: 'mapbox://styles/mapbox/satellite-streets-v9',
      center: [-94.64, 39.118],
      zoom: 13
    });
    map.on('load', function () {
      map.addSource('parcels', {
          type: 'vector',
          url: 'mapbox://zachflanders.a6kj9xg4'
      });
      map.addLayer({
          "id": "parcels",
          "type": "fill",
          "source": "parcels",
          "source-layer": "parcels-7ttpwc",
          "paint": {
              "fill-opacity":0
          }
      });
      map.addLayer({
          "id": "parcels-highlight",
          "type": "fill",
          "source": "parcels",
          "source-layer": "parcels-7ttpwc",
          "paint": {
              "fill-opacity":.6,
              "fill-color": '#FFFF00'
          },
          "filter": ["in", "PARCEL_NBR", ""]
      });
      map.addLayer({
         "id": "parcels-line",
         "type": "line",
         "source": "parcels",
         "source-layer": "parcels-7ttpwc",
         "layout": {
             "line-join": "round",
             "line-cap": "round"
         },
         "paint": {
             "line-color": "#ff69b4",
             "line-width": 1
         }
      });
    map.addControl(new mapboxgl.NavigationControl());

});
    this.case = {}
    var accessToken = 'pk.eyJ1IjoiemFjaGZsYW5kZXJzIiwiYSI6Im5PQWUydWMifQ.K3IgstPvVhP6ZDoXsKNzJQ';
    $scope.locate = function(address){
      console.log(address);
      $http.get('https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+' Kansas+City+KS.json?access_token=pk.eyJ1IjoiemFjaGZsYW5kZXJzIiwiYSI6Im5PQWUydWMifQ.K3IgstPvVhP6ZDoXsKNzJQ').success(function(data){
        console.log(data);
        var center = data.features[0].center;
        console.log(center);
        map.flyTo({
          center: center,
          zoom: 18
        });
      });
    }
    map.on('click', function (e) {
      var features = map.queryRenderedFeatures(e.point);
      console.log(JSON.stringify(features));
      var filter = features.reduce(function(memo, feature) {
                memo.push(feature.properties.PARCEL_NBR);
                return memo;
            }, ['in', 'PARCEL_NBR']);

      map.setFilter("parcels-highlight", filter);

});
    /*
    var googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
        maxZoom: 20,
        subdomains:['mt0','mt1','mt2','mt3']
      }),
      lightmap = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png', {
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
      }),
      darkmap = L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png', {
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
      }),
      googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
          maxZoom: 20,
          subdomains:['mt0','mt1','mt2','mt3']
      }),
      googleTerrain = L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',{
          maxZoom: 20,
          subdomains:['mt0','mt1','mt2','mt3']
      })
      var parcels = L.tileLayer("https://api.mapbox.com/styles/v1/zachflanders/cix2442qe001o2qp4vnrrgktv/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiemFjaGZsYW5kZXJzIiwiYSI6Im5PQWUydWMifQ.K3IgstPvVhP6ZDoXsKNzJQ");
      parcels.setZIndex(2);
      googleHybrid.setZIndex(1);
      $scope.map.addLayer(parcels);
      $scope.map.addLayer(googleHybrid, true);
      $scope.map.setView([39.118,-94.73],12);
    var basemaps = {
      "Light Basemap": lightmap,
      "Dark Basemap": darkmap,
      "Google Satellite": googleSat,
      "Google Satellite with Labels": googleHybrid,
      "Google Terrain": googleTerrain,
    };
    var overlays = {
      "Parcels": parcels
    }

    L.control.layers(basemaps,overlays).addTo($scope.map);
    */


  }
}

angular.module('wycokckApp')
  .component('caseAdd', {
    templateUrl: 'app/caseAdd/caseAdd.html',
    controller: CaseAddComponent
  });

})();

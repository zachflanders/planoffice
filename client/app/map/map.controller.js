'use strict';
(function(){

class MapComponent {
  constructor($scope, $http) {
    $scope.map = L.map('allCasesMap');
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
      });
    $scope.map.addLayer(lightmap);
    var basemaps = {
      "Light Basemap": lightmap,
      "Dark Basemap": darkmap,
      "Google Satellite": googleSat,
      "Google Satellite with Labels": googleHybrid,
      "Google Terrain": googleTerrain,
    };

    L.control.layers(basemaps).addTo($scope.map);
    $scope.map.setView([39.118,-94.73],12);
    $http.get('/api/cases').then(response => {
      var polygons = L.layerGroup();
      response.data.forEach(function(entry){
        var latlngs = [];
        if(entry.geometry[0]){
          entry.geometry[0][0].forEach(function(item){
            latlngs.push([item[1],item[0]]);
          });
        };
        polygons.addLayer(L.polygon(latlngs));
      });
      polygons.addTo($scope.map);

    });
  }
}

angular.module('wycokckApp')
  .component('map', {
    templateUrl: 'app/map/map.html',
    controller: MapComponent
  });

})();

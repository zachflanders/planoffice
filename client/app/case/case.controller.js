'use strict';
(function(){

class CaseComponent {
  constructor($stateParams, $http, $scope) {
    var id = $stateParams.id;
    $scope.map = L.map('map');
    $http.get('/api/cases/'+id).then(response => {
      this.case = response.data;
      console.log(response.data);
      var latlngs = [];
      response.data.geometry[0][0].forEach(function(item){
        console.log(item);
        latlngs.push([item[1],item[0]]);
      });
      var polygon = L.polygon(latlngs);
      polygon.addTo($scope.map);
      $scope.map.fitBounds(polygon.getBounds());
    });
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
    $scope.map.addLayer(googleHybrid);
    var basemaps = {
      "Light Basemap": lightmap,
      "Dark Basemap": darkmap,
      "Google Satellite": googleSat,
      "Google Satellite with Labels": googleHybrid,
      "Google Terrain": googleTerrain,
    };

    L.control.layers(basemaps).addTo($scope.map);
  }

}

angular.module('wycokckApp')
  .component('case', {
    templateUrl: 'app/case/case.html',
    controller: CaseComponent
  });

})();

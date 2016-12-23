'use strict';

angular.module('wycokckApp.cases', [])
  .factory('cases', function ($http) {
    this.$http = $http;

    return {
      all: function () {
        return $http.get('api/cases/');
      },
      get: function(id){
        return $http.get('/api/cases/' + id);
      },
      create: function(data){
        return $http.post('api/cases/', data );
      },
      update: function(id, data){
        return $http.put('api/cases/' + id, data );
      },
      delete: function(id){
        return $http.delete('api/cases/' + id);
      }
    };
  });

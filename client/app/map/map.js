'use strict';

angular.module('wycokckApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('map', {
        url: '/map',
        template: '<map></map>'
      });
  });

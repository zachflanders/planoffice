'use strict';

angular.module('wycokckApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('caseEdit', {
        url: '/case/:id/edit',
        template: '<case-edit></case-edit>'
      });
  });

'use strict';

angular.module('wycokckApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('caseAdd', {
        url: '/case/add',
        template: '<case-add></case-add>'
      })
      .state('case', {
        url: '/case/:id',
        template: '<case></case>'
      });
  });

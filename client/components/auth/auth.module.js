'use strict';

angular.module('wycokckApp.auth', [
  'wycokckApp.constants',
  'wycokckApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });

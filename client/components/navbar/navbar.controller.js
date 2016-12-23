'use strict';

class NavbarController {
  //start-non-standard
  menu = [
    {
      'title':'Dashboard',
      'state':'dashboard'
    },
    {
    'title': 'All Cases',
    'state': 'main'
    },
    {
      'title': 'Map',
      'state': 'map'
    }
];

  isCollapsed = true;
  //end-non-standard

  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }
}

angular.module('wycokckApp')
  .controller('NavbarController', NavbarController);

'use strict';

(function() {

class MainController {

  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
    this.cases=[];
    this.$http.get('/api/cases').then(response => {
      this.cases = response.data;
      this.socket.syncUpdates('case', this.cases);
    });
    this.sortType     = 'judgement_date'; // set the default sort type
    this.sortReverse  = true;  // set the default sort order
    this.search   = '';

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('case');
    });
  }


}

angular.module('wycokckApp')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController
  });

})();

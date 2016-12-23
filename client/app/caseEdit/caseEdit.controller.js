'use strict';
(function(){

class CaseEditComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('wycokckApp')
  .component('caseEdit', {
    templateUrl: 'app/caseEdit/caseEdit.html',
    controller: CaseEditComponent
  });

})();

'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var casesCtrlStub = {
  index: 'casesCtrl.index',
  show: 'casesCtrl.show',
  create: 'casesCtrl.create',
  update: 'casesCtrl.update',
  destroy: 'casesCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var casesIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './cases.controller': casesCtrlStub
});

describe('Cases API Router:', function() {

  it('should return an express router instance', function() {
    casesIndex.should.equal(routerStub);
  });

  describe('GET /api/cases', function() {

    it('should route to cases.controller.index', function() {
      routerStub.get
        .withArgs('/', 'casesCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/cases/:id', function() {

    it('should route to cases.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'casesCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/cases', function() {

    it('should route to cases.controller.create', function() {
      routerStub.post
        .withArgs('/', 'casesCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/cases/:id', function() {

    it('should route to cases.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'casesCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/cases/:id', function() {

    it('should route to cases.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'casesCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/cases/:id', function() {

    it('should route to cases.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'casesCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});

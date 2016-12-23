'use strict';

var app = require('../..');
import request from 'supertest';

var newCases;

describe('Cases API:', function() {

  describe('GET /api/cases', function() {
    var casess;

    beforeEach(function(done) {
      request(app)
        .get('/api/cases')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          casess = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      casess.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/cases', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/cases')
        .send({
          name: 'New Cases',
          info: 'This is the brand new cases!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newCases = res.body;
          done();
        });
    });

    it('should respond with the newly created cases', function() {
      newCases.name.should.equal('New Cases');
      newCases.info.should.equal('This is the brand new cases!!!');
    });

  });

  describe('GET /api/cases/:id', function() {
    var cases;

    beforeEach(function(done) {
      request(app)
        .get('/api/cases/' + newCases._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          cases = res.body;
          done();
        });
    });

    afterEach(function() {
      cases = {};
    });

    it('should respond with the requested cases', function() {
      cases.name.should.equal('New Cases');
      cases.info.should.equal('This is the brand new cases!!!');
    });

  });

  describe('PUT /api/cases/:id', function() {
    var updatedCases;

    beforeEach(function(done) {
      request(app)
        .put('/api/cases/' + newCases._id)
        .send({
          name: 'Updated Cases',
          info: 'This is the updated cases!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedCases = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedCases = {};
    });

    it('should respond with the updated cases', function() {
      updatedCases.name.should.equal('Updated Cases');
      updatedCases.info.should.equal('This is the updated cases!!!');
    });

  });

  describe('DELETE /api/cases/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/cases/' + newCases._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when cases does not exist', function(done) {
      request(app)
        .delete('/api/cases/' + newCases._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});

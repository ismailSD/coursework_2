var assert = require('assert');
var expect    = require("chai").expect;
var request = require('request');
var server = require('../server.js');

describe('node hello world console app', function() {
  describe('#indexOf()', function() {
    it("returns status 200", function(done) {
      expect(server.status).to.equal(200);
      done();
    });
  });
});

var assert = require('assert');
var expect    = require("chai").expect;
var server = require('../server.js');
describe('node hello world console app', function() {
  describe('#indexOf()', function() {
    it("returns status 200", function(done) {
        
      request(server.url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });
});

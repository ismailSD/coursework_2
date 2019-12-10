var assert = require('assert');
var server = require('../server.js');

describe('node hello world console app', function() {
  describe('#indexOf()', function() {
    it('it should print status code of 200', function() {
        var code = server.status;
      assert.equal(code).to.equal(200);
    });
  });
});

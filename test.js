var expect  = require('chai').expect;
var request = require('request');

it('console log message', function(done) {
    request('http://localhost:8080' , function(err, res, message) {
        expect(body).to.equal('Hello World');
        done();
    });
});

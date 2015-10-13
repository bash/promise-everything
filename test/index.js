/**
 * (c) 2015 Ruben Schmidmeister <ruby@fog.im>
 */

var assert = require('assert'),
    call = require('../index');

var failingNodeFunction = function (callbackFn) {
    setTimeout(function () {
        callbackFn('some error');
    });
};

var successfulNodeFunction = function (callbackFn) {
    setTimeout(function () {
        callbackFn(null, 'some data');
    });
};

describe('.call()', function () {
    it('rejects if the fn argument is not a function', function (done) {
        call('asdf').catch(function () {
            done();
        });
    });

    it('rejects if the callback is invoked with an error', function (done) {
        call(failingNodeFunction).catch(function (err) {
            assert.equal(err, 'some error');
            done();
        });
    });

    it('pipes the arguments', function(done){
        return call(function(a, b, c){
            assert.equal(a, 10);
            assert.equal(b, 20);
            assert.equal(c, 30);
            done();
        }, 10, 20, 30);
    });

    it('fulfils otherwise', function (done) {
        call(successfulNodeFunction).then(function (value) {
            assert.equal(value, 'some data');
            done();
        });
    });
});

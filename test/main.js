var nodeunit = require('../')
  , should = require('should')
  , gutil = require('gulp-util');

require('mocha');

describe('gulp-nodeunit-runner', function() {
  describe('nodeunit()', function() {
    it('file should pass through');
    it('should pass through streams');
    it('should run nodeunit test and pass');
    it('should run nodeunit test and fail');
    it('should run the test only once even if called in succession');
  });
});
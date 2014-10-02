'use strict';

var nodeunit = require('../');
var should = require('should');
var gutil = require('gulp-util');
var File = require('gulp-util').File;
var path = require('path');

require('mocha');

describe('gulp-nodeunit-runner', function() {
  describe('nodeunit()', function() {
    it('file should pass through', function (done) {
      var stream = nodeunit();

      var fakeFile = new File({
        cwd: '/home/contra/',
        base: '/home/contra/test',
        path: '/home/contra/test/test.js',
        contents: new Buffer('Hello')
      });

      stream.on('data', function(newFile){
        should.exist(newFile);
        should.exist(newFile.path);
        should.exist(newFile.relative);
        should.exist(newFile.contents);

        var newFilePath = path.resolve(newFile.path);
        var expectedFilePath = path.resolve('/home/contra/test/test.js');
        newFilePath.should.equal(expectedFilePath);

        newFile.relative.should.equal('test.js');
        String(newFile.contents).should.equal('Hello');
        Buffer.isBuffer(newFile.contents).should.equal(true);
        done();
      });
      stream.write(fakeFile);
      stream.end();
    });
    it('should trigger error for streams');
    it('should run nodeunit test and pass');
    it('should run nodeunit test and fail');
    it('should run the test only once even if called in succession');
  });
});

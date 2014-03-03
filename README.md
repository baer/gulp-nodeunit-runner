(PLUGIN AUTHOR: Please read [Plugin README conventions](https://github.com/wearefractal/gulp/wiki/Plugin-README-Conventions), then delete this line)

# gulp-nodeunit-runner
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]  [![Coverage Status][coveralls-image]][coveralls-url] [![Dependency Status][depstat-image]][depstat-url]

> nodeunit-runner plugin for [gulp](https://github.com/wearefractal/gulp)

## Usage

First, install `gulp-nodeunit-runner` as a development dependency:

```shell
npm install --save-dev gulp-nodeunit-runner
```

Then, add it to your `gulpfile.js`:

```javascript
var nodeunit-runner = require("gulp-nodeunit-runner");

gulp.src("./src/*.ext")
	.pipe(nodeunit-runner({
		msg: "Hello Gulp!"
	}))
	.pipe(gulp.dest("./dist"));
```

## API

### nodeunit-runner(options)

#### options.msg
Type: `String`  
Default: `Hello World`

The message you wish to attach to file.


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/gulp-nodeunit-runner
[npm-image]: https://badge.fury.io/js/gulp-nodeunit-runner.png

[travis-url]: http://travis-ci.org/baer/gulp-nodeunit-runner
[travis-image]: https://secure.travis-ci.org/baer/gulp-nodeunit-runner.png?branch=master

[coveralls-url]: https://coveralls.io/r/baer/gulp-nodeunit-runner
[coveralls-image]: https://coveralls.io/repos/baer/gulp-nodeunit-runner/badge.png

[depstat-url]: https://david-dm.org/baer/gulp-nodeunit-runner
[depstat-image]: https://david-dm.org/baer/gulp-nodeunit-runner.png

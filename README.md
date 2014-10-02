<h1 align="center">gulp-nodeunit-runner</h1>

<p align="center">
  <a title='Build Status' href="https://npmjs.org/package/gulp-nodeunit-runner">
    <img src='http://img.shields.io/npm/v/gulp-nodeunit-runner.svg' />
  </a>
  <a href='https://david-dm.org/baer/gulp-nodeunit-runner'>
    <img src='https://david-dm.org/baer/gulp-nodeunit-runner.svg' alt='Chat' />
  </a>
</p>

<h4 align="center">
  nodeunit-runner plugin for <a href='http://gulpjs.com/'>gulp</a>
</h4>

## Usage

First, install `gulp-nodeunit-runner` as a development dependency:

```shell
npm install --save-dev gulp-nodeunit-runner
```

Then, add it to your `gulpfile.js`:

```javascript
var nodeunit-runner = require("gulp-nodeunit-runner");

gulp.src("./src/*.ext")
	.pipe(nodeunit-runner());
```

## API

### nodeunit-runner(options)

#### options.reporter
Type: `String`  
Default: `default`

The nodeunit reporter to use. See [nodeunit](https://github.com/caolan/nodeunit) documentation for a complete list.

#### options.reporterOptions
Type: `Object`  
Default: reporter defaults

Nodeunit provides a set of callbacks that will be executed during test execution. These are used by the reporter but can be overridden using this option. See [nodeunit](https://github.com/caolan/nodeunit) documentation for a complete list.

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

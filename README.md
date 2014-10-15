# grunt-freeport

[![npm](http://img.shields.io/npm/v/grunt-freeport.svg?style=flat-square)](https://www.npmjs.org/package/grunt-freeport)
[![travis](http://img.shields.io/travis/deepsweet/grunt-freeport.svg?style=flat-square)](https://travis-ci.org/deepsweet/grunt-freeport)
[![climate](http://img.shields.io/codeclimate/github/deepsweet/grunt-freeport.svg?style=flat-square)](https://codeclimate.com/github/deepsweet/grunt-freeport/code)
[![deps](http://img.shields.io/david/deepsweet/grunt-freeport.svg?style=flat-square)](https://david-dm.org/deepsweet/grunt-freeport)
[![gratipay](http://img.shields.io/gratipay/deepsweet.svg?style=flat-square)](https://gratipay.com/deepsweet/)

Grunt task to get a free port number on localhost from specified range. Uses [node-portscanner](https://github.com/baalexander/node-portscanner).

## Install

```sh
$ npm i -S grunt-freeport
```

## Usage

```javascript
grunt.initConfig({
    freeport: {
        sometask: {
            options: {
                start: 8080,
                end: 8089
            }
        }
    },
    sometask: {
        options: {
            port: '<%= freeport.sometask %>'
        }
    }
});

// common, start using `load-grunt-tasks`
grunt.loadNpmTasks('grunt-freeport');

grunt.registerTask('default', [ 'freeport:sometask', 'sometask' ]);
```

## Options

* `start` – start point to find a free port, must be `>= 1`, `1` by default
* `end` – end point to find a free port, must be `<= 65535`, `65535` by default

If task target is omitted then it will use default variable name `freeport`, i.e. you should use `'<%= freeport %>'`.

## License
[WTFPL](http://www.wtfpl.net/wp-content/uploads/2012/12/wtfpl-strip.jpg)

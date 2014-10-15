'use strict';

var portscanner = require('portscanner');

module.exports = function(grunt) {
    grunt.registerMultiTask('freeport', 'Get free port on locahost', function() {
        var done = this.async();
        var options = this.options();
        var name = 'freeport' + (this.target ? '.' + this.target : '');
        var start = options.start || 1;
        var end = options.end || 65535;

        if (typeof start === 'undefined' || typeof end === 'undefined') {
            grunt.fail.warn('you must provide both start/end options.');
        }

        if (typeof start !== 'number' || typeof end !== 'number') {
            grunt.fail.warn('start/end ports must be numbers.');
        }

        if (start < 1 || start > 65535 || end < 1 || end > 65535) {
            grunt.fail.warn('start/end ports must be >= 1 and <= 65535.');
        }

        if (end < start) {
            grunt.fail.warn('end port must be >= start port.');
        }

        portscanner.findAPortNotInUse(start, end, '127.0.0.1', function(err, port) {
            if (err) {
                grunt.fail.fatal(err);
            }

            grunt.config.set(name, port);
            grunt.log.oklns(name + ' = ' + port);
            done();
        });
    });
};

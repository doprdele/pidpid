module.exports = function(grunt) {
    var mds = require('markdown-styles'),
        path = require('path');

    grunt.initConfig({
        exec: {
            test: {
                cmd: './node_modules/markdown-styles/bin/generate-md --layout layout'
            }
        },
        'gh-pages': {
            options: {
                base: 'output'
            },
            src: ['**']
        }
    });

    // Load the npm installed tasks
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-gh-pages');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // The default tasks to run when you type: grunt
    grunt.registerTask('default', ['exec', 'gh-pages']);

};
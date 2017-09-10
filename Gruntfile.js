module.exports = function(grunt) {
    var mds = require('markdown-styles'),
        path = require('path');

    grunt.initConfig({
        exec: {
            test: {
                cmd: './node_modules/markdown-styles/bin/generate-md --layout layout'
            }
        }
    });

    // Load the npm installed tasks
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-gh-pages');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('generate-md', 'Generates markdown', function() {
        mds.render({
                input: path.resolve(__dirname, 'input'),
                output: path.resolve(__dirname, 'output'),
                layout: path.resolve(__dirname, 'layout')
            },
            function() {
                console.log('All done!');
            });
    });

    // The default tasks to run when you type: grunt
    grunt.registerTask('default', ['exec']);

};
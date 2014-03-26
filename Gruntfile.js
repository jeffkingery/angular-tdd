/**
 * Created by Jeff on 3/15/14.
 */
module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            options:{
                curly:true,
                eqeqeq:true,
                immed:true,
                latedef:true,
                newcap:true,
                noarg:true,
                sub:true,
                boss:true,
                eqnull:true,
                globals: {
                    afterEach: false,
                    beforeEach: false,
                    confirm: false,
                    context: false,
                    describe: false,
                    expect: false,
                    it: false,
                    jasmine: false,
                    JSHINT: false,
                    qq: false,
                    runs: false,
                    spyOn: false,
                    spyOnEvent: false,
                    waitsFor: false,
                    xdescribe: false
                }
            },
            all: ['Gruntfile.js', 'demo/**/*.js', 'tests/**/*.js']
        },

        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        },

        protractor: {
            options: {
                configFile: "protractor.conf.js", // Default config file
                keepAlive: true, // If false, the grunt process stops when the test fails.
                noColor: false, // If true, protractor will not use colors in its output.
                args: {
                    // Arguments passed to the command
                }
            },
            your_target: {
                options: {
                    configFile: "e2e.conf.js", // Target-specific config file
                    args: {} // Target-specific arguments
                }
            },
        },

        watch: {
            scripts: {
                files: ['app/**/*.js', 'demo/**/*.js', 'test/**/*.js'],
                tasks: ['jshint', 'karma:unit'],
                options: {
                    interrupt: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('default', ['jshint', 'karma', 'watch']);
};
/**
 * Created by Jeff on 3/15/14.
 */
module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

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
            all: ["Gruntfile.js", "karma.conf.js", "protractor.conf.js", "app/**/*.js", "tests/**/*.js"]
        },

        karma: {
            unit: {
                configFile: "karma.conf.js"
            }
        },

        protractor: {
            options: {
                configFile: "protractor.conf.js",
                keepAlive: true,
                noColor: false,
                args: { } // Global arguments
            },
            e2e: {
                options: {
                    configFile: "protractor.conf.js", // Target-specific config file
                    args: { } // Target-specific arguments
                }
            }
        },

        watch: {
            scripts: {
                files: ["Gruntfile.js", "karma.conf.js", "protractor.conf.js", "app/**/*.*", "tests/**/*.js"],
                tasks: ["jshint", "karma:unit", "protractor:e2e"],
                options: {
                    interrupt: true
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-karma");
    grunt.loadNpmTasks('grunt-protractor-runner');
    grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.registerTask("default", ["jshint", "karma", "watch", "protractor"]);
};
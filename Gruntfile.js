module.exports = function (grunt) {
    "use strict";

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        jshint: {
            //http://www.jshint.com/docs/options/
            options:{
                //Enforcing options - true values are restrictive
                bitwise: true,
                camelcase: true,
                curly: true,
                eqeqeq: true,
                es3: true,
                freeze: true,
                immed: true,
                indent: 4,
                latedef: true,
                maxparams: 5,
                newcap: true,
                noarg: true,
                quotmark: "double",
                strict: true,
                sub: true,
                trailing: true,
                undef: true,
                unused: true,
                //Relaxing options - true values are permissive
                eqnull: true,
                maxerr: 20,
                globals: {
                    angular: false,
                    app: false,
                    afterEach: false,
                    beforeEach: false,
                    browser: false,
                    by: false,
                    context: false,
                    describe: false,
                    element: false,
                    expect: false,
                    exports: false,
                    inject: false,
                    it: false,
                    jasmine: false,
                    localStorage: false,
                    module: false,
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
    grunt.loadNpmTasks("grunt-protractor-runner");
    grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.registerTask("default", ["jshint", "karma", "protractor", "watch"]);
};
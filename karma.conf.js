module.exports = function (config) {
    "use strict";

    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: "",

        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ["jasmine"],

        // list of files / patterns to load in the browser
        files: [
            "libraries/angular/angular.js",
            "libraries/angular/angular-route.js",
            "libraries/angular/angular-mocks.js",
            "app/**/*.js",
            "tests/unit/**/*.js"
        ],

        // list of files to exclude
        exclude: [ ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: { },

        // test results reporter to use
        // possible values: "dots", "progress"
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ["progress"],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ["PhantomJS"],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        //If you are running Karma as one of several Grunt tasks, singleRun must be true
        //otherwise Karma will continue to run, blocking all subsequent Grunt tasks
        singleRun: true
    });
};

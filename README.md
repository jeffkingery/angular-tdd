# [AngularJS](http://www.angularjs.org/) TDD project template

***

##What
A simple template to support test-driven development of AngularJS applications.

***

##Why
There are many excellent Angular templates available, such as:

* [angular-seed](https://github.com/angular/angular-seed)
* [angular-app](https://github.com/angular-app/angular-app)
* [ngbp](https://github.com/ngbp/ngbp)

Those are great, but what if you just want a simple TDD-enabling AngularJS project template
without a ton of eye candy and an industrial-strength build process with minification etc.?

What's the simplest thing that could possibly work?
***

##How

***

To enable running of tests and other tasks:

1. Install [Node.js](http://nodejs.org/download/).

2. Open a Node command prompt.

3. Install the Grunt and Karma command-line interfaces globally with:  npm install -g grunt-cli karma-cli.

4. CD to the folder containing this file, then install the other bits locally with:  npm install.
(npm knows what to install from the package.json file)

***

Components:

[AngularJS Version 1.2.14](http://code.angularjs.org/1.2.14/)

[Node.js](http://nodejs.org/) - application framework used to install and run server-side JavaScript applications.

[Grunt](http://gruntjs.com/) - "The JavaScript Task Runner" to automate tasks including "linting" and testing.

[JSHint](http://jshint.com/) - JavaScript code quality tool to find syntax errors, anti-patterns, and things that give you indigestion.

[Jasmine](http://jasmine.github.io/2.0/introduction.html) - JavaScript unit test framework.

[Karma](http://karma-runner.github.io/0.12/index.html) - JavaScript unit test runner created and used by the Angular team.

[PhantomJS](http://phantomjs.org/) - headless WebKit browser for fast automated testing.

[Protractor](https://github.com/angular/protractor) - E2E test framework built on WebDriverJS, the JavaScript wrapper for Selenium WebDriver.
Enables selection of UI elements by model bindings, in addition to the usual IDs, tag names, classes etc.
(Protractor sample tests and Grunt tasks are not yet implemented)
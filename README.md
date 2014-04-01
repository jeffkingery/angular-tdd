# [AngularJS](http://www.angularjs.org/) TDD project template

***

##What
***

A simple template to support [Test-Driven Development](http://c2.com/cgi/wiki?TestDrivenDevelopment) of AngularJS applications.  

Linting, unit and (optionally) end-to-end (e2e) tests run automatically on every file save.  

***

##Why
***

There are many excellent Angular templates available, such as:  

* [angular-app](https://github.com/angular-app/angular-app)
* [angular-seed](https://github.com/angular/angular-seed)
* [ngbp](https://github.com/ngbp/ngbp)

Those are great, but what if you don't need a ton of infrastructure or an industrial-strength build process?  

What if you just want a simple project template that facilitates TDD - what would that look like?  

For me the answer looks like this project.  

***


##How

***

######Initial Setup/Installation:  
 (Steps 1-4 once per machine, Steps 5-6 once per project instance)  

1. Install [Node.js](http://nodejs.org/download/).  

2. Open a Node command prompt.  

3. Install the Grunt and Karma command-line interfaces globally with:  npm install -g grunt-cli karma-cli.  

4. Install Protractor globally with:  npm install -g protractor.  

5. From the folder containing package.json (should be the project root):  
   install the other bits locally with:  npm install.  
   The "devDependencies" object in package.json lists what npm will install.  
   If you intend to create multiple projects and would like to save disk space,  
   you can install any / all of the components globally.  
   Note that this will install _thousands_ of files under the node modules folder.  
   It's okay - no puppies or kittens will be harmed.  
   npm keeps track of all this stuff, which you need to run your tests etc.  

6. Install/update the Selenium WebDriver with: webdriver-manager update.  

######Programming Session Workflow:  

1. If you would like to run Protractor e2e tests on every file save in addition to JSHint "linting" and Karma unit tests:  
  open a command prompt, CD to the project root folder and enter: webdriver-manager start.  
  This will start the Selenium server, which will run the browser instance(s) for your Protractor tests.  
  Just minimize this terminal window to leave the Selenium server running.  

2. Whether you've done Step 1 or not, open a Node.js command prompt and CD to the project root folder.  
Type: grunt  
This will run the default Grunt task which will on every file save:  
a. Lint all JavaScript files matching the patterns specified in Gruntfile.js.  
b. Run all unit tests matching the patterns specified in karma.conf.js.  
c. Run all e2e tests matching the patterns specified in protractor.conf.js.  

***

##Major Components
***

[AngularJS Version 1.2.15](http://code.angularjs.org/1.2.15/) - What HTML would have been, had it been designed for applications.

[Node.js](http://nodejs.org/) - Framework used to install and run server-side JavaScript applications.

[Grunt](http://gruntjs.com/) - "The JavaScript Task Runner" to automate tasks including "linting" and testing.

[JSHint](http://jshint.com/) - JavaScript code quality tool to find syntax errors, anti-patterns, and things that give you indigestion.

[Jasmine](http://jasmine.github.io/2.0/introduction.html) - Framework for writing JavaScript tests, both unit and end-to-end (E2E).

[Karma](http://karma-runner.github.io/0.12/index.html) - JavaScript unit test runner created and used by the Angular team.

[PhantomJS](http://phantomjs.org/) - Headless WebKit browser for fast automated testing.

[Protractor](https://github.com/angular/protractor) - E2E test framework built on WebDriverJS, the JavaScript wrapper for Selenium WebDriver.   
Rather revolutionary in that it enables selection of UI elements by _model bindings_, in addition to the usual IDs, tag names, classes etc.   

#install jasmine-jquery

# npm install --save-dev jasmine-jquery

Jasmine Spy
- spyOn() and createSpy()
- a spy( or mock) is process to verify, if the fake is been visited or not on which the spy is created or monitored.
- Jasmine Spy Matchers in assertion (note: These works based on "spyOn()")


major use of spy is performing ajax calls

- xmlHttpRequest()
- \$.ajax({}).done().error();
- \$.ajax(); --> Promise
    - Promise.then().catch();

Installing jquery 

 - npm init -y --> to create package.json
 - npm install --save-dev jquery @types/jquery

=============================================================

View / Html front-end Testing

Jasmine + Jquery

- jasmine-jquery.js
    - npm install --save-dev jasmine-jquery
- Uses test-case and spy feature of Jasmine and DOM features of jQuery
    - jquery
        - selector
            - #, ., tagname
        - events aka triggers
            - .trigger() method for watch event on view
            - e.g
                - $("#btn").trigger("click");
    - jasmine
        - describe(), it()
        - spyOnEvent() method to spy the event of DOM
        - setFixture() method, loads HTML DOM for unit testing, loads HTML DOM as string
        - loadFixture(), loads HTML document using $.ajax() call
            - load path(default path)
             - specs/js/fixtures
=========================================================================

Front end Testing for an external .html file with fixture
1. create spec folder at root of app and create fixtures subfilder in it.
2. write specfile in the spec folder


write test for 
1. Front end
    - Angular 
        - component Test
            1. Lifecycle
                methods
                    ngoninit()
            2. Injection
                service dependency
            3. Data binding
            4. DOM management
                executes events
                dynamic DOM generation
                    event Triggers
        - service test
            http calls
                mock the http call
    - React
        - Component
            - DOM rendering
                test for DOM only
            - unidirectional dataflow
            - Lifecycle
                only for DOM rendering and state change
2. Express + Node
    1. unit test for node.js logic
        1. DAL using Mongoose --> jasmine + spy
    2. Express
        1. Test for REST APIs
            1. Mocha + chai

========================================================================

Angular
1. @angular/common/testing
2. @angular/core/testing
3. @angular/forms/testing
4. @angular/platform-browser/testing
5. @angular/http/testing
    Testing Object Model
7. TestBed --> class representing an entry point to testing model
    1. Environment
        - Module Dependencies
            - Browser module for teting
            - Formsmodule for
                twoway data binding
    2. Component Testing
        - load component
        - instantiate component
        - load component fixture
            - Dynamic updates in DOM based on
                - Data Binding
    3. Service Testing
        1. Load service
        2. instantiate service
        3. http mock
            - external connection mockbackend
8. karma + jasmine integration with angular
    1. zone.js
9. npm install -g karma
    1. npm install --save-dev karma
    2. npm install --save-dev jasmine-core
    3. npm install --save-dev karma-jasmine
    4. npm install --save-dev karma-chrome-launcher
    5. npm  install --save-dev karma-jasmine-html-reporter
10. karma init
    1. create karma.config.js
        1. configuration for
            - loading and executing test
            - loading browser instance
11. Mocha + chai -> used for REST API testing using Node+ Express
    - npm i -D @types/node
    - npm i -D express
    1. The RESt API must be running to execute MOCHA test
    2. Mocha is server process for executing test
        - npm install -g mocha
        - npm install --save-dev mocha
    2. chai is the test object model
        - npm install --save-dev chai
        - npm install --save-dev request
12. mocha is the command line tool
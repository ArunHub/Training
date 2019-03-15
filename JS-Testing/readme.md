# Unit testing

1. Jasmine --> Object Model
2. Jest --> Object Model
3. Mocha --> Object Model
4. Karma --> An Engine for Executing one/more tests


- Jasmine
    * Command line using CLI
        > configure Jasmine
            + npm init -y
                $ generate package.json with defaults
            + npm install -g jasmine
                $ npm install --save-dev @types/node @types/jasmine
                $ Install Jasmine in global scope
                $ This provides "jasmine" CLI to run test
            + The command "jasmine example"
                $ Install Jasmine sample Test cased for reference
                $ 
    * Project Configuration in general for Raw- Javascript
        > The 'src' folder (or src/app path)
            + contains all source codde files
        > The 'spec' folder
            + contains all test-cases (?)
                $ File name for test
                    => xxxx.spec.js / xxxx.spec.ts
    * The "jasmine examples" command generate standard reference examples for Unit Test
    * "jasmine init" provide based testing configuration
    * Browser based testing

====================================================
====================================================

Test cases
- The code based workflow to perform Unit Test for the source code
- 2 parts
    * Test case description
        > The "describe()" object
            + An Entry point to testcase
        > Configuration or decpendecy creation to be injected for each test case
            + the "beforeEach()" object
            + Defining instances of all objects that each test case wants to use
    * Actual Test Case
        > The "it()" object
        > The test-code
            + Arrange
                => arrangement of test specific dependencies
                    >> e.g. parameters needed to be passed to the method being tested
            + Act
                => acting upon the test
                    >> e.g. invoking the code/method to be tested from the source code
                    >> Generate the actual result
            + Assert 
                => Test-case result
                    >> Compare actual with expected
                    >> The "expect()" object
                        | Equal
                        | NotEqual
                        | True
                        | False
                        | GreaterThan
                        | LessThan
                        | Be
                        | Throw
                        | ThrowError
                        | Contains
=================================================================================
=================================================================================

1. Browser side testing for Jasmine
    - Default Html reporter for the application 
        * SpecRunner.html
        * load all jasmine dependencies
        * load all source code files
        * load all spec files
    - Front-End test
        * jquery DOM selector
            - juery.js --> provide debugger for DOM
        * jasmine-jquery.js
            - Contract between jasmine and jquery for DOM Testing

=======================================
https://github.com/maheshsabnis/jstest
=======================================
http://apiapptrainingservice.azurewebsites.net/api/Products
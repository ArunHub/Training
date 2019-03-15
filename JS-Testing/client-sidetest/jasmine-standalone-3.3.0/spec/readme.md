# Unit Testing

1. jasmine --> Object Model
2. jest --> Object Model
3. mocha --> Object Model
4. karma --> An Engine for Executing one/more tests

- Jasmine
- https://jasmine.github.io/setup/nodejs.html
  - Command-Line using CLI
    - Configure Jasmine
      - npm init -y
        - generate package.json with defaults
      - npm install -g jasmine
        - Install Jasmine in global scope
        - This provides "jasmine" CLI to run test
      - Install Jasmine in local scope for API access
        - npm install --save-dev jasmine
      - The Jasmine intellisense
        - npm install --save-dev @types/node
        - npm install --save-dev @types/jasmine
      - The command "jasmine example"
        - Install Jasmine sample Test Cased for reference
  - Project Configuration in General for Raw-JavaScript
    - The 'src' folder (or src/app path)
      - Contains all source code files
    - The 'spec' folder
      - Contains all test-cases (?)
        - File name for test
          - xxxx.spec.js / xxxx.spec.ts
  - The "jasmine examples" command generate standard reference examples for Unit Test
  - The "jasmine init" provide based testing configuration
  - Browser based testing

================================================================================================================================================
Test Cases

- The code based workflow to perform Unit Test for the source code
- 2 Parts
  - Test Case description
    - The "describe()" object
      - An entry point to TestCase
    - Configuration of dependency creation to be injected for each test case
      - the "beforeEach()" object
      - Defining instances of all objects that each test case wants to use
  - Actual Test Case - The "it()" object - The test-code - Arrange - arrangement of test specific dependencies - e.g. parameters needed to be passed to the method being tested - \*\*\* The "expected result" - Act - acting upon the test - e.g. invoking the code/method to be tested from the source code - Generate the "actual result" - Assert - Test-Case result - Compare actual with expected - The "expect()" object - Equal - NotEqual - True - False - GreaterThan - Lessthan - Be - Throw - ThrowError - Contains - isTypeof
    #===============================================#===============================================#==================================================

1. Browser-Side Testing for Jasmine

- Default Html reporter for the application
  - SpecRunner.html
  - load all jasmine dependencies
  - load all source code files
  - load all spec files
- Front-End test
  - jquery DOM Selector
    - jquery.js --> Provide Debugger for DOM
  - jasmine-jquery.js
    - Contract between jasmine and jquery for DOM Testing

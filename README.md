# Skywatch Automation Framework
  This is a JavaScript based End-to-End (E2E) customized Test Automation Framework built on Open source selenium based nightwatch-cucumber node js platform.

##*Highlights of Skywatch*
  * It is an  lightweight javascript based framework.
  * Behaviour Driven Development test framework defined using Gherkin syntax (Given, When & Then statements).
  * Page Object pattern technique has been used for making the tests more readable and maintainable.
  * Domain Specific Language (DSL) driven testing framework for writing comprehensive automated testing suites.
  * Plugged in Cucumber report for details test report
  * Can be extended to cloud platforms - Nightwatch cloud, Aplittoos & Browser stack



## How to Execute?
  Install nightwatch-cucumber and other dependencies
  Go to root project folder and run the following from command prompt. This has default `nightwatch` test runner.
  1. Single Feature file execution?
      *Make sure test_workers is false in nightwatch.config.js file.*
      * Single Feature File execution on Phantom browser    : `nightwatch --tag test --env phantom`
      * Single Feature File execution on multiple browsers  : `nightwatch --tag test --env phantom,fire,default`
  2. Parallel Feature files execution?
      *Make sure test_workers is true in nightwatch.config.js file.*
      * Parallel Feature Files execution on Phantom browser : `nightwatch --env phantom`

## Other ways of using the command prompt line:
  * `nightwatch --help`
  * `nightwatch --skiptags sanity --env phantom`

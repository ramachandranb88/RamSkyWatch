const seleniumServer = require('selenium-server')
const phantomjs = require('phantomjs-prebuilt')
const chromedriver = require('chromedriver')
const geckodriver = require('geckodriver')

require('nightwatch-cucumber')({
  cucumberArgs: [
    '--require', 'event-handlers.js',
    '--require', 'lib/timeout.js',
    '--require', 'features/step_definitions',
    '--format', 'pretty','--format',
    'json:reports/json-report/cucumber.json','features'
  ]
})

module.exports = {
  output_folder: 'reports',
  custom_commands_path: 'common_Assertions',
  custom_assertions_path: '',
  page_objects_path: 'page_objects',
  live_output: true,
  detailed_output: true,
  disable_colors: false,
  // Sequential Execution? Modify test_workers to false
  // Parallel Execution? Modify test_workers to true
  test_workers: {
    enabled: false,
    workers: 'auto'
  },

  selenium: {
    start_process: true,
    server_path: seleniumServer.path,
    log_path: '',
    host: '127.0.0.1',
    port: 4444,
    cli_args : {
      "webdriver.chrome.driver" : chromedriver.path,
      "phantomjs.binary.path": phantomjs.path,
      "webdriver.gecko.driver": geckodriver.path,
      }
  },

  test_settings: {
    // Chrome Browser is default
    default: {
      launch_url: '',
      selenium_port: 4444,
      selenium_host: 'localhost',
      silent: true,
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true
      },
      use_xpath: true,
      //end_session_on_fail: false,
      skip_testcases_on_fail: false,
      screenshots : {
        enabled : true,
        on_failure : true,
        path: 'screenshots/default'
      },
    },
    // PhantomJS Headless browser
    phantom: {
      launch_url: '',
      selenium_port: 4444,
      selenium_host: 'localhost',
      silent: true,
      desiredCapabilities: {
        browserName: 'phantomjs',
        javascriptEnabled: true,
        acceptSslCerts: true
      },
      use_xpath: true,
      //end_session_on_fail: false,
      skip_testcases_on_fail: false,
      screenshots : {
        enabled : true,
        on_failure : true,
        path: 'screenshots/default'
      },
    },
    // Firefox browser
    firefox: {
      launch_url: '',
      selenium_port: 4444,
      selenium_host: 'localhost',
      silent: true,
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        acceptSslCerts: true,
        marionette: true
      },
      use_xpath: true,
      //end_session_on_fail: false,
      skip_testcases_on_fail: false,
      screenshots : {
        enabled : true,
        on_failure : true,
        path: 'screenshots/default'
      }
    },
    //end of test_settings
  }
}

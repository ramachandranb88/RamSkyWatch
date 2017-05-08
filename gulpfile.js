const gulp = require('gulp')
const nightwatch = require('gulp-nightwatch')
const args = require('yargs').argv;

var {defineSupportCode} = require('cucumber');
var reporter = require('./index');
var path = require('path');
var options = require('options');
var searchFileUp = require('./lib/searchFileUp');


gulp.task('SmokeTest',['nightwatch','junit-report'],()=>{})

gulp.task('nightwatch',() => {
  return gulp.src('')
    .pipe(nightwatch({
      configFile: 'nightwatch.conf.js'
    }))
});

/*gulp.task('cucumber', function() {
    return gulp.src('*features/*').pipe(cucumber({
        'steps': '*features/step/*.js',
        'support': '*features/support/*.js'
    }));
});*/

gulp.task('junit-report',['nightwatch'],function() {
    gulp.src('reports/json-report/cucumber.json')
        .pipe(cucumberXmlReport({strict: true}))
        .pipe(gulp.dest('reports/xml-report'));
});

function cucumberXmlReport(opts) {
    var gutil = require('gulp-util'),
        through = require('through2'),
        cucumberJunit = require('cucumber-junit');

    return through.obj(function (file, enc, cb) {
        var xml = cucumberJunit(file.contents, opts);
        file.contents = new Buffer(xml);
        file.path = gutil.replaceExtension(file.path, '.xml');
        cb(null, file);
    });
}

/*gulp.task('html-report',['nightwatch'],function() {
    gulp.src('reports/html-report/cucumber.json')
        .pipe(cucumberHtmlReport());
});*/

  function cucumberHtmlReport(){
    var theme = {
      bootstrap: 'bootstrap',
      foundation: 'foundation',
      simple: 'simple'
    };
    var outputDirectory = 'reports/html-report';
    var jsonFile = 'reports/json-report/cucumber.json';

    function getOptions(theme) {
      console.log('Get Options - Function ');
      var d = new Date();
      var dateInput = "Run_"+ (d.getMonth()+1 ) + '-' + d.getDate() + '-' +d.getFullYear()+"_"+d.getHours() + "-" + d.getMinutes() + "-" + d.getSeconds();

      console.log(dateInput);
        return {
              dateInput : dateInput,
              theme: theme,
              output: path.join(outputDirectory, dateInput+'.html'),
              reportSuiteAsScenarios: true,
              launchReport: true,
              metadata: {
                  "App Version": "0.0.1",
                  "Test Environment": "PROD",
                  "Browser": "Chrome  54.0.2840.98",
                  "Platform": "Windows 7",
                  "Parallel": "Scenarios",
                  "Executed": "Remote"
              }
          };
      }

      function getJsonFileOptions(theme){
          console.log('Get Json File Options - Function ');
           var options = getOptions(theme);
           options.jsonFile = jsonFile;
           return options;
       }

       function assertJsonFile() {
            console.log('Assert Json File - Function ');
           //Generate Bootstrap theme report
           reporter.generate(getJsonFileOptions(theme.bootstrap));
           //reporter.generate(getJsonFileOptions(theme.foundation));
           //reporter.generate(getJsonFileOptions(theme.simple));

       }
       assertJsonFile();
  }

  gulp.task('default', function(opts){
  opts = opts || {};
      var cliArgs = {};
      [
          'config',
          'output',
          'reporter',
          'env',
          'verbose',
          'test',
          'testcase',
          'group',
          'skipgroup',
          'filter',
          'tag',
          'skiptags',
          'retries',
          'suiteRetries'
      ].forEach(function(name) {
          if(args[name]) {
              process.env[name] = args[name];
              cliArgs[name] = args[name];
          }
      });

      process.env.buildNumber = args.buildNumber;
      process.env.planKey = args.planKey;
      process.env.test_env = args.testEnv;
      process.env.test_port = args.testPort;
      process.env.sel_grid = args.selGrid;
      process.env.test_runner = args.testRunner;
      process.env.test_branch = args.testBranch || '';
      process.env.httpProtocol = args.httpProtocol;
      process.env.browser = args.browser;
      process.env.authUrl = args.authUrl;
      process.env.appRoute = args.appRoute;
      process.env.testWorkers = args.testWorkers;
      process.env.workers = args.workers;
      //argument for the Feature toggling functionality.
      process.env.featureToggle = args.featureToggle;
      process.env.tags = process.env.tag || null;
      process.env.ignoreInvalidCerts = args.ignoreInvalidCerts || undefined;

      return gulp.src([])
          .pipe(nightwatch({
              configFile: __dirname + '/nightwatch.conf.js',
              cliArgs: cliArgs
          }));
  });

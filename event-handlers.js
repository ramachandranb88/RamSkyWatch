var {defineSupportCode} = require('cucumber');
var reporter = require('./index');
var path = require('path');
var options = require('options');
var searchFileUp = require('./lib/searchFileUp');

//var email   = require('emailjs');
//var sendmail = require('sendmail')({silent: true})
//const nodemailer = require('nodemailer');
var fsPath = require('fs-path');


var sleep = require('system-sleep');


defineSupportCode(function({registerHandler}) {
  registerHandler('AfterFeatures', function (features, callback) {

  //User defined wait to handle the delay on cucumber.json file update post Execution
  sleep(5000); // 5 seconds


  var theme = {
      bootstrap: 'bootstrap',
      foundation: 'foundation',
      simple: 'simple'
    };
    var outputDirectory = 'reports/html-report';
    var jsonFile = 'reports/json-report/cucumber.json';
    var d = new Date();
    var dateInput = "Run_"+ (d.getMonth()+1) + '-' + d.getDate() + '-' +d.getFullYear()+"_"+d.getHours() + "-" + d.getMinutes() + "-" + d.getSeconds();

    function getOptions(theme) {
      //console.log('Get Options - Function ');

      //console.log(dateInput);
        return {
              dateInput : dateInput,
              theme: theme,
              output: path.join(outputDirectory, dateInput+'.html'),
              reportSuiteAsScenarios: true,
              launchReport: true,
              // metadata: {
              //     "App Version": "0.0.1",
              //     "Test Environment": "PROD",
              //     "Browser": "Chrome  54.0.2840.98",
              //     "Platform": "Windows 7",
              //     "Parallel": "Scenarios",
              //     "Executed": "Remote"
              // }
          };
      }

      function getJsonFileOptions(theme){
          //console.log('Get Json File Options - Function ');
           var options = getOptions(theme);
           options.jsonFile = jsonFile;
           return options;
       }

       function assertJsonFile() {
            //console.log('Assert Json File - Function ');
           //Generate Bootstrap theme report
           reporter.generate(getJsonFileOptions(theme.bootstrap));
           //reporter.generate(getJsonFileOptions(theme.foundation));
           //reporter.generate(getJsonFileOptions(theme.simple));

       }

       assertJsonFile();

       fsPath.copy(path.join(outputDirectory, dateInput+'.html'), 'C:/Users/balasubramanir/Desktop/FN-Nightwatch-Cucumber-Automation-Framework-master/FN-Nightwatch-Cucumber-Automation-Framework-master/reports/MailReport/'+dateInput+'.html', function(err){
         console.log('Report file copied to Mail Report Folder');
       });



    callback();
  });
});

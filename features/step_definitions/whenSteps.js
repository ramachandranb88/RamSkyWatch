const {client} = require('nightwatch-cucumber')
const {defineSupportCode} = require('cucumber')



defineSupportCode(({When}) => {

  var loanForm   = client.page.loanForm();

 //When Statement - enter text value as test data passed through feature file statement under double quotes
  When('I enter text - {stringInDoubleQuotes} at element {stringInDoubleQuotes} text field',function(arg1,arg2){
    return loanForm.enterText(arg1,arg2);
  });


})

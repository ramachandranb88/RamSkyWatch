const {client} = require('nightwatch-cucumber')
const {defineSupportCode} = require('cucumber')

defineSupportCode(({Given}) => {

  var commRepo   = client.page.commRepo();


 // Given statement to launch url provided in feature file when statement under double quotes
  Given('I Launch URL {stringInDoubleQuotes} in {stringInDoubleQuotes} browser',function(arg1,arg2){
    return commRepo.windowBreakpointWithArgument(client,arg2).url(arg1)
  });


})

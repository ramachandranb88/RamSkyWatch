const {client} = require('nightwatch-cucumber')
const {defineSupportCode} = require('cucumber')

defineSupportCode(({Then}) => {

  // Loan request form Then statements
  var loanForm   = client.page.loanForm();

// Then statement - Common click event by passing element property as argument called from page repository
Then ('I click on element {stringInDoubleQuotes}',function(arg1){
  return loanForm.clickOnElement(arg1);
});

//Then statement - Common assert element is visible by passing element property as Argument called from page repository
Then ('I verify element {stringInDoubleQuotes} is displayed',function(arg1){
  return loanForm.assertDisplayed(arg1);
})


 // Then statement - Loan request online form fill
  Then ('I fill the form with valid details', function (){
    return loanForm.formFill();
     callback();
  });

// Then statement - loan form verify action buttons are enabled
  Then('I validate Reset button and Submit button is enabled',function(){
    return loanForm.verifyActionButtons();
    callback();
  });

  //Tnen statement - Common assert element text is dispalyed as expected
  Then('I validated the text at element {stringInDoubleQuotes} is displayed as {stringInDoubleQuotes}',function(arg1,arg2){
    return loanForm.verifyElementText(arg1,arg2);
    callback();
  })
})

var assert = require('chai').assert;
var expect = require('chai').expect;
var testData = require('../testdata/testdata.json');
var globalParam = testData.globalParam;


//Xpath maintained under separate variable for easy maintenance when there is a change in element/object property
var citiSalaryYes_Xpath   =  './/*[@id="existcust1"]';
var citiSalaryNo_Xpath   =  './/*[@id="existcust2"]';
var fancyBox_Xpath         =  './/*[@id="fancybox-content"]';
var fullName_Xpath         =  './/*[@name="name" and @type="text"]';
var cityDropDown_Xpath     =  '(.//*[contains(@class,"dropListLarge")])[2]';
var occupDropDown_Xpath    =  '(.//*[contains(@class,"dropListLarge")])[3]';
var netTH_Xpath            =  './/*[@name="netTH" and @type="text"]';
var authrizCheckBox_Xpath  =  './/*[@id="authorization"]';
var submitBtn_Xpath        =  './/*[@id="submit"]';
var resetBtn_Xpath         =  './/*[contains(@class,"resetFrm")]';

var mobileNoError_Xpath    = './/*[@id="errmobileno"]';




module.exports = {

// Object aslo maintained under elements repository to call directly in feature file  based statements defined in feature file
elements: {

citiSalaryYes  : {
    locateStrategy : 'xpath',
    selector : citiSalaryYes_Xpath
  },

citiSalaryNo  : {
  locateStrategy : 'xpath',
  selector : citiSalaryNo_Xpath
},

fancyPopUp : {
  locateStrategy : 'xpath',
  selector : fancyBox_Xpath
},


fullName : {
  locateStrategy : 'xpath',
  selector : fullName_Xpath
},

mobileNo  : {
  selector : 'input[id="mobilen"]'
},

submitBtn : {
  locateStrategy : 'xpath',
  selector : submitBtn_Xpath
},

mobileNoError : {
  locateStrategy : 'xpath',
  selector : mobileNoError_Xpath
}
},

//Executable functions defined to call for the respective BDD - Given, When, Then statements as needed
commands: [{

clickOnElement : function (element) {
  return this.click(element);
},

assertDisplayed : function (element){
  return this.assertElementPresent(element);
},

enterText : function(stringText,element){
  return this.sendText(element,stringText);
},

formFill : function() {


return this.click('@citiSalaryNo')            //Sample object handling using element object repository
           .sendText(fullName_Xpath,'RamTest')  //Sample object handling using xpath repository of custom commands under Custom assertions folder
           .setValue('@mobileNo','8887775241')  //Sample object handling using css selector
           .selectDropDownByValue(cityDropDown_Xpath,'Bengaluru')
           .selectDropDownByValue(occupDropDown_Xpath,'Salaried')
           .sendText(netTH_Xpath,'30000')
           .click(authrizCheckBox_Xpath)
},

verifyActionButtons : function(){

  return this.assertElementEnabled(submitBtn_Xpath)
             .assertElementEnabled(resetBtn_Xpath);
},

verifyElementText : function(element,expText){
  return this.getText(element,function(result){
    this.assert.equal(result.value,expText,'Failed - Expected text mismatch')
  })
}
}]






}

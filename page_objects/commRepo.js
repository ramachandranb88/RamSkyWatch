var assert = require('chai').assert;
var expect = require('chai').expect;
var testData = require('../testdata/testdata.json');
var loginData = testData.login;
var globalParam = testData.globalParam;





/******************************************************************************************************
// Common Objects xpaths
*******************************************************************************************************/


module.exports = {

  //**********************************************************
  // Common Page Objects: Element Repository.**********
  //**********************************************************


  elements: {





  },

    commands: [{
      /******************************************************************************************************
      **** Default Callable function for this pageobject js to read and store text to tempText variable *****
      *******************************************************************************************************/


      getTxtToTemp : function(ele,storetoVar,objDesc){
        return this.waitForElementPresent('//body', testData.globalParam.defaultTimeOut)
                   .assertElementPresent(ele,testData.globalParam.defaultTimeOut)
                   .getText(ele,function(result){
                     console.log('Text of Element - '+objDesc + ':',result.value);
                     storetoVar = result.value;
                     });
      },


     getPageLoadStatus : function(){
          for(count = 0; count < 10 ; count++){
            this.api.execute("return document.readyState;", function(result) {

                if (result.value !== "complete") {
                  console.log('Wait for page load');
                  this.api.execute("window.location.reload();",function(){
                  console.log('Page refresh action done');
                  this.pause(15000);
                  return;
                });

                }
             return;
          });

     }
     return;
   },


    deleteCookieByName : function (cookieName)
    {

      var jsstatement = "return document.cookie ="+ cookieName + "'=;expires=Thu, 01 Jan 1970 00:00:01 GMT;'"
      this.api.execute(jsstatement,function(){
        console.log('js execte done');
      });
    },

      /*******************************************************************************************************
      ********* Feature file scenarios callable step definition function *************************************
      ********************************************************************************************************/
      windowBreakpointWithArgument : function(browser, browserBPArgument) {
        console.log('You Have Entered Window Breakpoint Argument As:', browserBPArgument);
        switch (browserBPArgument) {
          case '16u' || '16U': browser.maximizeWindow();
            break;
          case '12u' || '12U': browser.resizeWindow(1200, 600);
            break;
          case '8u' || '8U': browser.resizeWindow(800, 600);
            break;
          case '4u' || '4U': browser.resizeWindow(340, 600);
            break;
          case '2u' || '2U': browser.resizeWindow(286, 400);
            break;
          default: console.log('Please Correct the Breakpoint Value to one of these values: 16u/12u/8u/4u');
        }
        return browser;
      },


   pageReset : function() {
       return         this.api.keys(this.api.Keys.F5);

   }

 }]


}

//var global = require('../global.js');

var testData = require('../testdata/testdata.json');

exports.command = function(ele, callback) {

  return this.waitForElementPresent(ele,testData.globalParam.defaultTimeOut)
             .assert.elementPresent(ele)
             .moveToElement(ele,10,10);

}

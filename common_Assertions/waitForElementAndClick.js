var testData = require('../testdata/testdata.json');
exports.command = function(ele,callback){
    return this.waitForElementVisible(ele,testData.globalParam.defaultTimeOut)
               .click(ele);

}

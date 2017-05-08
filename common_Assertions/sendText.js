
exports.command = function (ele,arg,callback){
  return this.assertElementPresent(ele)
             .clearValue(ele)
             .setValue(ele,arg);

}

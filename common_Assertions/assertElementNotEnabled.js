exports.command = function(ele, callback) {
  return this.moveToElement(ele,10,10)
             .assert.elementPresent(ele)
             .expect.element(ele).to.not.be.enabled;
}

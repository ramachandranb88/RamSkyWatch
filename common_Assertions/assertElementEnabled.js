
 exports.command = function(ele, callback) {
          return this.moveToElement(ele,10,10)
                     .assert.visible(ele)
                     .expect.element(ele).to.be.enabled;

 }

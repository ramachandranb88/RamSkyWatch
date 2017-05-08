
 exports.command = function(ele, expText,callback) {
          return this.moveToElement(ele,10,10)
                     .assert.visible(ele)
                     .getText(ele,function(result){
                       this.assert.equal(result.value,expText,'Text Mismatch for -'+expText)
                     });

 }

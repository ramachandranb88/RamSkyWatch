var assert = require('chai').assert;

exports.command = function(list_desc,listElements, callback) {

return this.elements('xpath',listElements,function(lists){
             console.log('list length : '+lists.value.length);
             lists.value.forEach(element => {
              this.elementIdText(element.ELEMENT,result =>{
                console.log(result.value);
              })
              this.moveTo(element.ELEMENT,10,10);
              this.elementIdDisplayed(element.ELEMENT, result => {
              this.assert.equal(result.value, true);
          });
          })
        })

}

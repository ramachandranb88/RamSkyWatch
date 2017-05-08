
var assert = require('chai').assert;

exports.command = function(list_desc,listElements,expElementCount, callback) {
return   this.elements('xpath',listElements,function(listsSet){
         var count = listsSet.value.length;
         console.log(count);
         this.assert.equal(expElementCount==count,list_desc);
       })

     }

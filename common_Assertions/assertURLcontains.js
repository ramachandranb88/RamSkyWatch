
exports.command = function(arg, callback) {

  console.log("Expected Text in URL: ", arg)
  this.pause(5000);
  return this.assert.urlContains(arg,'Expected does not match');

}

exports.command = function()
{



return this.execute("return document.readyState;", function(result) {

    if (result.value !== "complete") {
      console.log('Wait for page load');
      this.execute("window.location.reload();",function(){
      console.log('Page refresh action done');
      this.pause(10000);
      return;
    });

    }
    return;
});



}

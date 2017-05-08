exports.command =  function(ddElement, ddValue){

var value_Path = ddElement+ '//.//a[text()="'+ddValue+'"]';
this.waitForElementAndClick(ddElement)
    .waitForElementAndClick(value_Path);

    return;


  }

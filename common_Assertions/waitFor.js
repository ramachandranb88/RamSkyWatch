exports.command = function(timeout, callback)
{
  return this.pause(timeout,function(){
    console.log('Wait Done for seconds :'+timeout);
  });
}

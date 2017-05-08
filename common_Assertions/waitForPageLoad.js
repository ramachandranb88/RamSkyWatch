
exports.command = function(callback)
{

this.pause(5000);
for(count = 0; count < 8 ; count++){

  this.execute("return document.readyState;", function(result) {

      if (result.value !== "complete") {
        console.log('Wait for page load');
        this.keys(this.Keys.F5)

      /*  this.execute("window.location.reload();",function(){
                        console.log('Page refresh action done');

                        return;
                      })*/
             .pause(10000);
      }
   return;
});

}
}


//Test Comment Update






/*exports.command = function()
{
   this.execute("return document.readyState;", function(result) {

  for(count = 0; count < 120 ; count++){
    if (result.value === "complete") {
       console.log('Page Load - '+ result.value);
       return;
    }  else {
      if(count == 20)
      {
        console.log('Reloaded the page after 30 seconds');
        this.keys(this.Keys.F5);
      }
        console.log('Wait for Page Load - seconds :' + count);
        this.pause(1000);
    }
  }
        return;
});
}














/*exports.command = function()
{

this.execute("return document.readyState;", function(result) {

            this.pause(5000);
            if (result.value === "complete")
              {
                     console.log('Page Load - '+ result.value);
                     return ;
              }
              else
               {
                 this.pause(5000);
                 this.execute("return document.readyState;", function(result) {
                   if (result.value === "complete")
                     {
                            console.log('Page Load - '+ result.value);
                            return ;
                     }
                     else {
                            this.execute("window.location.reload();",function(){
                            console.log('Page refresh action done');

                          }
                   }

                  return;

               }

         });
         console.log(pageStatus);


/*
console.log(this.flag);

if(flag)
{
  break;
}





if(count == 30 || count == 60 || count ==90)
 {
 console.log('Reloaded the page after '+count+' seconds');
//  this.keys(this.Keys.F5);
  this.execute("window.location.reload();",function(){
  console.log('Page refresh action done');
     })
 }*/

/*
}
return;
}*/

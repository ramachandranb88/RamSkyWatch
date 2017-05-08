
    exports.command =  function(arg){
      console.log('Expected Title: ', arg);
        this.pause(1000);
        this.getTitle(function(title) {
          this.verify.equal(typeof title, 'string');
          this.verify.equal(title, arg);
          console.log('Actual Data:',title);
        })
      }

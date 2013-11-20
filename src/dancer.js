// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){

  this.timeBetweenSteps = timeBetweenSteps;

  this.$node= $('<span class="dancer"></span>');
  this.step();
  this.setPosition(top, left);
};

Dancer.prototype = {
    step: function(){
    debugger;
    var that = this;
    setTimeout(function() {
      that.step();
    }, that.timeBetweenSteps);
  },

  setPosition: function(top, left){
    /* Use css top and left properties to position our <span> tag
     * where it belongs on the page. See http://api.jquery.com/css/
     */

    var styleSettings = {
      top: top,
      left:left
    };
  
    this.$node.css(styleSettings);
  },

   movePosition: function() {
     var that = this;
     setInterval(function() {
      var dirArray=  ['left', 'top'];
      var offArray = ['+=50', "-=50"]
      var dir = (Math.floor(Math.random()*10))%2;
      var offset = (Math.floor(Math.random()*10))%2;
      var offsetVal;

     // var str = "+="+offset;

      var top = that.$node.css('top');
      var left = that.$node.css('left');

      if (dir === 1 ) {
        offsetVal = (top >= window.innerHeight)?
          "-=50":offArray[offset];

        offsetVal = (top <= 0)?
          "+=50":offArray[offset];
      }
      else {
        offsetVal = (left >= window.innerWidth)?
          "-=50":offArray[offset];

        offsetVal = (left <= 0)?
          "+=50":offArray[offset];
      }
      
      var value= {};
      value[dirArray[dir]] = offsetVal;
      console.log(that.$node.css('top'));
      that.$node.animate(value);
      }, 100);
   } 
  
};

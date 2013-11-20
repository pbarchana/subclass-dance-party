// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){

  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.$node= $('<span class="dancer"></span>');
  this.setPosition(top, left);
};

Dancer.prototype = {

  step: function(){
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
  }

  // movePosition: function() {
  //   setTimeout(function() {
  //     this.$node.animate({left: +=50})
  //   }, 
  //   200);
  // }
 
  

};

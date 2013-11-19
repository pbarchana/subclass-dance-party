var PopDancer = function(top, left, timeBetweenSteps){

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  //this.top = top;
  //this.left = left;
  //this.timeBetweenSteps = timeBetweenSteps;
  //this.step();
  //this.setPosition(top, left);
  this.$node = $('<span class="popdancer"></span>');
  Dancer.call(this, top, left, timeBetweenSteps);
};


//PopDancer.prototype = new Dancer();
PopDancer.prototype = Object.create(Dancer.prototype);
PopDancer.prototype.constructor = PopDancer;


PopDancer.prototype.step = function(){

    // call the old version of step at the beginning of any call to this new version of step
    //Dancer.prototoype.step();
    console.log(this.$node);
    Dancer.prototype.step.call(this);

    /* toggle() is a jQuery method to show/hide the <span> tag.
     * See http://api.jquery.com/category/effects/ for this and
     * other effects you can use on a jQuery-wrapped html tag. */
     var temp = {};
     temp = {"border-color" : "blue"};
     this.$node.css(temp);
    this.$node.toggle();
};


var makePopDancer = function() {
  return (new PopDancer(arguments[0], arguments[1], arguments[2]));
}
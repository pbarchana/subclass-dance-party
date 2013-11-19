var BlinkyDancer = function(top, left, timeBetweenSteps){

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  //this.top = top;
  //this.left = left;
  //this.timeBetweenSteps = timeBetweenSteps;
  //this.step();
  //this.setPosition(top, left);
  this.$node = $('<span class="dancer"></span>');
  Dancer.call(this, top, left, timeBetweenSteps);
};


//BlinkyDancer.prototype = new Dancer();
BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;


BlinkyDancer.prototype.step = function(){

    // call the old version of step at the beginning of any call to this new version of step
    //Dancer.prototoype.step();
    Dancer.prototype.step.call(this);

    /* toggle() is a jQuery method to show/hide the <span> tag.
     * See http://api.jquery.com/category/effects/ for this and
     * other effects you can use on a jQuery-wrapped html tag. */
    this.$node.toggle();
};


var makeBlinkyDancer = function() {
  return (new BlinkyDancer(arguments[0], arguments[1], arguments[2]));
}
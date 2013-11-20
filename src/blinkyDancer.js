var BlinkyDancer = function(top, left, timeBetweenSteps){

  this.$node = $('<span class="blinkydancer"></span>');
  Dancer.call(this, top,left, timeBetweenSteps);
  //this.movePosition();
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(){

  Dancer.prototype.step.call(this);
  this.$node.css({"border-color":"green"});
  this.$node.toggle();
};


var makeBlinkyDancer = function() {
  return (new BlinkyDancer(arguments[0], arguments[1], arguments[2]));
};
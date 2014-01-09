function Player(name, id) {
  this.name = name;	
  this.id = id;
  this.score = 0; 
}

Player.prototype.scorePoint = function() {
  this.score += 1;
  return this.game.checkForWin();
};
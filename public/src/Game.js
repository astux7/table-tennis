function Game(p1, p2) {
  this.player1 = p1;
  this.player2 = p2;

  p1.game = this;
  p2.game = this;
}

Game.prototype.checkForWin = function() {
  if(this.player1.score > 10 || this.player2.score > 10) {
    return this.whoWin(this.player1,this.player2);
  }
  return 0;
};

Game.prototype.whoWin = function(player1,player2) {
  var winner_name = player1.id;
  if(player2.score > 10 ){
  	winner_name = player2.id;
  }
 // this.ressetScores(player1,player2);
  return winner_name;
};

 Game.prototype.ressetScores = function(player1,player2) {
 	player1.score = 0;
    player2.score = 0;
};

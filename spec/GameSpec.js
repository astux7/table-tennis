describe("Game", function() {
  var game;

  beforeEach(function() {
    p1 = new Player("player1", 1);
    p2 = new Player("player2", 2);

    game = new Game(p1, p2);
  });

  it('has two players', function() {
    expect(game.player1).toBe(p1);
    expect(game.player2).toBe(p2);
  });

  it('resets after a player reaches 11', function() {
    var times = 12;
    while(times--) {
      game.player1.scorePoint();
    }
    game.ressetScores(p1,p2);
    expect(p1.score).toEqual(0)
    expect(p2.score).toEqual(0)
  })

  it('should get the winner p1 notice after 11 wins and no winner otherwise', function() {
    var times = 11;
    while(times--) {
      if(times == 0){
        expect( game.player1.scorePoint()).toBe(game.player1.id);
      }
      else{
        expect( game.player1.scorePoint()).toBe(0);
      }
    }
    game.ressetScores(p1,p2);
    expect(p1.score).toEqual(0)
    expect(p2.score).toEqual(0)
  })
});
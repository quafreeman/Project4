/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 $("#btn__reset").on("click", function() {
    game.startGame();
    game = new Game();
  });
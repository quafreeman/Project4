/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const game = new Game();


//this clicks to generate all the buttons to start
$("#btn__reset").on('click', function (event) {
  game.startGame(event);
});

$('.key').on("click", function (event) {
  let letter = event.target.textContent;
  game.handleInteraction(letter);
});
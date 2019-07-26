/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
//this function clicks to generate all the buttons to start
 $("#btn__reset").on("click", function() {
    game.startGame();
    game = new Game();
  });

  $('.key').on("click", function(event){
    game.handleInteraction(event); 
  });

const keyButton=document.querySelectorAll('.key');
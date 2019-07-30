/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
//the constructor method
class Game {
    constructor() { // a block of code that is called the instant the object is created.
        this.missed = 0; //startes misses at 0
        this.phrases = [ //calls phrases into the array
            new Phrase('Live life to the fullest and focus on the positive'),
            new Phrase('Be brave enough to live life creatively'),
            new Phrase('Alls well that ends well'),
            new Phrase('A crowns no cure for a headache'),
            new Phrase('A blind person who sees is better than a seeing person who is blind')
        ];
        this.activePhrase = null; // displays null which is no value

    }

    //this function generates a random Phrase
    getRandomPhrase() {
        const index = Math.floor(Math.random() * this.phrases.length); //used mathFloor to generate my random Phrase
        return this.phrases[index];
    }
    //this begins the start of the game.
    startGame() {
        $("#overlay").hide(); //hides overlay and adds it
        this.activePhrase = this.getRandomPhrase(); //Gets random phrase 
        this.activePhrase.addPhraseToDisplay(); //displays random Phrase when the game starts
    }
    //** */ this checks to see if he button clicked by the player matches 
    //a letter in the phrase, and then directs the game based on a correct or incorrect guess. 

    handleInteraction(letter) {
        const button = $(`.key:contains(${letter})`);
        button.attr("disabled", true);
        if (!this.activePhrase.checkLetter(letter)) {
            button.addClass("wrong");
            this.removeLife();
        } else {
            button.addClass("chosen");
            this.activePhrase.showMatchedLetter(letter);
            if (this.checkForWin()) {
                this.gameOver(true);
            }
        }
    }

    //** */this function checks to see if the player wins, 
    //** */it will show the gameover screen to a winning screen reset the game and hearts   
    checkForWin() {
        if ($(".show").length == $('.letter').length) {
            this.gameOver(true);
        }
    }
    //this shows whether the player won or lost the game.
    gameOver(gameWon) {
        $('#overlay').show().removeClass('start');
        if (gameWon == true) {
            $("#game-over-message").empty().append('Oh yeah! You did it!'); //appends the message on empty parameter 
            $("#overlay").removeClass("lose").addClass("win"); //calls message onto the class
        } else {
            $("#game-over-message").empty().append('Bummer! Better luck next time!'); //appends the message on empty parameter 
            $("#overlay").removeClass("win").addClass("lose"); //calls message onto the class
        }
        this.resetGame();
    }
    //this function removes a life from the scoreboard
    removeLife() {
        var allHearts = document.querySelectorAll('img');
        var liveHeart = allHearts[this.missed];
        liveHeart.src = 'images/lostHeart.png'; //heart image

        this.missed += 1; // Replaces a heart with gray hearts when missed    
        if (this.missed === 5) { //when you miss five times, game is over
            this.gameOver(false);
        }
    }
    //this function resets game/lives 
    resetGame() {
        this.activePhrase = null;
        this.missed = 0;
        $('.tries [src="images/lostHeart.png"]').attr('src', "images/liveHeart.png", true); //resets images
        $('#phrase ul li').remove(); //removes elements
        $('.key').removeClass('chosen').removeClass('wrong').removeAttr('disabled', false); //removes the class of the keyrow
    }
}
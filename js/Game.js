/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
//the constructor method
class Game {
    constructor() { // a block of code that is called the instant the object is created.
        this.missed = 0; //startes misses at 0
        this.phrases = this.createPhrases(); //makes an array for phrases
        this.activePharse = (null); // displays null which is no value
    }
}
// creates a function of 5 Phrases
function createPhrases() {
    this.phrase = [ //calls phrases into the array
        new Phrase('Live life to the fullest, and focus on the positive.'),
        new Phrase('Be brave enough to live life creatively.'),
        new Phrase('Alls well that ends well.'),
        new Phrase('A crowns no cure for a headache.'),
        new Phrase('A blind person who sees is better than a seeing person who is blind.')

    ];
    return this.phrase;
}
//this function generates a random Phrase
function getRandomPhrase() {
    const index = Math.floor(Math.random() * this.phrase.length); //used mathFloor to generate my random Phrase
    return this.phrases[index];
}
//this function begins the start of the game.
function startGame() {
    $("#overlay").hide(); //hides overlay and adds it
    this.activePhrase = this.getRandomPhrase(); //Gets random phrase 
    this.activePhrase.addPhraseToDisplay(); //displays random Phrase when the game starts
}
//** */ this function checks to see if he button clicked by the player matches 
//a letter in the phrase, and then directs the game based on a correct or incorrect guess. 
function handleInteraction(button) {
    $(button).attr("disabled", true); //if the button clicks and its disabled then its true
    if (!this.activePhrase.checkLetter($(button).text())) {
        $(button).addClass("wrong"); //adds class as "wrong"
        this.removeLife(); //removes life from the game
    } else {
        $(button).addClass("chosen"); //adds class as "chosen"
        this.activePhrase.showMatchedLetter($(button).text());
        if (this.checkForWin()) { //checks for win
            this.gameOver(true);
        }
    }
}
//** */this function checks to see if the player wins, 
//** */it will show the gameover screen to a winning screen reset the game and hearts   
function checkForWin() {
    const letter = $('.letter'); //grabs letters
    const show = $('.show'); //shows the letters
    if (letter.length === show.length) {
        this.gameOver(true); //means the player won and the game is over
    }
}
//this function shows whether the player won or lost the game.
function gameOver() {
    if (gameOver == true) {
        $("#game-over-message").empty().append('Oh yeah! You did it!'); //appends the message on empty parameter 
        $("#overlay").removeClass("start").addClass("win"); //calls message onto the class
    } else {
        $("#game-over-message").empty().append('Bummer! Better luck next time!'); //appends the message on empty parameter 
        $("#overlay").removeClass("start").addClass("win"); //calls message onto the class
    }
    this.activePhrase = ""; // calls activePhrase onto an empty string so it won't input onto the keyboard
    $(".key").attr("disabled", false).removeClass("chosen").removeClass("wrong");
      
    $(".tries img").attr("src", "images/liveHeart.png");//this code resets the hearts on the game.
}
//this function removes a life from the scoreboard
function removeLife(){
    var liveHeart=allHearts[this.missed];
    liveHeart.src='images/lostHeart.png';//heart image
    var allHearts=querySelectorAll('img');
    this.missed += 1;  // Replace a heart with gray hearts when missed    
    if(this.missed === 5) { //when you miss five times, game is over
        this.gameOver();   
    } 
}
//this function resets game/lives 
function resetGame(){
$('#phrase ul li').remove();//removes elements
$('.keyrow button').removeClass('chosen').removeClass('wrong').removeAttr('disabled');//removes the class of the keyrow
$('.tries [src="images/lostHeart.png"]').attr('src', "images/liveHeart.png");//resets images
}

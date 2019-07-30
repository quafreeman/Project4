/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
//this creates a display for the Phrases & will add spaces to the screen.
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay() {
        let list = $('#phrase ul');
        for (let i = 0; i < this.phrase.length; i++) { // a for loop for the list of letters
            let letter = this.phrase.charAt(i);
            if (letter === " ") { //calls letters onto an empty string
                list.append(`<li class="space"> </li>`); //appends the spaces onto the list
            } else {
                list.append(`<li class="hide letter ${letter}">${letter}</li>`);
            }
        }
    }

    //this is checking to see if the letters are on the display
    checkLetter(letter) {
        for (let index = 0; index < this.phrase.length; index++) {
            if (this.phrase.includes(letter)) { //if the phrase includes the letters it will display
                return true; // if the letters return to display then it is true
            } else {
                return false;
            }
        }
    };

    //this function is to show the letters that match the display
    showMatchedLetter(letter) {
        $(`li.letter:contains(${letter})`).removeClass('hide').addClass('show'); //shows the list of letters   
    }
};
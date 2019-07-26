/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
//this function creates a display for the Phrases & will add spaces to the screen.
class Phrase {
    addPhraseToDisplay() {
        $('phrase ul'); //grabs phrase and ul 
        let list = $('#phrase ul');
        for (let index = 0; index < list.length; index++) { // a for loop for the list of letters
            let letters = this.phrase.charAt(index);
            if (letters === "") { //calls letters onto an empty string
                list.append('<li class="space"></li>'); //appends the spaces onto the list
            } else {
                list.append('<li class="hide letter e">e</li>'); //appends the class li to hide the letter e
            }
        }

    }

};
//this function is checking to see if the letters are on the display
function checkLetter(letters){
    if (this.Phrase.includes(letters)) { //if the phrase includes the letters it will display
        return true; // if the letters return to display then it is true
    } else {
        return false;
    }
};
//this function is to show the letters that match the display
function showMatchedLetter(letters){
    let list = $('#phrase ul');//grabs phrase and ul 
    for(let index = 0; index <list.length; index++) // a for loop for the list of letters
    if(list[index].textContent.toLowerCase() == letters.toLowerCase()){//gets the text content to lowercase letters for the display
        $(list[index]).removeClass('hide').addClass('show');//shows the list of letters 
    }
};
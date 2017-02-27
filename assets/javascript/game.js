//Generate a number to guess
    var givenNumber = Math.floor(Math.random() * 120) + 19;
//Generate the values for each crystal
    var crystalOne = Math.floor(Math.random() * 12) + 1,
        crystalTwo = Math.floor(Math.random() * 12) + 1,
        crystalThree = Math.floor(Math.random() * 12) + 1,
        crystalFour = Math.floor(Math.random() * 12) + 1;
//set initial values for var to 0
    var wins = 0,
        losses = 0,
        total = 0;
function reset() {
    //Generate a number to guess
    givenNumber = Math.floor(Math.random() * 120) + 19;
//Generate the values for each crystal
        crystalOne = Math.floor(Math.random() * 12) + 1,
        crystalTwo = Math.floor(Math.random() * 12) + 1,
        crystalThree = Math.floor(Math.random() * 12) + 1,
        crystalFour = Math.floor(Math.random() * 12) + 1;
    total = 0
    $('.number').html(givenNumber)
}
$(document).ready(function () {
    //Displays the number you need to guess on the page.
    $('.number').html(givenNumber)
    // build the on click event for each crystal.
    $('.crystalOne').click(function () {
            update(crystalOne);
    });
    $('.crystalTwo').click(function () {
            update(crystalTwo);
    });
    $('.crystalThree').click(function () {
            update(crystalThree)
    });
    $('.crystalFour').click(function () {
            update(crystalFour)
    });
    function update(color) {
        // Increases the total guess by the value of the chosen crystal.
        total += color
        // Removes the old total and replaces it with the new total.
        $('.guessDisplay').empty();
        $('.guessDisplay').append(total)

        // Checks to see if you win or lose.
        if (total > givenNumber) {

            losses++
            // Adds a loss.
            $('.lossesDisplay').html(losses)
            // Displays updated losses.
            reset()
            // Calls the reset function to reset the game.
        }
        else if (total === givenNumber) {

            wins++
            // Adds a win.
            $('.winsDisplay').html(wins)
            //display updated wins
            reset()
            // calls the reset function
        }
    }
})

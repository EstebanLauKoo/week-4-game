$(document).ready(function () {
//Generate a number to guess
    var givenNumber = Math.floor(Math.random() * 120) + 19;
    console.log(givenNumber)
//Generate the values for each crystal
    var crystalOne = Math.floor(Math.random() * 12) + 1,
        crystalTwo = Math.floor(Math.random() * 12) + 1,
        crystalThree = Math.floor(Math.random() * 12) + 1,
        crystalFour = Math.floor(Math.random() * 12) + 1;
    console.log(crystalFour)
//set initial values for var to 0
    var wins = 0,
        losses = 0,
        total = 0

//Displays the number you need to guess on the page.
    $('.number').html(givenNumber)
// build the on click event for each crystal.
    $('.crystalOne').click(function () {
            update(crystalOne);
    })
    $('.crystalTwo').click(function () {
        update(crystalTwo);
    })
    $('.crystalThree').click(function () {
        update(crystalThree)
    })
    $('.crystalFour').click(function () {
        update(crystalFour)
    })
//reset function when you lose or win the game.
    reset: function reset() {
    //generates a new number to guess
    //Generate a number to guess
    var givenNumber = Math.floor(Math.random() * 120) + 19;
    console.log(givenNumber)
    //Generate the values for each crystal
    var crystalOne = Math.floor(Math.random() * 12) + 1,
        crystalTwo = Math.floor(Math.random() * 12) + 1,
        crystalThree = Math.floor(Math.random() * 12) + 1,
        crystalFour = Math.floor(Math.random() * 12) + 1;
    console.log(crystalFour)
        total = 0

    }
    function update(color) {
        // Increases the total guess by the value of the chosen crystal.
        total += color
        // Removes the old total and replaces it with the new total.
        $('.guessDisplay').empty();
        $('.guessDisplay').append(total)
        console.log(total)
        // Checks to see if you win or lose.
        if (total > givenNumber) {
            losses++
            // Adds a loss.
            $('.lossesDisplay').html(losses)
            // Displays updated losses.
            reset();
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

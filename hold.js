// game object (in larger games we would store more than just score)
let game = {
    totalScore: 0,
    diceArray: []
}




// single "global" dice object
let dice = {
    value: 0,
    roll() {
        this.value = Math.ceil( Math.random() * 6 ) // gir tilfeldig heltall mellom 1 og 6
    },
    isHeld: false // this value is false by default, except if the player clicks this dice then it is true
}

// dice factory example

function createDice() {
    return {
        value: 0,
        roll() {
            this.value = Math.ceil( Math.random() * 6 ) // gir tilfeldig heltall mellom 1 og 6
        },
        isHeld: false // this value is false by default, except if the player clicks this dice then it is true
    }
}










// score element
let scoreElement = document.querySelector("#score")

// dice elements
let diceAElement = document.querySelector("#dice-a")

// event handler function for dice A
function holdDiceA() {
    console.log("keep dice A!")

    // change background color (To show user this dice is held)
    diceAElement.style = "background-color: #333;"

    // make the game not roll this dice???

}
diceAElement.addEventListener("click", holdDiceA)

let diceBElement = document.querySelector("#dice-b")

// roll dices button
let rollButton = document.querySelector("#roll")

// function rolls all available dices
function rollDices() {
    // roll the first dice
    game.diceArray.push(createDice())

    // check length of the diceArray:
    let lastDiceIndex = game.diceArray.length - 1// length-1 gives us access to the very last element in the array, which we can then use to "roll the newly created dice" 

    // roll the new dice:
    game.diceArray[lastDiceIndex].roll() 

    console.log(game.diceArray)


    //console.log(game.diceArray)

    /* 
    dice.roll()
    diceAElement.textContent = dice.value
    // add the first dice value to the totalScore
    game.totalScore += dice.value

    // roll the second dice
    dice.roll()
    diceBElement.textContent = dice.value
    // add the second dice value to the totalScore
    game.totalScore += dice.value

    scoreElement.textContent = game.totalScore
    */
}

rollButton.addEventListener("click", rollDices)



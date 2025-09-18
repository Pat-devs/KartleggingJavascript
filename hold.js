// game object (in larger games we would store more than just score)
let game = {
    totalScore: 0
}

// single dice object
let dice = {
    value: 0,
    roll() {
        this.value = Math.ceil( Math.random() * 6 ) // gir tilfeldig heltall mellom 1 og 6
    }
}

// score element
let scoreElement = document.querySelector("#score")

// dice elements
let diceAElement = document.querySelector("#dice-a")
let diceBElement = document.querySelector("#dice-b")

// roll dices button
let rollButton = document.querySelector("#roll")

// function rolls all available dices
function rollDices() {
    // roll the first dice
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
}

rollButton.addEventListener("click", rollDices)
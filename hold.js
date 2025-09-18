// single dice object
let dice = {
    value: 0,
    roll() {
        this.value = Math.ceil( Math.random() * 6 ) // gir tilfeldig heltall mellom 1 og 6
    }
}

// dice elements
let diceAElement = document.querySelector("#dice-a")
let diceBElement = document.querySelector("#dice-b")


// diceAElement.addEventListener("click", testDice)


// roll dices button
let rollButton = document.querySelector("#roll")

// function rolls all available dices
function rollDices() {
    dice.roll()
    diceAElement.textContent = dice.value
}

rollButton.addEventListener("click", rollDices)
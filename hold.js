// single dice object
let dice = {
    value: "Hei navnet mitt er Patryk",
    roll() {
        this.value = Math.ceil( Math.random() * 6 ) // gir tilfeldig heltall mellom 1 og 6
    }
}

console.log(dice)

dice.roll()

console.log(dice.value)

// elements
let diceAElement = document.querySelector("#dice-a")

// 
function testDice() {
    dice.roll()
    diceAElement.textContent = dice.value
}

// diceAElement.addEventListener("click", testDice)


let diceBElement = document.querySelector("#dice-b")

let rollButton = document.querySelector("#roll")

rollButton.addEventListener("click", testDice)


dice.roll()

console.log(dice.value)
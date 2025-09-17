// Yahtzee

// Rounding methods:
// Math.round -- Rounds to nearest integer, f.eks: 2.5 = 3, 2.499 = 2 osv...
// Math.floor -- Rounds Down to nearest integer, f.eks: 2.5 = 2, 2.99999 = 2 osv...
// Math.ceil -- Rounds Up to nearest integer, f.eks: 2.5 = 3, 2.000001 = 3

// let dice1 = Math.floor( Math.random() * 6 ) // gir tilfeldig heltall mellom 0 og 5
// let dice2 = Math.ceil( Math.random() * 6 ) // gir tilfeldig heltall mellom 1 og 6



// 1. Can roll a dice

// 2. Can compare different dice rolls?

// 3. Can give score based on dice rolls 

let value1 = 0
let value2 = 0



// We want this function to roll a dice result and return it, so that we can do something with it later
// not just console.log it.
function diceRoll() {

    let dice = Math.ceil( Math.random() * 6 ) // gir tilfeldig heltall mellom 1 og 6
    // console.log("Your lucky number is ", dice)

    return dice
    //value1 = dice
}

// diceRoll()

function giveMe5() {
    return dice
}

let something = giveMe5()

console.log(giveMe5())
console.log(giveMe5())
console.log(giveMe5())
console.log(giveMe5())
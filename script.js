// Yahtzee

// Rounding methods:
// Math.round -- Rounds to nearest integer, f.eks: 2.5 = 3, 2.499 = 2 osv...
// Math.floor -- Rounds Down to nearest integer, f.eks: 2.5 = 2, 2.99999 = 2 osv...
// Math.ceil -- Rounds Up to nearest integer, f.eks: 2.5 = 3, 2.000001 = 3

// let dice1 = Math.floor( Math.random() * 6 ) // gir tilfeldig heltall mellom 0 og 5
// let dice2 = Math.ceil( Math.random() * 6 ) // gir tilfeldig heltall mellom 1 og 6




let value1;
let value2;


// let isPair = false

let score = 0

// We want this function to roll a dice result and return it, so that we can do something with it later
// not just console.log it.
function diceRoll() {

    let dice = Math.ceil( Math.random() * 6 ) // gir tilfeldig heltall mellom 1 og 6
    // console.log("Your lucky number is ", dice)

    return dice // this statement allows the function to give back a value from its callee
}

// mer om return statmenent: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return


value1 = diceRoll() 
value2 = diceRoll()

// console.log("You got: ", value1, value2)


// calculate player score

// the score is the sum of two dice
// if dices match, score is mulitplied by 2

// example: dices: 1 & 2 = score of 3
// example2: dices: 3 & 3 = score 6 x 2 = 12

score = value1 + value2

// if dices are same, double the score
if (value1 == value2) {
    score = score * 2

}

// console.log("Your score is ", score)

// eksemepl liste (eller Array på engelsk)
let myArray = [135, 7856,1624,2457]

// hente hele listen:
console.log(myArray)

// hente bare deler fra listen:

console.log(myArray[0], myArray[3])

let num1 = 2
let num2 = 2

console.log(num1 + num2)

let groceryShoppingList = []

// add one item to end of the array
groceryShoppingList.push("bread")


// add two items  to end of the array at once
groceryShoppingList.push("butter", "milk")

console.log(groceryShoppingList)
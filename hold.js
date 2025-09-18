
// a person 

// let name = "Patryk"
// let age = 45
// let city = "Porsgrunn"
// let gender = "Male"

// a person as an object

// to declare an object we still use "let nameOfVariable and = " but then we add {} 
let person = {
    name: "Patryk",
    age: 46,
    city: "Porsgrunn",
    gender: "Male",
    greet() {
        console.log("Hi my name is ", this.name, " I am ", this.age, " and i live in ", this.city)
    } 
}

let person2 = {
    name: "Bob",
    age: 33,
    city: "Bergen",
    gender: "Male",
    greet() {
        console.log("Hi my name is ", this.name, " I am ", this.age, " and i live in ", this.city)
    } 
}

// function declaration
function greet() {
    console.log("Hi am just a function")
} 

greet()

person.greet()

person2.greet()

// console.log(person)


// Accessing a specific object property, syntax: Object.propertyname
// example: person.age:
// console.log(person.age)

person.age += 5 
person.city = "Oslo"


// console.log(person)



















function diceRoll() {

    let dice = Math.ceil( Math.random() * 6 ) // gir tilfeldig heltall mellom 1 og 6
    // console.log("Your lucky number is ", dice)

    return dice // this statement allows the function to give back a value from its callee
}

/*
    
    <button id="dice-a">A</button>
    <button id="dice-b">B</button>
*/

// elements
let diceAElement = document.querySelector("#dice-a")
let diceBElement = document.querySelector("#dice-b")

let rollButton = document.querySelector("#roll")

// dice values
let diceAValue = 0
let diceBValue = 0

// dices held?
let diceAisHeld = false
let diceBisHeld = false



diceAElement.addEventListener("click", holdDiceA)
// diceAElement.addEventListener("click", holdDiceB)

function holdDiceA() {
    if (diceAisHeld == false) {
        diceAisHeld = true
    }

    console.log(diceAisHeld)
}

// roll button logic

rollButton.addEventListener("click", rollDices)

function rollDices() {
    if (diceAisHeld == false) diceAValue = diceRoll()
    if (diceBisHeld == false) diceBValue = diceRoll()

    console.log(diceAValue, diceBValue)
}
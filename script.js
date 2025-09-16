// get the current number element
let currentNumberEl = document.querySelector("#current-number")
console.log(currentNumberEl)
// get the button elements and store them as variables, for ease of access

let buttonPlus = document.querySelector("#button-plus")
let buttonMinus = document.querySelector("#button-minus")

// set number to a value with the assignment operator (=)
let number = 0

// Function increases the variable called number with + 1
// And then displays that number in the textContent property of an element called currentNumberEl
function increase() {
    number = number + 1 // increment the number
    currentNumberEl.textContent = number // change the html text to a value
}

buttonPlus.addEventListener("click", increase)

// buttonMinus.addEventListener("click", decrease)


// Conditionals in javascript













// check if number is equal to with the comparison operator (==)
if (number == 5) {
    console.log("Great news, the number is 5!")
}

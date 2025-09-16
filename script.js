// get the current number element
let currentNumberEl = document.querySelector("#current-number")
// get the button elements and store them as variables, for ease of access


// set number to a value with the assignment operator (=)
let number = 0



let buttonPlus = document.querySelector("#button-plus")
// Function increases the variable called number with + 1
// And then displays that number in the textContent property of an element called currentNumberEl
function increase() {
    number = number + 1 // increment the number
    currentNumberEl.textContent = number // change the html text to a value

    // run the function that checks the condition
    checkCondition()
}

buttonPlus.addEventListener("click", increase)




let buttonMinus = document.querySelector("#button-minus")
// Function increases the variable called number with + 1
// And then displays that number in the textContent property of an element called currentNumberEl
function decrease() {
    number = number - 1 // increment the number
    currentNumberEl.textContent = number // change the html text to a value
}

buttonMinus.addEventListener("click", decrease)



// buttonPlus.addEventListener("click", checkCondition)



function checkCondition() {
    // Conditionals in javascript

    // check if number is equal to with the comparison operator (==)
    if (number == 5) {
        console.log("Great news, the number is 5!")
    }
    else {
        console.log("The number is not 5 yet...")
    }

}
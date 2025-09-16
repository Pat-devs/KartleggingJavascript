// get the button elements and store them as variables, for ease of access


let buttonPlus = document.querySelector("#button-plus")
let buttonMinus = document.querySelector("#button-minus")

// set number to a value with the assignment operator (=)
let number = 0


// increase logic:
function increase() {
    console.log("Number is: ",  number)
    
    // increment a number in javascript:
    
    // different ways to increment a number:

    // number = number + 1
    // number += 1
    // number++
    // ++number
}

buttonPlus.addEventListener("click", increase)

// buttonMinus.addEventListener("click", decrease)


// Conditionals in javascript













// check if number is equal to with the comparison operator (==)
if (number == 5) {
    console.log("Great news, the number is 5!")
}

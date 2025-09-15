// Mission: Get both buttons to work


// I. Handle the green-color button:

// 1. Grab the button element with querySelector:
let buttonElementGreen = document.querySelector("button")
// 2. To see if it worked, we can then console.log it.
console.log(buttonElementGreen)
// 3. Try to use addEventListener...


function makeItGreen() {
    // Function shall change the color of the H1 element to green

    // 1. Grab the h1 element:
    let h1Element = document.querySelector("h1")
    // console.log(h1Element)
    h1Element.style = "color: green;"
}

buttonElementGreen.addEventListener("click", makeItGreen)





// II. Handle the red-color button:
// 1. Grab the red-button element with querySelector:
let buttonElementRed = document.querySelector("#button-red")
// 2. To see if it worked, we can then console.log it.

// 3. Try to use addEventListener...


function makeItRed() {
    // Function shall change the color of the H1 element to green

    // 1. Grab the h1 element:
    let h1Element = document.querySelector("h1")
    // console.log(h1Element)
    h1Element.style = "color: red;"
}

buttonElementRed.addEventListener("click", makeItRed)
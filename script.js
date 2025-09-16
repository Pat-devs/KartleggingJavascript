
// Grab the h1 element:
let h1Element = document.querySelector("h1")
// Grab the green button element by tagname
let buttonElementGreen = document.querySelector("#button-green")
// Grab the red button element by tagname
let buttonElementRed = document.querySelector("#button-red")
// Grab the red button element by tagname
let buttonElementBlack = document.querySelector("#button-blackß")


function makeItGreen() {
    // h1Element.style = "color: green;" // bruke class
    h1Element.classList.add("green-text")
}

buttonElementGreen.addEventListener("click", makeItGreen)


function makeItRed() {
    h1Element.classList.add("red-text")
}

buttonElementRed.addEventListener("click", makeItRed)

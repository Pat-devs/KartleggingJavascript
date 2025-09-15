// grab the button element from our page
let buttonElement = document.querySelector("button")


function changeH1Color () {
    randomColor()
    // document.querySelector("h1").style = "color: green;"
}

buttonElement.addEventListener("click", changeH1Color)




console.log("hi")

console.log(2 - 1)

console.log(buttonElement)


// Math.random() gir oss et tall mellom 0.0 og 1.0

// console.log(Math.random() * 100)

// Random color example implementation:

// Color is an RGB value, in css: rgb(0,0,0) - rgb(255,255,255), rgb(255,0,0)

console.log(Math.random() * 255)
console.log(Math.random() * 255)
console.log(Math.random() * 255)

function randomColor() {

    let redValue = Math.random() * 255
    let greenValue = Math.random() * 255
    let blueValue = Math.random() * 255

    console.log("here is your random color: ")
    console.log(redValue, greenValue, blueValue)

    document.querySelector("h1").style = "color: rgb(" +  redValue + "," + greenValue + "," + blueValue + ");"
}

randomColor()
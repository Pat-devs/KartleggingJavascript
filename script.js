// how to select a html tag with JS:
/* With CSS we would:
h1 {
  color: red;
}
*/

// as above in JS
// document.querySelector("h1").style = "color: red;"



// listen to a button click


// grab the button element from our page
let buttonElement = document.querySelector("button")
// console.log(buttonElement) // sjekk at buttonElement virker, hvis det står null i konsollen da virker den ikke

// create a function that does something

// 1. use the keyword function to declare a function
// 2. followed by a name of your choice, ex: minFunksjon
// 3. followed by ()
// 4. followed by {}
// function specific code goes inside the { ..  }

function minFunksjon () {
    console.log("HEIHEI")
    document.querySelector("h1").style = "color: green;"
    // here we can do something :)
}

// Gå inni buttonElement
// Legg til en event-listener
// Parameter 1: Type of event, in our case "click"
// Parameter 2: Provide some function to run
buttonElement.addEventListener("click", minFunksjon)


/* 
document.querySelector("button").addEventListener("click", function() {
    console.log("Hi")
})
*/



// make h1 green

let userAge = 55


// children, adults, seniors


// 1. check if user is a child
// audult er mellom 18 og 59 
if (userAge >= 18 && userAge <= 59) { // && betyr "og"
    console.log("user is between 18 and 59 years old")
}
else {
    console.log("user is either under 18 or above 59")
}


// logical or example
if (userAge <= 17 || userAge >= 60) { // hvis bruker er under 18 eller over 59
    console.log("user is under 18 or over 59")
}
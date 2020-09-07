//onclick
function mountainFunction() {
    document.getElementById("demo1").innerHTML = "Yes! Mountains Are Cool!"
}
//for loop
var mountainsAre = ["tall.", "heavy.", "wet.", "rocky.", "covered in trees."]

var text = ""
for (var i = 0; i < mountainsAre.length; i++) {
    console.log(i)
    text += "Mountains are " + mountainsAre[i] + "<br>";
}
document.getElementById("demo2").innerHTML = text;

var favDogs = ["dalmation.", "husky.", "german shepard.", "border collie."]
var text = ""
for (var i = 0; i < favDogs.length; i++) {
    console.log(favDogs[i])
    text += "My favorite dog is a " + favDogs[i] + "<br>";
}
document.getElementById("demo3").innerHTML = text

//Conditional Statement
var price = 10
if (price === 10) {
    console.log("Price is exact!")
} else if (price < 10) {
    console.log("Price too low!")
} else {
    console.log("Price is too high!")
}
//Object and dot notation
var mountain = {
    name: "Boulder Mountain",
    elevation: 123456
}
console.log(mountain)
//Create an array and navigate that array using bracket notation
var dogs = ["dalmation", "husky", "german shepard"]
console.log(dogs[2])
//for loop
for (var i = 10; i < 44; i++) {
    console.log(i)
}
for (var i = 100; i < 144; i++) {
    console.log(i)
}

var color = 'red'
if (color === 'yellow') {
    console.log("color is red!")
} else if (color === 'red') {
    console.log("color too yellow!")
} else {
    console.log("color is too high!")
}
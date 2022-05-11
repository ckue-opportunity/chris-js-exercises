// normal function
function addNumbers1(a, b) {
  	return a + b;
}
addNumbers1(2,4);

// arrow function (with min. two parameter)
const addNumbers2 = (a, b) => {
  	return a + b;
}
addNumbers2(2,4);

// arrow function without parameters
const horn = () => {
  console.log("Toot");
}
horn();

// arrow function with one parameter
const square1 = (x) => {
  return x * x
}
square1(2);

// arrow function with one parameter and one expresson
// doesn't need a return
// const square2 = x => x * x;
// square2(2);

// ============== MORE EXAMPLES ==============

// setInterval examples
const element1 = document.getElementById("demo1");
setInterval(function() {
  element1.innerHTML += "Hello "
}, 2000); // execute every two seconds

const element2 = document.getElementById("demo2");
setInterval(() => {
  element2.innerHTML += "Selam "
}, 500) // execute every half second


// filter() example
const flowers = ["lily", "tulip", "hyacinth", "chrysanthemum", "freesia", "gladiolus", "anemone"];

let getFlowerNames1 = flowers.filter(flower => flower.length > 7);
// document.write(getFlowerNames1);

let getFlowerNames2 = flowers.filter(function(flower) {
  return flower.length > 7;
})
// document.write(getFlowerNames2);
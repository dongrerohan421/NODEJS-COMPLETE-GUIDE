//Create an Array
var fruits = ["Apple", "Banana"];
console.log(fruits);

//Access (index into) an Array item
var first = fruits[0];
console.log(first);
var last = fruits[fruits.length - 1];
console.log(last);

//Loop over an Array
fruits.forEach(function (item, index, array) {
    console.log("item: " + item, ", index: " + index);
});

//Add to the end of an Array
var newLength = fruits.push("Orange");
console.log(fruits);

//Remove from the end of an Array
var last = fruits.pop();
console.log(fruits);

//Remove from the front of an Array
var first = fruits.shift();
console.log(fruits);

//Add to the front of an Array
var newLength = fruits.unshift("Strawberry");
console.log(fruits);
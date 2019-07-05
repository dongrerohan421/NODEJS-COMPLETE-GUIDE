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

//Find the index of an item in the Array
fruits.push("Mango");
var position = fruits.indexOf("Banana");
console.log("position of Banana is: " + position);
console.log(fruits);

//Remove an item by index position
var removeItem = fruits.splice(position, 1); // this is how to remove an item
console.log(fruits);

//Remove items from an index position
var vegetables = ["Cabbage", "Turnip", "Raddish", "Carrot"];
console.log(vegetables);
console.log("vegetables: " + vegetables);

var pos = 1,
    n = 2;

var removedItems = vegetables.splice(pos, n);
// this is how to remove items, n defines the number of items to be removed,
// from that position(pos) onward to the end of array.

console.log(vegetables);
console.log(removedItems);

// Copy an Array
var shallowCopy = fruits.slice(); // this is how to make a copy
console.log(fruits);
console.log(shallowCopy);
var shallowCopyPos = fruits.slice(0, 1); // this is how to make a copy
console.log(shallowCopyPos);
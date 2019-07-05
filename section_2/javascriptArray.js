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
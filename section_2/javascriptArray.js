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

//Accessing array elements
var arr = ['this is the first element', 'this is the second element', 'this is the last element'];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[arr.length - 1]);

// console.log(arr .0); // a syntax error
var years = [1950, 1960, 1970, 1980, 1990, 2000, 2010];
// console.log(years .0); // a syntax error
console.log(years[0]);

// renderer .3 d.setTexture(model, "character.png");// a syntax error
// renderer['3d'].setTexture(model, 'character.png');
console.log(years['2'] != years['02']);

var promise = {
    'var': 'text',
    'array': [1, 2, 3, 4]
};
console.log(promise.var);
console.log(promise.array);
console.log(promise);

//Relationship between length and numerical properties
var fruits = [];
fruits.push('banana', 'apple', 'peach');
console.log(fruits.length);

fruits[5] = 'Mango';
console.log(fruits[5]); // 'mango'
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); //6

//Increasing the length
fruits.length = 10;
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); //10

//Decreasing the length
fruits.length = 2;
console.log(Object.keys(fruits)); // ['0', '1']
console.log(fruits.length); //2

//Creating an array using the result of a match
// Match one d followed by one or more b's followed by one d
// Remember matched b's and the following d
// Ignore case
var myRE = /d(b+)(d)/i;
var myArray = myRE.exec('ccdbBdbsbz');
console.log(myRE);
console.log(myArray);
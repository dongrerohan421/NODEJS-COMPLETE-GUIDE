//source:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor

// The constructor property returns a reference to the Object constructor
// function that created the instance object.Note that the value of this property is a reference to the
// function itself, not a string containing the
// function 's name. The value is only read-only for primitive values such as 1, true and "test".

// Description:
// All objects(with the exception of objects created with Object.create(null)) will have a constructor property.
// Objects created without the explicit use of a constructor
// function (i.e.the object and array literals) will have a constructor property that points to the Fundamental Object constructor type
// for that object.

var o = {};
o.constructor() === Object; //true
console.log(o.constructor());

var o = new Object;
o.constructor === Object; //true
console.log(o.constructor());

var a = [];
a.constructor === Array; // true
console.log(a.constructor);

var a = new Array;
a.constructor === Array; // true
console.log(a.constructor);

var n = new Number(3);
n.constructor === Number; // true
console.log(n.constructor() + '\n');


// Examples:
// Displaying the constructor of an object:
// The following example creates a constructor, Tree, and an object of that type, theTree. 
// The example then displays the constructor property for the object theTree.
function Tree(name) {
    this.name = name;
}

var theTree = new Tree('Redwood');
console.log('theTree.constructor is: ' + theTree.constructor);
console.log('\ntheTree.name is: ' + theTree.name + '\n\n');

//Changing the constructor of an object:
//The following example shows how to modify constructor value of generic objects. 
//Only true, 1 and "test" will not be affected as they have read-only native constructors. 
//This example shows that it is not always safe to rely on the constructor property of an object.
function Type() {}

var types = [
    new Array(),
    [],
    new Boolean(),
    true, // remains unchanged
    new Date(),
    new Error(),
    new Function(),
    function () {},
    Math,
    new Number(),
    1, // remains unchanged
    new Object(),
    {},
    new RegExp(),
    /(?:)/,
    new String(),
    'text' // remains unchanged
];

for (var i = 0; i < types.length; i++) {
    types[i].constructor = Type;
    types[i] = [types[i].constructor, types[i] instanceof Type, types[i].toString()];
}

console.log(types.join('\n'));

//Changing the constructor of a function:
//Mostly this property is used for defining a function as a function-constructor 
//with further calling it with new and prototype-inherits chain.
function Parent() {}
Parent.prototype.parentMethod = function parentMethod() {};

function Child() {}
Child.prototype = Object.create(Parent.prototype); //re-define child prototype to Parent prototype

Child.prototype.constructor = Child; // return original constructor to Child
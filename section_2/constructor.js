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
console.log('\ntheTree.name is: ' + theTree.name);
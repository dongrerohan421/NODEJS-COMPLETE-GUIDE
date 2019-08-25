const name = "Max";
let age = 29;
const hasHobbies = true;

//let allows to override the value
age = 30;

const summerizeUser = (userName, userAge, userHasHobbies) => {
    return "Name is " + userName + ", age is " + userAge + " and the user has hobbies: " + userHasHobbies;
};

// const add = (a, b) => {
//     return a + b;
// };

const add = (a, b) => a + b;
const addOne = (a) => a + 1;
const addRandom = () => 2 * 3;

console.log(add(1, 2));
console.log(addOne(1));
console.log(addRandom());
console.log(summerizeUser(name, age, hasHobbies));


//object contains key-value pairsand function
const person = {
    name: "Max",
    age: 29,
    greet() {
        console.log("Hi I am " + this.name);
    }
};

person.greet();
console.log(person);
console.log(person.greet);

//spread operator ...
const copiedPerson = {
    ...person
};
console.log('copiedPerson: ');
console.log(copiedPerson);


//javascript array defined on [] paranthesis
const hobbies = ["Sports", "Cooking"];
// for (let hobby of hobbies) {
//     console.log(hobby);
// }
console.log(hobbies.map(hobby => "Hobby " + hobby));
console.log(hobbies);

hobbies.push("Programming");
console.log(hobbies);

//spread operator ...
const copiedArray = [...hobbies];
console.log('copiedArray:');
console.log(copiedArray);

//Rest operator ...
const toArray = (...args) => {
    return args;
};

console.log(toArray(1, 2, 3, 4));
console.log(toArray(1, 2, 3, 4, 7, 8)); //Rest operator allows you to add number of arguments


const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!');
        }, 1500);
    });
    return promise;
};

setTimeout(() => {
    console.log('Timer is done!');
    fetchData()
        .then(text => {
            console.log(text);
            return fetchData();
        })
        .then(text2 => {
            console.log(text2);
        });
}, 2000);

console.log('Hello!');
console.log('Hi!');
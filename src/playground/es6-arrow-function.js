//First with ES5 function
const square = function (x) {
    return x*x;
};

//Now with ES6 arrow
/*
const squareArrow = (x) => {
    return x*x;
};
*/

//Recreate using arrow function expression syntax. If an array function only returns a single 
//expression you can do this. 

const squareArrow = (x) => x * x; 

//console.log(squareArrow(9));

const getFirstName = (fullName) => {
    return fullName.split(' ')[0]
}

const getFirstNameShort = (fullName) => fullName.split(' ')[0];

console.log(getFirstName("Sam Masto"));
console.log(getFirstNameShort("Bam Basto"));



//With var based variables you can redfine and reassign, that's BAD cause accidents happen.
//different than with let and const
var nameVar = 'Sam';
var nameVar = 'Jike';
console.log('nameVar', nameVar);

//With let, you can reassign but not redifne.
let nameLet = 'Jeb';
nameLet = 'boolie';
console.log('nameLet', nameLet);

//Can neighter redefine OR reassign
const nameConst = 'Crank';
// This throws an error -> nameConst = 'Brank';
console.log('nameConst', nameConst);

//They are all function scoped. 

function getPetName() {
    const petName = 'Hal';
    return petName;
}

const petName = getPetName();
console.log(petName)

//Let and const are BLOCK scoped

var fullName = 'Jam Masto';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

//When firstName is const, will not print outside the if statement
//cause it is outside the block.

console.log(firstName)
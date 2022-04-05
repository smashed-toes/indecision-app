// Arguments object - no longer bound with arrow functions. If you try to access arguments it doesn't work

const add = (a, b) => {
    //This causes an error -> console.log(arguments);
    return a + b;
}

console.log(add(55, 1, 1001));

// This keyword - no longer bound


const user = {
    name: 'Sam',
    cities: ['San Francisco', 'Los Angeles', 'New York'],
    printPlacesLived() {
        //map takes an array, transforms it with a given item
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number*this.multiplyBy);
    }
};

console.log(multiplier.multiply())

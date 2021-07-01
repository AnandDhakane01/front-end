
// using bind function
let runner = {
    name: 'Runner',
    run: function(speed) {
        console.log(this.name + ' runs at ' + speed + ' mph.');
    }
};

let flyer = {
    name: 'Flyer',
    fly: function(speed) {
        console.log(this.name + ' flies at ' + speed + ' mph. ');
    }
}

let run = runner.run.bind(flyer, 20);
//run();

// using call function
const person1 = {
    firstName: "something",
    lastName: "else",

    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

const person2 = {
    firstName: "Anand",
    lastName: "Dhakane",
}

// console.log(person1.fullName.call(person2));
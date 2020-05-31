class Person {
    constructor(name, age = 0) {
        this.name = name ? name : 'Anonymous';
        this.age = age;
    }

    getGreeting() {
        return `Hi I am ${this.name} ${this.age} year(s) old.`
    }
}

class Traveller extends Person {
    constructor(name, age = 0, location) {
        super(name, age);
        this.location = location;
    }

    getGreeting() {
        let message = super.getGreeting();
        return message + ` I travelled to ${this.location}!`
    }

}

let person = new Person('Naga', 33);
console.log(person.getGreeting());
let traveller = new Traveller('Naga', 30, 'Himalayas');
console.log(traveller.getGreeting());
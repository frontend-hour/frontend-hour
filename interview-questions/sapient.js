function Animal(name) {
    this.name = name;
}

Animal.prototype.walk = function () {
    console.log(this.name + "is Walking");
}


function Dog(name, color) {
    Animal.call(this, name)
    this.color = color;
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.bark = function () {
    console.log(this.name + "is Barking");
}

let dog = new Dog('bruce', 'red');

dog = {
    name: 'bruce',
    color: 'red',
    __proto__: {
        bark: function () {
            console.log(this.name + "is Barking");
        },
        __proto__: {
            walk: function () {
                console.log(this.name + "is Walking");
            }
        }
    }
}

dog.walk();
dog.bark();

// ------------------------------------------------------------

let Obj = {
    name: 'sapient',
    sayName: function () {
        setTimeout(function () {
            console.log(this.name);
        }, 0)
    }
}

Obj.sayName();
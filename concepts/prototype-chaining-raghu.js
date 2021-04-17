let array1 = ['raghu', 'ram'];

let obj = {
    name: 'raghu',
    age: '28',
    myname() {
        return this.name;
    }
}

var isTrue = function () {
    return true;
}

let obj1 = Object.create(obj);

obj1.name = 'chaitu';

// obj1.__proto__ = obj;


// without class
function dumb(name, sex) {
    this.name = name;
    this.sex = sex
}

dumb.prototype.myname = function () {
    return this.name;
}

// using class
class dumb1 {
    constructor() {
        this.name = name;
        this.sex = sex;
    }
    myname() {
        return this.name;
    }
}



// Write a class representation in Javascript without using class keyword? 

// class will return an object when called with new keyword.


// using class keyword 

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }
}

var user1 = new Person('raghu', '29');

// without class keyword - 

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.getName = function () {
    return this.name;
}

var user2 = new Person('chaitu', '22')




// Write a class representation in Javascript without using class keyword?

class Javascript {
    constructor() {
    }
}
var js = new Javascript;

var obj = {};


function() {
    var count = 0;
    setTimeout((count) => count++, 1000)
    setTimeout(() => console.log('I am raghu' + count), 500);
}


var counter = 0;
var fun = function () {
    counter++;
    // Value of counter  
    let counter = 10;
}
fun();


var firstName = 'Abhishek';
var lastName = 'Aggarwal';
var personObj = {
    firstName: 'Raghu',
    lastName: 'Reddy',
    getFullName: () => {
        return this.firstName + ' ' + this.lastName;
    }
}
let newFunc = personObj.getFullName;
newFunc(); //  Abhishek Agarwal 
personObj.getFullName(); //  Raghu Reddy 
personObj.getFullName.call(window); //  Abhishek Agarwal 
newFunc.bind(personObj)(); // Raghu Reddy 





//--------------------------------- 



function Car(model, brand) {
    this.model = model;
    this.brand = brand;
}

Car.prototype.horn = function () { };
const myCar = new Car("Model", "Brand");
MyCar











// Find the length of the longest substring without repeating characters. 
// Input: s = "abcabcbb" // abc, bca, cab 
// Output: 3 
// Input: s = "pwwkew" // wke, kew 
// Output: 3 

function longestSubstring(str) {
    var strArr = str.split(‘’); // 
    Var result = [];
    For(var x = strArr[i]; x <= strArr.length; x++) {
        if (str) 
	}
}




// What is a Higher order component ?

// Function hoc (NewchildComponent) { 
// 		return ( 
// <blueContainer > 
// 		< newchildComponent ></ newchildComponent > 
// </blueContainer> 
// 		) 
// 	} 

// Function newchildComponent(props) {	 

// Return ( 

// 	<div>New child Component</div> 

// } 

// } 

// Let enchancedComp = hoc(newchildComponent); 
// Function parentComponent(props) { 
// 	Return ( 
// <enchancedComp a={1] b = {2}> </enhancedComp> 
// ); 

// } 

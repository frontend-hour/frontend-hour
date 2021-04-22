

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
// what is MyCar ?



// Find the length of the longest substring without repeating characters. 
// Input: s = "abcabcbb" // abc, bca, cab 
// Output: 3 
// Input: s = "pwwkew" // wke, kew 
// Output: 3 

// Answer which I tried writing in interview
function longestSubstring(str) {
    var strArr = str.split(‘’); // 
    var result = [];
    for (var x = strArr[i]; x <= strArr.length; x++) {
        if (str) 
	}
}


function lengthOfLongestSubstring(str) {
    let substring = '';
    let max = 0;
    for (let i = 0; i < str.length; i++) {
        let pos = substring.indexOf(str[i]);
        if (pos !== -1) {
            substring = substring.substr(pos + 1); // The substr() method returns a portion of the string, starting at the specified index and extending for a given number of characters afterwards.
        }
        substring += str[i];
        max = Math.max(max, substring.length);
    }
    return max;
};

lengthOfLongestSubstring("dvdf"); // 3

// https://gist.github.com/codediodeio/24319b9b17cba57e7a34002228abaaaf
// https://stackoverflow.com/questions/43002447/longest-substring-non-repeating-characters-javascript/65838104 



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

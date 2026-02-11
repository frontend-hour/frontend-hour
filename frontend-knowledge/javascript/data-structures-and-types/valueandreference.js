// This function here explains the JavaScript Pass By Value and Pass By Reference

// Javascript is always pass by value, but when a variable refers to an object (including arrays), the “value” is a reference to the object.
// Changing the value of a variable never changes the underlying primitive or object, it just points the variable to a new primitive or object.
// However, changing a property of an object referenced by a variable does change the underlying object.



// So Call by Value:- 

// When a variable is passed as a parameter to a function, if any changes are made to the parameter, the original variable will remain unaffected. This is known as call by value and this is true for all values having a primitive data type.

// Call by Reference:-

// When a variable’s reference(address) and not its value is passed to a function’s parameter, any changes made to the parameter will update the original variable reference. This is known as call by reference and this is true for all values having a non-primitive data type.

function change(a, b, c) {
    a = a * 10;
    b.item = "Changed";
    c = { item: "changed" };
}

var num = 10;
var obj1 = { item: "unchanged" };
var obj2 = { item: "unchanged" };

change(num, obj1, obj2);

console.log(num);
console.log(obj1.item);
console.log(obj2.item);

// Output :—
// 10
// changed
// unchanged


// Another example for Call by Reference

var myObj = {
    value: 10
}
function updateValue(objRef) {
    objRef.value = 30
}

updateValue(myObj);
console.log(myObj.value)

// 30
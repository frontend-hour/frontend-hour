// call, apply and Bind method in JavaScript





console.log(this); // window object 

const student = {
    name: 'raghu',
    getDetails() {
        console.log(this);
    }
}

console.log(student.getDetails());

const student1 = {
    name: 'raghu1',
    age: '20'
}
console.log(student.getDetails.call(student1));

// getStudentDetails() {
//     console.log(this.name + 'is of ' + this.age + 'years');
// }

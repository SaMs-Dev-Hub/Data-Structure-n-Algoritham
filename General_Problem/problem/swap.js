//JavaScript program to swap two variables
let a = prompt('Enter the first variable: ');
let b = prompt('Enter the second variable: ');
//using temp varaible
// let temp=a;
// a=b;
// b=temp;
// addition and subtraction operator
// a = a + b;
// b = a - b;
// a = a - b;
// using javascript ES6 desturucturing
[a,b]=[b,a]
console.log(`a is ${a} and b is ${b}`)
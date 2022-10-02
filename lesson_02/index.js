const string1 = prompt("Your name?");
const string2 = prompt("How old are you?");
const string3 = prompt("What do you do?");

const text = `My name is ${string1}
I am ${string2} years old
I am ${string3}`

console.log(text)

//=================================================

const number = 12345;

const numberString = String(number);
const numberStringResult = numberString[0] + " " + numberString[1] + " " + numberString[2] + " " + numberString[3] + " " + numberString[4];

console.log(numberStringResult);

//=========

const number2 = 12345;

const numberStringResult2 = String(number2).split('').join(' ');

console.log(numberStringResult2);
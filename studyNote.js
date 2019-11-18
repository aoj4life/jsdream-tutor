/*
JavaScript Data Types
In JavaScript there are 5 different data types that can contain values:

string
number
boolean
object
function
There are 6 types of objects:

Object
Date
Array
String
Number
Boolean
And 2 data types that cannot contain values:

null
undefined

*/

// simple statement must end in semi colon
// and variable declaration
// an expression return a value while a statement does not return a value
const items = document.getElementById("header");
const listItems = document.getElementsByclassName("container");
const table = document.querySelector("#items");

for (var i = 0; i < table[i].length; i++) {
  table[i].style.backgroundColor = "#f4f4f4";
  items[i].style.backgroundColor = "#f4f4f4";
}

const button = document
  .getElementById("buton")
  .addEventListener("click", buttonClick);

function buttonClick(e) {
  console.log(e);
  console.log(e.target.id);
  console.log(e.target.className);

  const output = document.getElementById("output");
  output.innerHTML = "<h3>" + e.target.id + "</h3>";
}

// this will listen to keydown event and will out whatever is typed on another DIV called output
const itemInput = document.querySelector('input[type="text"]');
//const itemInput = document.querySelector("#outpt");

// the event keydown
itemInput.addEventListener("keydown", runEvent);

// the function that is fired when a key is pressed
function runEvent(e) {
  console.log("EVENT TYPE: " + e.type);

  console.log(e.target.value);
  document.getElementById("output").innerHTML =
    "<h3>" + e.target.value + "</h3>";
}

const mamma = 6; //this ie an expresiion
if (condition) {
} //this is a statement because  no value is returned

const man = 25;
const man1 = {
  firstname: "mike",
  lastname: "johnson"
};
/*The Arguments Object
JavaScript functions have a built -in object called the arguments object.

The argument object contains an array of the arguments used when the function was called(invoked).

This way you can simply use a function to find(for instance) the highest value in a list of numbers:

*/

x = sumAll(1, 123, 500, 115, 44, 88);

function sumAll() {
  var i;
  var sum = 0;
  for (i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

var person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
var person1 = {
  firstName: "John",
  lastName: "Doe"
};
var person2 = {
  firstName: "Mary",
  lastName: "Doe"
};
person.fullName.call(person2); // Will return "Mary Doe"

// functions , loops and complex statement should not end in semi colon
//let i = "";
if (man) {
}

if (condition) {
}

//function statement

function sayHi() {
  console.log(helo);
}
sayHi();
// function expression

const manana = function() {
  console.log(bye);
};

manana();

//var, let, const
//var variable declaration is global
var time = 12;
//let declaration is mutable
let time1 = 13;
// const declaration is immutable
const app = "calculator";
//variable type in javascripts
//1 primitive
//2 refereence
//String, Number, undefined, null, NaN, Symbol
//reference
//Object, Array, function,

//a string is any set of character within single or doble quotation mark
let man = "strenght";
let man1 = "stern";
let number = 25;
let num = 25.5;
let de = undefined;
var empty = null;

/*
What is this?
The JavaScript this keyword refers to the object it belongs to.

It has different values depending on where it is used:

In a method, this refers to the owner object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), and apply() can refer this to any object.


this in Event Handlers
In HTML event handlers, this refers to the HTML element that received the event:

*/
<button onclick="this.style.display='none'">Click to Remove Me!</button>;

//In other words: this.firstName means the firstName property of this(person) object.

var person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

// object
const persons = {
  name: "wale",
  carcolor: "red"
};
// dot notation to assest the content of the object
persons.num;
console.log(persons.name);
//function declartion does not require semi
const greet = function(name) {
  console.log("hello" + " " + name);
};
console.log(greet(john));
//for loop
for (let i = 0; i < 5; i = i + 1) {
  console.log(i);
}

console.log(object);
require("package");

for (const item of object) {
}
// while loop

while (i < 5) {
  console.log(i);
  i++;
}

// template literal allow us to execute a statement in an expresion
document.getElementById("m").innHTML = `hello moj ${2 + 2}`;
// also allow youto write your html tags without the exzape charater

let tags = `<h1>hello world</h1>`;
// an expresion is executable
// a statement is a set of instruction

const me = "banjo";
console.log(me);

// foreach iteration of an array
//The forEach() method calls a function (a callback function) once for each array element.

var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt = txt + value + "<br>";
}
/*
Note that the function takes 3 arguments:

The item value
The item index
The array itself
The example above uses only the value parameter. The example can be rewritten to:
*/
var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value) {
  txt = txt + value + "<br>";
}

// foreach method pick each value of the array and call the callback on it

//The JavaScript Switch Statement
//Use the switch statement to select one of many code blocks to be executed.

//Syntax
switch (expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
  // code block
}

//This is how it works:

//The switch expression is evaluated once.
//The value of the expression is compared with the values of each case.
//If there is a match, the associated block of code is executed.

//The getDay() method returns the weekday as a number between 0 and 6.

//(Sunday = 0, Monday = 1, Tuesday = 2..)

//This example uses the weekday number to calculate the weekday name:

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
//The result of day will be:

//Wednesday

//the break Keyword
//When JavaScript reaches a break keyword, it breaks out of the switch block.

//This will stop the execution of inside the block.

//It is not necessary to break the last case in a switch block.The block breaks(ends) there anyway.

/*

Different Kinds of Loops
JavaScript supports different kinds of loops:

for - loops through a block of code a number of times
for/in - loops through the properties of an object
for/of - loops through the values of an iterable object
while - loops through a block of code while a specified condition is true
do/while - also loops through a block of code while a specified condition is true

*/

/*

JavaScript try and catch
The try statement allows you to define a block of code to be tested for errors while it is being executed.

The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.

The JavaScript statements try and catch come in pairs:

try {
  Block of code to try
}
catch(err) {
  Block of code to handle errors
}
*/
/*
The try statement lets you test a block of code for errors.

The catch statement lets you handle the error.

The throw statement lets you create custom errors.

The finally statement lets you execute code, after try and catch, regardless of the result.
*/

try {
  adddlert("Welcome guest!");
} catch (err) {
  document.getElementById("demo").innerHTML = err.message;
}

/*
The throw Statement
The throw statement allows you to create a custom error.

Technically you can throw an exception (throw an error).

The exception can be a JavaScript String, a Number, a Boolean or an Object:

throw "Too big";    // throw a text
throw 500;          // throw a number
If you use throw together with try and catch, you can control program flow and generate custom error messages.
*/
function myFunction() {
  var message, x;
  message = document.getElementById("p01");
  message.innerHTML = "";
  x = document.getElementById("demo").value;
  try {
    if (x == "") throw "empty";
    if (isNaN(x)) throw "not a number";
    x = Number(x);
    if (x < 5) throw "too low";
    if (x > 10) throw "too high";
  } catch (err) {
    message.innerHTML = "Input is " + err;
    // the error thrown is customized and will be equal to err otherwise it will be err.message or err.name
  }
}

/*+
The finally Statement
The finally statement lets you execute code, after try and catch, regardless of the result:
*/
function myFunction() {
  var message, x;
  message = document.getElementById("p01");
  message.innerHTML = "";
  x = document.getElementById("demo").value;
  try {
    if (x == "") throw "is empty";
    if (isNaN(x)) throw "is not a number";
    x = Number(x);
    if (x > 10) throw "is too high";
    if (x < 5) throw "is too low";
  } catch (err) {
    message.innerHTML = "Error: " + err + ".";
  } finally {
    document.getElementById("demo").value = "";
  }
}

//JavaScript Declarations are Hoisted
//In JavaScript, a variable can be declared after it has been used.

//In other words; a variable can be used before it has been declared.

//Example 1 gives the same result as Example 2:

x = 5; // Assign 5 to x

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x; // Display x in the element

var x; // Declare x

//Variables and constants declared with let or const are not hoisted!

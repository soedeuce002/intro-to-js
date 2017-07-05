// Answer the following questions in this file using comments without running the code

//I went through and did the assignment by listing my answers/guesses.
//I console.logged each of them after so I could check my understanding.  I didn't
//change my answers after seeing what they should be but did note that I was incorrect
//and why i thought the answer was what it was unless I wasn't sure why it was which
//I also noted.

// 1.
// What does `givenName` equal right now?
let givenName;
// A: nothing (console will log undefined)
console.log(givenName);

// 2.
// What is `givenName` set to right now?
givenName = "Tim";
// A: Tim
console.log(givenName);
//console will log Tim

// 3.
// What is `givenName` set to right now?
givenName = givenName;
// A: itself... so Tim?
console.log(givenName);

// 4.
// What is `greeting` set to?
let greeting = "Hello, how are you? " + givenName;
// A: greeting is set to the string Hello, how are you? concatenated with whatever
//value would potentially be assigned to the variable givenName
//using the above value, console will log Hello, how are you? Tim
console.log(greeting);
// 5.
// What is `math` set to?
let high = 50;
let low  = 10;
let math = high - low;
// A: math is set to the difference of whatever value would potentially be assigned
//to the variable high and whatever value would be assigned to the variable low.
//in this example the console would log 40.
console.log(math);
// 6.
// What is `math` set to?
mathExample = high - "5";
// A: math is set to whatever value would potentially be assigned to the variable
//high minus the string 5. using the above value the console would log
// 50 - 5
//XX The answer to this is 45 although i'm not sure why
console.log(mathExample);

// 7.
// Create a variable to calculate Tim's age
// The answer should read "Tim is 33 years old"
// The answer shoud not be written in a comment.
let born = 1984;
let today = 2017;
// A:
let timsAge = "Tim is " + (today - born) + " years old"
console.log(timsAge);
// 8.
// Adjust this code. Store some information in the following variables.
// A:
let yourName = "Ree";
let instructorName = "Doug";


// 9.
// Update the variables `yourName` and `instructorName` so the expression below reads correctly.
// A:


// This statement should read correctly
let statement = yourName + " is taking a class at The Iron Yard, my instructor's name is " + instructorName;
console.log(statement);

// 10.
// We've created a variable named after each primitive type.
// Use the `=` operator to assign a value to each variable matching the type in the name.
let myNumber = 10;
let myString = "words go here";
let myBoolean = false;
// This one's a little tricky - think carefully about what makes a value "undefined"!
let myUndefined;
// A: nothing needs to be done.  It's undefined because it's a declared variable
//has not had a value assigned to it


// For questions 11 - 19: List which boolean value will be stored in each variable. (Remember: `==` does not check data type)

// 11.
let x = (false == 0);
console.log(x);
// A. true


// 12.
let y = (false == "");
console.log(y);
// A. true


// 13.
let z = (0 == "");
console.log(z);
// A. true


// 14.
let a = (null == null);
console.log(a);
// A. true


// 15.
let b = (undefined == undefined);
console.log(b);
// A. true


// 16.
let c = (undefined == null);
console.log(c);
// A. false
//XX is true because both undefined and null are false
//so (false == false) evaluates to true

// 17.
let d = (null == false);
console.log(d);
// A. false


// 18.
let e = (NaN == null);
console.log(e);
// A. false


// 19.
let f = (NaN == NaN);
console.log(f);
// A. true
//XX the console evaluates this to false but i'm not sure why since
//since it seems false == false should evaluate to true?

// 20.
// Fix the `if...else` statement below by adding an `if` keyword and conditional expression.
// Use the variable `thirsty` as part of your conditional expression.
// A:
let thirsty = true;

if (thirsty === true){
  console.log("I'm parched!");
} else {
  console.log("I've had enough to drink.");
}

// For questions 21 - 29 list which statement will be logged.

// 21.
let thisExample;

if(thisExample){
	console.log("True!");
} else {
	console.log("False!");
}
// A: false


// 22.
if(""){
	console.log("True!");
} else {
	console.log("False!");
}
// A: False


// 23.
// this expression will set x to NaN
let example = 1 * undefined;

if(example){
	console.log("True!");
} else {
	console.log("False!");
}
// A: false


// 24.
if(false){
	console.log("True!");
} else {
	console.log("False!");
}
// A: false


// 25.
if(-5 && 5){
	console.log("True!");
} else {
	console.log("False!");
}
// A: false
//X the answer is true....i think this because each of the conditions evaluates
//true (because they are not zero?).  so since both conditions are true the whole
//statement evaluates to true.

// 26.
if("Hello World!"){
	console.log("True!");
} else {
	console.log("False!");
}
// A: True


// 27.
if({}){
	console.log("True!");
} else {
	console.log("False!");
}
// A:False
//XX console evaluates to true and i have not a clue
//why


// 28.
if({name: "Yehuda Katz"}){
	console.log("True!");
} else {
	console.log("False!");
}
// A: False
// XX console evaluates to true and not sure why...i'm not
//familiar with the syntax in the condition

// 29.
if(new Date()){
	console.log("True!");
} else {
	console.log("False!");
}
// A: False
// XX same as 27 and 28


// 30.
// Link this file to the sibling `index.html` document, open the file in your browser and make sure there are no errors in your console.

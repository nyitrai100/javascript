//learning javascript

var number = 5; //in-line comment

/* this is a 
multi-line comment */

number = 9
;

var myName = "Bence"

myName = 8

let ourName = "freeCodeCamp"

const pi = 3.14

//storing values

var a;
var b = 2;
console.log(a)

a = 7;
b= a;

console.log(a)

//initislizing Variables
var a =9;

//uninitialized Variables

var a = 5;
var b = 10;
var c = "I am a ";

a = a + 1;
b = b + 5;
c= c + "String!";
console.log(c)

//Case Sensitivity in var

var studlyCapVar;
var properCamelCase;
var titleCaseOver;

studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000; 

//adding numbers

var sum = 10 + 10;
console.log(sum)

//Subtracting Numbers

var difference = 45 - 33;
console.log(difference)

//multiplying numbers

var product = 8 * 10;
console.log(product)

//dividing number

var quotient = 66 / 33;
console.log(quotient)

//incrementing numbers

var myVar = 87;
myVar++
console.log(myVar)

//decrementing Numbers

var myVar = 11;
myVar--
console.log(myVar)

//Decimal Numbers

var ourDecimal = 5.7; 
var myDecimal = 0.009;

//multiply decimal

var product = 2.0 * 2.5;
console.log(product)

//divide Decimals

var quotient = 4.4 / 2.0;
console.log(quotient)

//finding remainder

var remainder;
remainder = 11 % 3;

//compound Assignment with augmented addition

var a = 3; 
var b = 17;
var c = 12;

a += 12;
b += 9;
c += 7;
console.log(a)

//compound Assignment with augmented subtraction
var a = 11; 
var b = 9;
var c = 3;

a -= 6;
b -= 15;
c -= 1;
console.log(a)

//compound Assignment with augmented multiplication

var a = 5; 
var b = 12;
var c = 4.6;

a *= 5;
b *= 3;
c *= 16;
console.log(a)

//compound Assignment with augmented division

var a = 48; 
var b = 108;
var c = 33;

a /= 12;
b /= 4;
c /= 11;
console.log(a)

//declaring String Variables

var firstName = "Bence";
var lastName = "Nyitrai"
console.log(firstName)

//escaping Literal quotes in Strings

var myStr = "I am a \"double quoted\" string inside \"double quotes\"";
console.log(myStr)

//quoting Strings with Single Quotes

var myStr = `'<a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/find-the-length-of-a-string" target="_blank">Link</a>'`; 
 
//escape sequences in Strings
 
var myStr = "Firstline\n\t\SecondLine\nThirdline"
console.log(myStr)

//Concatenating Strings with Plus Operator

var ourStr = "I come first " + "i come second."

var myStr = "This is the star. " + "This is the end."
console.log(myStr);

var ourStr = "I come first. ";
ourStr += "i come second.";

var myStr = "this is the first sentence. "

myStr += "this is the second sentence"

console.log(myStr);

//Constructing Strings with Variables

var myName = "Bence Nyitrai";
var myStr = "Hello my name is " + myName + " What is your Name?";
console.log(myStr)

//Appending Variables yo Strings

var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
console.log(ourStr)

//Find Length of String

var firstNameLength = 0;
var firstName = "Bence";
firstNameLength = firstName.length;
console.log(firstNameLength);

//Bracket Notation to Find First Character in String

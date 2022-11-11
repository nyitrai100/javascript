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

var firstLetterOfLastName = "";
var lastName = "Nyitrai";
firstLetterOfLastName = lastName[0];
console.log(firstLetterOfLastName)

//String Immutability

var myStr = "Jello World";

myStr = "Hello World";
console.log(myStr)

//Bracket Notation to Fond Nth character in String

var firstName = "Bence";
var secondLetterOfFirstName = firstName[1];
console.log(secondLetterOfFirstName);

var lastname = "Nyitrai";
var thirdLetterOfLastName = lastName[2];
console.log(thirdLetterOfLastName);

//Bracket Notation to Find last Character in String
var firstName = "Bence";
var lastLetterOfFirstName = firstName[firstName.length -1];
console.log(lastLetterOfFirstName);

//Bracket Notation to Find Nth-to-last Character in String
var lastName = "Nyitrai";
var secondToLastLetterOfLastName = lastName[lastName.length -2];
console.log(secondToLastLetterOfLastName);

//word Blanks
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
    
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb

    return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly",));
console.log(wordBlanks("bike", "slow", "flew", "slowly",));

//Store Multiple Values with Arrays

var ourArray = ["John", 23];

var myArray =["Quincy", 1];
console.log(myArray);

//Nested Arrays

var ourArray = [["the universe",42],["everything", 101010]];
var myArray = [["bulls", 23],["white sox", 25],];

//Acces Array Data with Indexes

var ourArray = [50,60,70];
var ourDate = ourArray[0];

var myArray = [50,60,70];
var ourData = myArray [0];
console.log(ourData);

//Modify Array Data With Indexes

var ourArray = [18,64,99];
ourArray[1] = 45;

var myArray = [18,64,99];
myArray[0] = 45;
console.log(myArray);

//Access Multi-dimensional Arrays with indexes

var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13,14]];

var myData = myArray[2][1];
console.log(myData);

//Manipulate Arrays with push

var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]);

var myArray = [["John", 23],["cat",2]];
myArray.push(["dog", 3])

console.log(myArray);

//Manipulate Arrays with pop

var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop();

var myArray = [["john", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop();
console.log(myArray);

//manipulate Arrays with shift
var ourArray = ["Stimpson", "j", ["cat"]];
var removedFromOurArray = ourArray.shift();

var myArray = [["john", 23], ["dog", 3]];
var removedFromMyArray = myArray.shift();
console.log(myArray);

//Manipulate Arrays with unshift

var myArray = [["john", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["happy", 35]);
console.log(myArray);

//Shopping list
var myList = [["cereal", 3] ["milk, 2"], ["bananas, 3"], ["juice, 2"], ["egg", 12],];

//Write Reusable Code with function

function ourReusableFunction() {
    console.log("heyya, World");
}

ourReusableFunction();

function reusableFunction(){
    console.log("Hi World")
}

reusableFunction();

//Passing Values to Function with Argument

function ourFunctionWithArgs(a, b) {
    console.log(a - b);
}
ourFunctionWithArgs(10, 5);

function functionWithArgs(a,b){
    console.log(a + b);
}
functionWithArgs(10, 5);

//Global Scope and Functions
var myGlobal = 10;

function fun1() {
 oopsGlobal = 5;
}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined"){
    output += "myGlobal: " + myGlobal;
}
if (typeof oopsGlobal != "undefined"){
    output += " oopsGlobal: " + oopsGlobal;
}
console.log(output);
}
fun1();
fun2();

//Local Scope and Functions

function myLocalScope(){
    var myVar = 5;
    console.log(myVar);
}

myLocalScope();


//Global vs Local Scope in functions
var outerWear = "T-shirt";

function myOutfit() {
    var outerWear = "sweater";

    return outerWear;
}

console.log(myOutfit());
console.log(outerWear);

//Return a Value from a function with return

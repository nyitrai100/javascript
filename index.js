// //learning javascript

// var number = 5; //in-line comment

// /* this is a 
// multi-line comment */

// number = 9
// ;

// var myName = "Bence"

// myName = 8

// let ourName = "freeCodeCamp"

// const pi = 3.14

// //storing values

// var a;
// var b = 2;
// console.log(a)

// a = 7;
// b= a;

// console.log(a)

// //initislizing Variables
// var a =9;

// //uninitialized Variables

// var a = 5;
// var b = 10;
// var c = "I am a ";

// a = a + 1;
// b = b + 5;
// c= c + "String!";
// console.log(c)

// //Case Sensitivity in var

// var studlyCapVar;
// var properCamelCase;
// var titleCaseOver;

// studlyCapVar = 10;
// properCamelCase = "A String";
// titleCaseOver = 9000; 

// //adding numbers

// var sum = 10 + 10;
// console.log(sum)

// //Subtracting Numbers

// var difference = 45 - 33;
// console.log(difference)

// //multiplying numbers

// var product = 8 * 10;
// console.log(product)

// //dividing number

// var quotient = 66 / 33;
// console.log(quotient)

// //incrementing numbers

// var myVar = 87;
// myVar++
// console.log(myVar)

// //decrementing Numbers

// var myVar = 11;
// myVar--
// console.log(myVar)

// //Decimal Numbers

// var ourDecimal = 5.7; 
// var myDecimal = 0.009;

// //multiply decimal

// var product = 2.0 * 2.5;
// console.log(product)

// //divide Decimals

// var quotient = 4.4 / 2.0;
// console.log(quotient)

// //finding remainder

// var remainder;
// remainder = 11 % 3;

// //compound Assignment with augmented addition

// var a = 3; 
// var b = 17;
// var c = 12;

// a += 12;
// b += 9;
// c += 7;
// console.log(a)

// //compound Assignment with augmented subtraction
// var a = 11; 
// var b = 9;
// var c = 3;

// a -= 6;
// b -= 15;
// c -= 1;
// console.log(a)

// //compound Assignment with augmented multiplication

// var a = 5; 
// var b = 12;
// var c = 4.6;

// a *= 5;
// b *= 3;
// c *= 16;
// console.log(a)

// //compound Assignment with augmented division

// var a = 48; 
// var b = 108;
// var c = 33;

// a /= 12;
// b /= 4;
// c /= 11;
// console.log(a)

// //declaring String Variables

// var firstName = "Bence";
// var lastName = "Nyitrai"
// console.log(firstName)

// //escaping Literal quotes in Strings

// var myStr = "I am a \"double quoted\" string inside \"double quotes\"";
// console.log(myStr)

// //quoting Strings with Single Quotes

// var myStr = `'<a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/find-the-length-of-a-string" target="_blank">Link</a>'`; 
 
// //escape sequences in Strings
 
// var myStr = "Firstline\n\t\SecondLine\nThirdline"
// console.log(myStr)

// //Concatenating Strings with Plus Operator

// var ourStr = "I come first " + "i come second."

// var myStr = "This is the star. " + "This is the end."
// console.log(myStr);

// var ourStr = "I come first. ";
// ourStr += "i come second.";

// var myStr = "this is the first sentence. "

// myStr += "this is the second sentence"

// console.log(myStr);

// //Constructing Strings with Variables

// var myName = "Bence Nyitrai";
// var myStr = "Hello my name is " + myName + " What is your Name?";
// console.log(myStr)

// //Appending Variables yo Strings

// var anAdjective = "awesome!";
// var ourStr = "freeCodeCamp is ";
// ourStr += anAdjective;
// console.log(ourStr)

// //Find Length of String

// var firstNameLength = 0;
// var firstName = "Bence";
// firstNameLength = firstName.length;
// console.log(firstNameLength);

// //Bracket Notation to Find First Character in String

// var firstLetterOfLastName = "";
// var lastName = "Nyitrai";
// firstLetterOfLastName = lastName[0];
// console.log(firstLetterOfLastName)

// //String Immutability

// var myStr = "Jello World";

// myStr = "Hello World";
// console.log(myStr)

// //Bracket Notation to Fond Nth character in String

// var firstName = "Bence";
// var secondLetterOfFirstName = firstName[1];
// console.log(secondLetterOfFirstName);

// var lastname = "Nyitrai";
// var thirdLetterOfLastName = lastName[2];
// console.log(thirdLetterOfLastName);

// //Bracket Notation to Find last Character in String
// var firstName = "Bence";
// var lastLetterOfFirstName = firstName[firstName.length -1];
// console.log(lastLetterOfFirstName);

// //Bracket Notation to Find Nth-to-last Character in String
// var lastName = "Nyitrai";
// var secondToLastLetterOfLastName = lastName[lastName.length -2];
// console.log(secondToLastLetterOfLastName);

// //word Blanks
// function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
    
//     var result = "";
//     result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb

//     return result;
// }

// console.log(wordBlanks("dog", "big", "ran", "quickly",));
// console.log(wordBlanks("bike", "slow", "flew", "slowly",));

// //Store Multiple Values with Arrays

// var ourArray = ["John", 23];

// var myArray =["Quincy", 1];
// console.log(myArray);

// //Nested Arrays

// var ourArray = [["the universe",42],["everything", 101010]];
// var myArray = [["bulls", 23],["white sox", 25],];

// //Acces Array Data with Indexes

// var ourArray = [50,60,70];
// var ourDate = ourArray[0];

// var myArray = [50,60,70];
// var ourData = myArray [0];
// console.log(ourData);

// //Modify Array Data With Indexes

// var ourArray = [18,64,99];
// ourArray[1] = 45;

// var myArray = [18,64,99];
// myArray[0] = 45;
// console.log(myArray);

// //Access Multi-dimensional Arrays with indexes

// var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13,14]];

// var myData = myArray[2][1];
// console.log(myData);

// //Manipulate Arrays with push

// var ourArray = ["Stimpson", "J", "cat"];
// ourArray.push(["happy", "joy"]);

// var myArray = [["John", 23],["cat",2]];
// myArray.push(["dog", 3])

// console.log(myArray);

// //Manipulate Arrays with pop

// var ourArray = [1,2,3];
// var removedFromOurArray = ourArray.pop();

// var myArray = [["john", 23], ["cat", 2]];
// var removedFromMyArray = myArray.pop();
// console.log(myArray);

// //manipulate Arrays with shift
// var ourArray = ["Stimpson", "j", ["cat"]];
// var removedFromOurArray = ourArray.shift();

// var myArray = [["john", 23], ["dog", 3]];
// var removedFromMyArray = myArray.shift();
// console.log(myArray);

// //Manipulate Arrays with unshift

// var myArray = [["john", 23], ["dog", 3]];
// myArray.shift();
// myArray.unshift(["happy", 35]);
// console.log(myArray);

// //Shopping list
// var myList = [["cereal", 3] ["milk, 2"], ["bananas, 3"], ["juice, 2"], ["egg", 12],];

// //Write Reusable Code with function

// function ourReusableFunction() {
//     console.log("heyya, World");
// }

// ourReusableFunction();

// function reusableFunction(){
//     console.log("Hi World")
// }

// reusableFunction();

// //Passing Values to Function with Argument

// function ourFunctionWithArgs(a, b) {
//     console.log(a - b);
// }
// ourFunctionWithArgs(10, 5);

// function functionWithArgs(a,b){
//     console.log(a + b);
// }
// functionWithArgs(10, 5);

// //Global Scope and Functions
// var myGlobal = 10;

// function fun1() {
//  oopsGlobal = 5;
// }

// function fun2() {
//     var output = "";
//     if (typeof myGlobal != "undefined"){
//     output += "myGlobal: " + myGlobal;
// }
// if (typeof oopsGlobal != "undefined"){
//     output += " oopsGlobal: " + oopsGlobal;
// }
// console.log(output);
// }
// fun1();
// fun2();

// //Local Scope and Functions

// function myLocalScope(){
//     var myVar = 5;
//     console.log(myVar);
// }

// myLocalScope();


// //Global vs Local Scope in functions
// var outerWear = "T-shirt";

// function myOutfit() {
//     var outerWear = "sweater";

//     return outerWear;
// }

// console.log(myOutfit());
// console.log(outerWear);

// //Return a Value from a function with return
// function minusSeven(num) {
//     return num -7;
// }

// console.log(minusSeven(10));

// function timesFive(num) {
//     return num * 5;
// }
// console.log(timesFive(5));

// //understanding undefined value return from a function

// var sum = 0;
// function addThree(){
//     sum = sum + 3;
// }

// function addFive(){
//     sum = sum +5
// }
// console.log(addFive(10));

// //Assignment with Returned value

// var changed = 0;

// function change(num) {
//     return (num +5) / 3;
// }

// changed = change(10);

// var processed = 0;

// function processArg(num){
//     return (num+3) / 5;
// }
// processed = processArg(7);

// console.log(processed)

// //Stand in Line

// function nextInLine(arr, item) {
//     arr.push(item);
//     return arr.shift();
// }

// var testArr = [1,2,3,4,5];

// console.log("Before: " + JSON.stringify(testArr));
// console.log(nextInLine(testArr, 6));
// console.log("After: " + JSON.stringify(testArr));

// //Boolean Values

// function welcomeToBooleans(){
//     return false;
// }

// //use conditional logic with if statements

// function ourTrueOrFalse(isItTrue) {
//     if (isItTrue) {
//         return "Yes, it is true";
//     }
//     return "No, it is false";
// }

// function trueOrFalse(wasThatTrue){
//     if (wasThatTrue){
//         return "Yes, that was true";
//     }
//         return "No, that was false";
// }

// console.log(trueOrFalse(true));

// //comparison with the equality Operator

// function testEqual(val){
//     if (val == 12) {
//         return "equal"
//     }
//     return "not Equal"
// }

// console.log(testEqual(10));

// //comparison with the strict equality operator

// function testStrict(val) {
//     if (val === 7) {
//         return "Equal";
//     }
//     return "Not Equal";
// }

// console.log(testStrict(7));

// //Practice Comparing Different Values

// function compareEquality(a,b) {
//     if (a == b){
//         return "Equal";
//     }
//     return "Not Equal";
// }

// console.log(compareEquality(10, "10"));

// //Comparison with the inequality Operator
// function testNotEqual(val) {
//     if (val != 99) {
//         return " Not Equal";
//     }
//     return "Equal";
// }

// console.log(testNotEqual(10));

// //Comparison with the Strict inequality operator
// function testStrictNotEqual(val) {
//     if (val !== 17) {
//         return " Not Equal";
//     }
//     return "Equal";
// }

// console.log(testStrictNotEqual(10));

// //Comparisons with the logical and operator

// function testGreaterThan(val) {
//     if (val > 100) {
//         return " Over 100";
//     }

//     if (val > 10) {
//     return "Over 10";
//     }
//     return "10 or Under";
// }

// console.log(testGreaterThan(10));

// //Comparison with the Greater than or equal to operator

// function testGreaterOrEqual(val) {
//     if (val >= 20) {
//         return " 20 or Over";
//     }

//     if (val >= 10) {
//     return "10 or Over";
//     }
//     return "less than 10";
// }

// console.log(testGreaterOrEqual(10));

// //comparison with the less than operator

// function testLessThan(val) {
//     if (val < 25) {
//         return "Under 25";
//     }

//     if (val < 55) {
//     return "Under 55";
//     }
//     return "55 or Over";
// }

// console.log(testLessThan(10));

// //Comparison with the less than or equal to operator

// function testLessOrEqual(val) {
//     if (val < 12 || val == 12) {
//         return " Smaller Than or equal to 12";
//     }

//     if (val < 24 || val == 24) {
//     return "Smaller than or Equal to 24";
//     }
//     return "More Than 24";
// }

// console.log(testLessOrEqual(10));

// //Comparisons with the logical and operator

// function testLogicalAnd(val) {

//     if (val <= 50 && val >= 25)
//     {
//         return "Yes";
//     }
//     return "No";
    
    
// }

// console.log(testLogicalAnd(10));

// //Comparisons with the logical or operator

// function testLogicalor(val) {
//     if (val < 10 || val > 20) {
//         return "Outside";
//     }

//     return "Inside";
// }

// console.log(testLogicalor(15));

// //else statements

// function testElse(val) {
//     if(val > 5) {
//         result ="bigger than 5"
//     } else {
//         result = "5 ore Smaller"
//     }
//     return result;

// }
// console.log(testElse(4))

// //else if statements

// function testElseIf(val){
//     if (val > 10){
//         return "Greater than 10";
//     } else if (val < 5) {
//         return "Smaller than 5";
//     } else {
//         return "between 5 and 10"
//     }
// }

// console.log(testElseIf(4));

// //logical order in if else statements

// function orderMyLogic(val){
//     if (val < 5){
//         return "less than 5";
//     } else if (val < 10) {
//         return "less than 10";
//     } else {
//         return "Greater than or equal to 10"
//     }
// }

// console.log(orderMyLogic(4));

// //Chaining if else Statement

// function testSize(num) {
//     if (num < 5) { 
//         return "Tiny"
//     }
//     else if (num < 10 ){
//         return "small"
//     }
//     else if (num < 15) {
//         return "Medium"
//     }
//     else if (num < 20) {
//         return "Large"
//     }
//     else if (num >= 20) {
//         return "Huge"
//     }
    
// }

// console.log(testSize(7));

//golf code

// var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Gp Home!"]
// function golfScore(par, strokes) {
//     if (strokes == 1){
//         return names[0]
//     } else if (strokes <= par -2){
//         return names[1]
//     }
//     else if (strokes == par -1){
//         return names[2]
//     }
//     else if (strokes == par){
//         return names[3]
//     }
//     else if (strokes == par + 1){
//         return names[4]
//     }
//     else if (strokes == par + 2){
//         return names[5]
//     }
//     else if (strokes >= par + 3){
//         return names[6]
//     }



//     return "Change me";
// }

// console.log(golfScore(5, -2));



// Switch statement
// function caseInSwitch(val) {
//     var answer ="";
//     switch(val){
//     case 1:
//         answer = "alpha";
//         break;
//     case 2:
//         answer = "beta"
//         break;
//     case 3:
//         answer = "gamma"
//         break;
//     case 4:
//         answer = "delta"
//         break;

//     }

//     return answer;
// }

// console.log(caseInSwitch(1));


// default option in switch statement

// function caseInSwitch(val) {
//     var answer ="";
//     switch(val){
//     case "a":
//         answer = "apple";
//         break;
//     case "b":
//         answer = "bird"
//         break;
//     case "c":
//         answer = "cat"
//         break;
//     default:
//         answer ="stuff";
//         break;

//     }

//     return answer;
// }

// console.log(caseInSwitch("a"));


// multiple identical options in switch statements:

// function sequentialSizes(val) {
//         var answer ="";
//         switch(val){
//             case 1:
//             case 2:
//             case 3:
//                 answer = "low"
//                 break;
//             case 4:
//             case 5:
//             case 6:
//                 answer = "Mid"
//                 break;  
//             case 7:
//             case 8:
//             case 9:
//                 answer = "High"
//                 break;      
//         }
//         return answer;
//     }

//     console.log(sequentialSizes(1));

//replacing if else chanins with switch

    // function chainToSwitch(val){
    //     var answer = "";

    // switch(val){
    //     case "bob" :
    //         answer = "Marley";
    //         break;
    //     case 42:
    //         answer = "The answer";
    //         break;
    //     case 1:
    //         answer = "There is no 1";
    //         break;
    //     case 99:
    //         answer = "Missed me by this much!";
    //         break;
    //     case 7:
    //         answer = "ate nine";
    //         break;
    // }
    // }
    // console.log(chainToSwitch(1));

// returning boolean values from functions

// function isLess(a, b) {
    
//     return a < b;
         
// }
// console.log(isLess(10, 15));




// counting cards

// var count = 0;
// function cc(card) {
// switch(card){
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//         count++;
//         break;
//     case 10:
//     case "J":    
//     case "Q":
//     case "K":
//     case "A":
//         count--;
//         break;
// }
//     var holdbet = 'Hold'
//     if (count > 0){
//         holdbet = 'Bet'
//     }

//     return count + " " + holdbet;
// }

// cc(2); cc('K'); cc(10); cc('K'); cc('A');
// console.log(cc(4));


//Build a javascript Objects
// var ourDog = {
//     "name": "Camper",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["everything!"]
// };

// var myDog{
//     "name": "Quincy",
//     "legs": 3,
//     "tails": 2,
//     "friends": []

// };

//Accessing Object Properties with dot notation

// var testObj = {
//     "hat": "ballcap",
//     "shirt": "jersey",
//     "shoes": "cleats"
// };

// var hatValue = testObj.hat;
// var shirtValue = testObj.shirt;



//Accessing Object Properties with Bracket notation

// var testObj = {
//     "an entree": "hamburger",
//     "my side": "veggies",
//     "the drink": "water"
// };

// var entreeValue = testObj["an entree"];
// var drinkValue = testObj["the drink"];




//Accessing Object Properties with Variables

// var testObj = {
//     12: "Namath",
//     16: "Montana",
//     19: "Unitas"
// };

// var playerNumber = 16;
// var player = testObj[playerNumber];


//Uptadeing Object Properties

// var myDog = {
//     "name": "Coder",
//     "legs": 4,
//     "friends": ["freeCodeCamp Campers"]
// };

// myDog.name = "happy Coder";




// Add New Properties to an Object
// var myDog = {
//     "name": "Coder",
//     "legs": 4,
//     "friends": ["freeCodeCamp Campers"]
// };

// myDog.bark = "bow-wow";
// myDog["bark2"] = "woof!";


//Delete Properties From Object
// var myDog = {
//     "name": "Coder",
//     "legs": 4,
//     "friends": ["freeCodeCamp Campers"]
// };

// delete myDog.legs;





//Using Objects for Lookups

// function phoneticLookup(val) {
//     var result = "";


// var lookup = {
//     "alpha": "Adams",
//     "bravo": "Boston",
//     "charlie": "Chicago",
//     "delta": "Denver",
// };
// result = lookup[val];
// //Change from switch to objects
//     // switch(val){
//     //     case "alpha":
//     //         result = "Adam";
//     //         break;
//     //     case "bravo":
//     //         result = "Boston";
//     //         break;
//     //     case "charlie":
//     //         result = "Chicago";
//     //         break;
//     //     case "delta":
//     //         result = "Denver";
//     //         break;
//     // }
// //
//     return result;
// }
// console.log(phoneticLookup("bravo"));


//Testing Objects for Properties

// var myObj ={
//     gift: "pony",
//     pet: "kitten",
//     bed: "sleigh",
// };

// function checkObj(checkProp){

//    if (myObj.hasOwnProperty(checkProp)){
//     return myObj[checkProp];
//    } else{
//     return "Not Found"
//    }
// }

// console.log(checkObj("gift"));


//Manipulating Complex Objects

// var myMusic = [
//     {
//         "artist": "Billy Joel",
//         "title": "Piano Man",
//         "release_year": 1973,
//         "formats": [
//         "CD",
//         "8T",
//         "LP"
//         ],
//         "gold":true
//     },
//     {
//         "artist": "Beau Carnes",
//         "title": "Cereal Man",
//         "release_year": 2003,
//         "formats": [
//             "Youtube video"
//         ]
//     }
// ];

//Accessing Nested Objects

// var myStorage = {
//     "car": {
//         "inside": {
//         "glove box": "maps",
//         "passenger seat": "crumbs"
//     },
//     "outside":{
//         "trunk": "jack"
//     }
// }
// };

// var gloveBoxContents = myStorage.car.inside["glove box"]; 
// console.log(gloveBoxContents);


//Accessing Nested Arrays
// var myPlants = [
//     {
//         type: "flowers",
//         list: [
//             "rose",
//             "tulpin",
//             "dandelion",
//         ]
//     },
//     {
//         type: "trees",
//         list : [
//             "fir",
//             "pine",
//             "birch"
//         ]
//     }
// ];

// var secondTree = myPlants[1].list[1];
// console.log(secondTree);


//record Collection

// var collection = {
//     "2548": {
//         "album": "slippery When Wet",
//         "artist": "Bon Jovi",
//         "Tracks": [
//             "Let it Rock",
//             "You give Love a Bad Name"
//     ]
//     },

//     "2468": {
//         "album": "1999",
//         "artist": "Prince",
//         "Tracks": [
//             "1999",
//             "Little Red Corvette"
//     ]
//     },

//     "1245": {
//         "artist": "Robert Palmer",
//         "tracks": [ ]
//     },

//     "5439": {
//         "album": "ABBA Gold"
//     }

// };

// var collectionCopy = JSON.parse(JSON.stringify(collection));

// function updateRecords(id, prop, value){
//     if (value === ""){
//         delete collection[id][prop];
//     } else if (prop === "tracks"){
//         collection[id][prop] = collection[id][prop] ||[];
//         collection[id][prop].push(value);
//     } else {
//         collection[id][prop] = value;
//     }

//     return collection;
// }

// updateRecords(2468, "tracks", "test"); 
// console.log(updateRecords(5439, "artist", "ABBA"));



//Iterate with While Loops

// var myArray = [];

// var i = 0;
// while( i< 5 ){
//     myArray.push(i);
//     i++;

// }
// console.log(myArray);


//Iterate with For Loops

// var ourArray = [];

// for (var i = 0; i < 5; i++) {
//     ourArray.push(i);
// }

// var myArray = [];

// for( var i = 1; i < 6; i++){
//     myArray.push(i);
// }

// console.log(myArray);



//Iterate Odd numbers with a For Loop

var ourArray = [];

for (var i = 0; i < 10; i += 2){
    ourArray.push(i);
}
console.log(ourArray);

var myArray = [];

for(var i = 1; i < 10; i += 2){
    myArray.push(i);
}

console.log(myArray)
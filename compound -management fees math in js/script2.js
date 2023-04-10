
//filter for management fees


// function fee(){
//     if(deposit >= 5000 && deposit <= 499999 && time === 12) {

//         return 0.7;
//     }
//     if(deposit >= 5000 && deposit <= 499999 && time === 36) {

//         return 0.75;
//     }
//     if(deposit >= 5000 && deposit <= 499999 && time === 60) {

//         return 0.8;
//     }
//     if(deposit >= 500000 && deposit <= 999999 ){
//         return 0.8;
//     }
//     if(deposit >= 1000000){
//         return 0.85;
//     }
// }








//12 month - 36 month - 60 month COMPOUND interest - managment fee 30%.


// Managment fee

const fee30 = 0.70;
const fee25 = 0.75;
const fee20 = 0.80;
const fee15 = 0.85;



// deposit amount
let deposit = 10000,

// interest rate
    rate = 0.1779;

//calculation for 1querter

// let quarter1 = ((deposit * rate) * fee30) + deposit;

// // document.write("1 quarter Cashbalance" + quarter1);

// //calculation for 2querter 

// let quarter2 = ((quarter1 * rate) * fee30) + quarter1;

// // document.write("2 quarter Cashbalance" + quarter2);

// //calculation for 3 querter

// let quarter3 = ((quarter2 * rate) * fee30) + quarter2;

// // document.write("3 quarter Cashbalance" + quarter3);

// //calculation for 4 querter(12months)

// let quarter4 = ((quarter3 * rate) * fee30) + quarter3;

// document.write("12 month Cashbalance" + " " + quarter4.toFixed(2));




// //calculation for 5 querter

// let quarter5 = ((quarter4 * rate) * fee30) + quarter4;

// //  document.write("5 quarter Cashbalance" + quarter5);


//  //calculation for 6 querter

// let quarter6 = ((quarter5 * rate) * fee30) + quarter5;

// // document.write("6 quarter Cashbalance" + quarter6);

// //calculation for 7 querter

// let quarter7 = ((quarter6 * rate) * fee30) + quarter6;

// // document.write("7 quarter Cashbalance" + quarter7);

// //calculation for 8 querter

// let quarter8 = ((quarter7 * rate) * fee30) + quarter7;

// // document.write("8 quarter Cashbalance" + quarter8);

// //calculation for 9 querter

// let quarter9 = ((quarter8 * rate) * fee30) + quarter8;

// // document.write("9 quarter Cashbalance" + quarter9);


// //calculation for 10 querter

// let quarter10 = ((quarter9 * rate) * fee30) + quarter9;

// // document.write("10 quarter Cashbalance" + quarter10);

// //calculation for 11 querter

// let quarter11 = ((quarter10 * rate) * fee30) + quarter10;

// // document.write("11 quarter Cashbalance" + quarter11);


// //calculation for 12 querter (36months)

// let quarter12 = ((quarter11 * rate) * fee30) + quarter11;

// document.write("36 month Cashbalance" + " " + quarter12.toFixed(2));






// //calculation for 13 querter

// let quarter13 = ((quarter12 * rate) * fee30) + quarter12;

// // document.write("13 quarter Cashbalance" + quarter13);

// //calculation for 14 querter

// let quarter14 = ((quarter13 * rate) * fee30) + quarter13;

// // document.write("14 quarter Cashbalance" + quarter14);

// //calculation for 15 querter

// let quarter15 = ((quarter14 * rate) * fee30) + quarter14;

// // document.write("15 quarter Cashbalance" + quarter15);

// //calculation for 16 querter

// let quarter16 = ((quarter15 * rate) * fee30) + quarter15;

// // document.write("16 quarter Cashbalance" + quarter16);

// //calculation for 17 querter

// let quarter17 = ((quarter16 * rate) * fee30) + quarter16;

// // document.write("17 quarter Cashbalance" + quarter17);

// //calculation for 18 querter

// let quarter18 = ((quarter17 * rate) * fee30) + quarter17;

// // document.write("18 quarter Cashbalance" + quarter18);

// //calculation for 19 querter

// let quarter19 = ((quarter18 * rate) * fee30) + quarter18;

// // document.write("19 quarter Cashbalance" + quarter19);

// //calculation for 20 querter (60month)

// let quarter20 = ((quarter19 * rate) * fee30) + quarter19;

// document.write("60 month Cashbalance" + " " + quarter20.toFixed(2));




// //12 month - 36 month - 60 month NORMAL interest - managment fee 30%.


// //12month
// let normalInterest12 = (((deposit * rate) * fee30) * 4)+ deposit;

// // document.write("12 month normal interest Cashbalance" + normalInterest12.toFixed(2));


// //36month
// let normalInterest36 = (((deposit * rate) * fee30) * 12)+ deposit;

// // document.write("12 month normal interest Cashbalance" + normalInterest36.toFixed(2));

// //60month
// let normalInterest60 = (((deposit * rate) * fee30) * 20)+ deposit;

// // document.write("12 month normal interest Cashbalance" + normalInterest60.toFixed(2));





// //calculation for 1querter

// let quarter1 = ((deposit * rate) * fee30) + deposit;

// // document.write("1 quarter Cashbalance" + quarter1);

// //calculation for 2querter 

// let quarter2 = ((quarter1 * rate) * fee30) + quarter1;

// // document.write("2 quarter Cashbalance" + quarter2);

// //calculation for 3 querter

// let quarter3 = ((quarter2 * rate) * fee30) + quarter2;

// // document.write("3 quarter Cashbalance" + quarter3);

// //calculation for 4 querter(12months)

// let quarter4 = ((quarter3 * rate) * fee30) + quarter3;

// document.write("12 month Cashbalance" + " " + quarter4.toFixed(2));







// //calculation for 1querter

// let quarter1 = ((deposit * rate) * fee20) + deposit;

// // document.write("1 quarter Cashbalance" + quarter1);

// //calculation for 2querter 

// let quarter2 = ((quarter1 * rate) * fee20) + quarter1;

// // document.write("2 quarter Cashbalance" + quarter2);

// //calculation for 3 querter

// let quarter3 = ((quarter2 * rate) * fee20) + quarter2;

// // document.write("3 quarter Cashbalance" + quarter3);

// //calculation for 4 querter(12months)

// let quarter4 = ((quarter3 * rate) * fee20) + quarter3;

// document.write("12 month Cashbalance" + " " + quarter4.toFixed(2));



// //calculation for 5 querter

// let quarter5 = ((quarter4 * rate) * fee20) + quarter4;

// //  document.write("5 quarter Cashbalance" + quarter5);


//  //calculation for 6 querter

// let quarter6 = ((quarter5 * rate) * fee20) + quarter5;

// // document.write("6 quarter Cashbalance" + quarter6);

// //calculation for 7 querter

// let quarter7 = ((quarter6 * rate) * fee20) + quarter6;

// // document.write("7 quarter Cashbalance" + quarter7);

// //calculation for 8 querter

// let quarter8 = ((quarter7 * rate) * fee20) + quarter7;

// // document.write("8 quarter Cashbalance" + quarter8);

// //calculation for 9 querter

// let quarter9 = ((quarter8 * rate) * fee20) + quarter8;

// // document.write("9 quarter Cashbalance" + quarter9);


// //calculation for 10 querter

// let quarter10 = ((quarter9 * rate) * fee20) + quarter9;

// // document.write("10 quarter Cashbalance" + quarter10);

// //calculation for 11 querter

// let quarter11 = ((quarter10 * rate) * fee20) + quarter10;

// // document.write("11 quarter Cashbalance" + quarter11);


// //calculation for 12 querter (36months)

// let quarter12 = ((quarter11 * rate) * fee20) + quarter11;

// document.write("36 month Cashbalance" + " " + quarter12.toFixed(2));


// //calculation for 13 querter

// let quarter13 = ((quarter12 * rate) * fee20) + quarter12;

// // document.write("13 quarter Cashbalance" + quarter13);

// //calculation for 14 querter

// let quarter14 = ((quarter13 * rate) * fee20) + quarter13;

// // document.write("14 quarter Cashbalance" + quarter14);

// //calculation for 15 querter

// let quarter15 = ((quarter14 * rate) * fee20) + quarter14;

// // document.write("15 quarter Cashbalance" + quarter15);

// //calculation for 16 querter

// let quarter16 = ((quarter15 * rate) * fee20) + quarter15;

// // document.write("16 quarter Cashbalance" + quarter16);

// //calculation for 17 querter

// let quarter17 = ((quarter16 * rate) * fee20) + quarter16;

// // document.write("17 quarter Cashbalance" + quarter17);

// //calculation for 18 querter

// let quarter18 = ((quarter17 * rate) * fee20) + quarter17;

// // document.write("18 quarter Cashbalance" + quarter18);

// //calculation for 19 querter

// let quarter19 = ((quarter18 * rate) * fee20) + quarter18;

// // document.write("19 quarter Cashbalance" + quarter19);

// //calculation for 20 querter (60month)

// let quarter20 = ((quarter19 * rate) * fee20) + quarter19;

// document.write("60 month Cashbalance" + " " + quarter20.toFixed(2));

// function fee(){
//     if(principal >= 5000 && principal <= 499999 && time === 12) {

//         return 0.7;
//     }
//     if(principal >= 5000 && principal <= 499999 && time === 36) {

//         return 0.75;
//     }
//     if(principal >= 5000 && principal <= 499999 && time === 60) {

//         return 0.8;
//     }
//     if(principal >= 500000 && principal <= 999999 ){
//         return 0.8;
//     }
//     if(principal >= 1000000){
//         return 0.85;
//     }
// }






//
// inside the page
//
// try {
//     calcInvest(4999)
    
// } catch (error) {
//     console.error('invalid min deposit')
// }



// months is going to be the time within the calculation


// const calcCompoundInvest = (deposit, interestRate = 5.9, months) => {



    // validate if greater than 5000


    // const minAmount = validateMinDeposit(deposit)
    // if (!minAmount) throw new Error('deposit too low')



    // filter the fee
    // fetch the fee based upon the deposit amount & time (months)



    // const fee = fee(deposit)


    // calculate



//     const sum = deposit * (Math.pow((1 + interestRate/100), months))

//     return sum
// }

// const calcInvest = (deposit, ) => {

// }

// const calcOneYear = (deposit) => {
//     const q1 = calcCompoundInvest(deposit) / 4
//     const q2 = calcCompoundInvest(deposit) / 4
//     const q3 = calcCompoundInvest(deposit) / 4
//     const q4 = calcCompoundInvest(deposit) / 4

// }

// const calcThreeYears = (deposit) => {
//     const q1 = calcCompoundInvest(deposit)
    
// }


// const calcFiveYears = (deposit) => {
//     const q1 = calcCompoundInvest(deposit)
    
// }
// const validateMinDeposit = (deposit) => {
//     if ( deposit < 5000) return false

//     return true
// }













//12 monthcompound interest - managment fee 30%.


// Managment fee

const fee30 = 0.70;
const fee25 = 0.75;
const fee20 = 0.80;
const fee15 = 0.85;



// deposit amount
let principal = 10000,

// interest rate
    rate = 0.179,

//time by querterly
    time = 3;

//calculation for 1querter
let A = principal * (Math.pow((1 + rate/100),time));
let cI = A - principal;

document.write("1 quarter compound interest is" + cI);

//clean profit to investor
let mF = cI * fee30;

document.write("clean profit to investor" + mF);


//1 querter profit + principal amount

let qP = mF + principal

document.write("1querter profit + principal" + qP);





//calculation for 2querter

let newPrincipal = qP;
let B = newPrincipal * (Math.pow(1 + rate/100),time);
let D = B - newPrincipal;
document.write("2querter compound interest is" + D);

//clean profit to investor
let mF2 = qP * fee30;

document.write("clean profit to investor in secondquerter" + mF2);


//1 querter profit + principal amount

let qP2 = mF2 + newPrincipal;

document.write("2querter profit + newPrincipal" + qP2);





//calculation for 3querter

let newPrincipal2 = qP2;
let E = newPrincipal2 * (Math.pow(1+rate/100),time);
let F = E - newPrincipal2;
document.write("3querter compound interest is" + F);

//clean profit to investor
let mF3 = qP2 * fee30;

document.write("clean profit to investor in thirdquerter" + mF3);


//1 querter profit + principal amount

let qP3 = mF3 + newPrincipal2;

document.write("3querter profit + newPrincipal2" + qP3);




//calculation for 4querter

let newPrincipal3 = qP3;
let G = newPrincipal3 * (Math.pow(1+rate/100),time);
let H = G - newPrincipal3;
document.write("4querter compound interest is" + H);

//clean profit to investor
let mF4 = qP3 * fee30;

document.write("clean profit to investor in 4querter" + mF4);


//4 querter profit + principal amounts

let qP4 = mF4 + newPrincipal3;

document.write("4querter profit + newPrincipal3" + qP4);








//36 months compound interest - managment fee 30%.

//calculation for 5querter

// let newPrincipal4 = qP4;
// let W = newPrincipal4 * (Math.pow(1+rate/100),time);
// let R = W - newPrincipal3;
// document.write("4querter compound interest is" + R);

// //clean profit to investor
// let mF5 = qP4 * fee30;

// document.write("clean profit to investor in 4querter" + mF5);


// //4 querter profit + principal amounts

// let qP5 = mF5 + newPrincipal4;

// document.write("4querter profit + newPrincipal3" + qP5);




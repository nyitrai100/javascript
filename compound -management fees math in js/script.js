

//12 monthcompound interest - managment fee 30%.


// Managment fee

const fee30 = 0.70;
const fee25 = 0.75;
const fee20 = 0.80;
const fee15 = 0.85;



// deposit amount
let principal = 10000,

// interest rate
    rate = 5,

//time by querterly
    time = 3;

//calculation for 1querter
let A = principal * (Math.pow((1 + rate/100),time));
let cI = A - principal;

document.write("1 quarter compound interest is" + cI);

//clean profit to investor
let mF = cI * fee30

document.write("clean profit to investor" + mF);


//1 querter profit + principal amount

let qP = mF + principal

document.write("1querter profit + principal" + qP);





//calculation for 2querter

let newPrincipal = qP;
let B = newPrincipal * (Math.pow(1+rate/100),time);
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

let qP3 = mF2 + newPrincipal2;

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
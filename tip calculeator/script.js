const amount = document.getElementById('amount');
const guests = document.getElementById('guests');
const quality = document.getElementById('quality');
const tipAmount = document.getElementById('tip-amount');


// function calculate(){} - meaning the same like above

calculate = () =>{
    const tip = ((amount * quality.value) / (guests.value)).toFixed(2);
    amount.value = '';
    guests.value = '';
    quality.value = '';
    if( tip === 'NaN' ){
        tipAmount.innerHTML = 'Tip 0$ each';
        showTipAmount();
    }
    else{
        tipAmount.innerHTML = 'Tip $' + tip + 'each';
        showTipAmount();
    }
    
}
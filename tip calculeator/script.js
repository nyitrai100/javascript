const amount = document.getElementById('amount');
const guests = document.getElementById('guests');
const quality = document.getElementById('quality');
const tipAmount = document.getElementById('tip-amount');
const tipAmountS = document.getElementById('tip-amount.show');

// function calculate(){} - meaning the same like above

const showTipAmount = () =>{
    var x = tipAmount;
    x.className = 'show';
    setTimeout(function(){x.className.replace('show', '',)},3000);
}

calculate = () =>{
    const tip = ((amount.value * quality.value) / (guests.value)).toFixed(2);
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
    
};


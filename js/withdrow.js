// step: 1
document.getElementById('btn-withdrow').addEventListener('click', function(){
    
    // step: 2
    const withdrowField = document.getElementById('withdrow-field');
    const newWithDrowAmountString = withdrowField.value ;
    const newWithDrowAmount = parseFloat(newWithDrowAmountString);

    // step: 7
    withdrowField.value = '';

    if(isNaN(newWithDrowAmount)){
        alert('Please provide a valid Number');
        return;
    }
    
    // step: 3
    const withdrowTotalElement = document.getElementById('withdrow-total');
    const previousWithDrowTotalString = withdrowTotalElement.innerText;
    const previousWithDrowTotal = parseFloat(previousWithDrowTotalString);
    
    

    // step: 5
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    

    if(newWithDrowAmount > previousBalanceTotal){
        alert('Baap er bank e taka nai');
        return;
    }
    // step: 4
    const currentWithdrowTotal = previousWithDrowTotal + newWithDrowAmount;
    withdrowTotalElement.innerText = currentWithdrowTotal;


    // step: 6
    const currentBalanceTotal = previousBalanceTotal - newWithDrowAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

    
})
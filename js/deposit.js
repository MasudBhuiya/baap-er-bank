// step: 1
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step: 2
    const depositField = document.getElementById('deposit-field')
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString)
    
    // step: 3
    const depositTotalElement = document.getElementById('deposit-total')
    const PreviousDepositTotalString = depositTotalElement.innerText;
    const PreviousDepositTotal = parseFloat(PreviousDepositTotalString)
    // step: 4
    const currentDepositTotal = PreviousDepositTotal + newDepositAmount;

    depositTotalElement.innerText =  currentDepositTotal;

    // step: 5
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step: 6
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

    // step: 7
    depositField.value = '';
}) 
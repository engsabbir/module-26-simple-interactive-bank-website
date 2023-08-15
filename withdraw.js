document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInputElement = document.getElementById('withdraw-input');
    const withdrawInputAmountString = withdrawInputElement.value;
    const withdrawInputAmount = parseFloat(withdrawInputAmountString);

    const withdrawTotalElement = document.getElementById('withdraw-total')
    const withdrawTotalString = withdrawTotalElement.innerText;
    const withdrawTotal = parseFloat(withdrawTotalString)

    withdrawInputElement.value = '';

    if (isNaN(withdrawInputAmount)) {
        alert('Please Provide a valid number.')
        return;
    }

    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotal = parseFloat(balanceTotalElement.innerText) - withdrawInputAmount;

    if (withdrawTotal > balanceTotal) {
        alert('Bank e eto taka nai vai');
        return;
    }
    if ((balanceTotal - withdrawTotal) < 500) {
        alert('you must stored 500 taka in your account')
        return;
    }
    withdrawTotalElement.innerText = withdrawTotal + withdrawInputAmount;


    balanceTotalElement.innerText = balanceTotal;
})
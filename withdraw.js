document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInputElement = document.getElementById('withdraw-input');
    const withdrawInputBalance = parseFloat(withdrawInputElement.value);

    const withdrawBalanceElement = document.getElementById('withdraw-total')
    const withdrawBalance = parseFloat(withdrawBalanceElement.innerText)

    withdrawBalanceElement.innerText = withdrawBalance + withdrawInputBalance;

    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotal = parseFloat(balanceTotalElement.innerText) - withdrawInputBalance;

    balanceTotalElement.innerText = balanceTotal;
    withdrawInputElement.value = '';
})
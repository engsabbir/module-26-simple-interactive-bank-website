document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositInputElement = document.getElementById('deposit-input');
    const depositInput = parseFloat(depositInputElement.value);

    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotal = parseFloat(depositTotalElement.innerText);

    const totalDeposit = depositInput + depositTotal;
    depositTotalElement.innerText = totalDeposit;

    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotal = parseFloat(balanceTotalElement.innerText) + depositInput;

    balanceTotalElement.innerText = balanceTotal;

    depositInputElement.value = '';
})
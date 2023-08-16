
// deposit button Event Listener 
document.getElementById('deposit-btn').addEventListener('click', function(){
    
    // Deposit Input Amount Getting 
    const depositInputBox = document.getElementById('depositInputBox');
    const depositAmountString   = depositInputBox.value;
    const depositAmount   = parseFloat(depositAmountString);
    
    // Deposit Total Box
    const depositBox    = document.getElementById('depositBox');
    const depositTotalString  = depositBox.innerText;
    const depositTotal  = parseFloat(depositTotalString);

    // Total Balance Box
    const balanceBox    = document.getElementById('balanceBox');
    const balanceTotalString  = balanceBox.innerText;
    const balanceTotal  = parseFloat(balanceTotalString);

    // Total Deposite Amount Calculate
    if(depositAmount > 0){
        depositBox.innerText    = depositTotal + depositAmount;
        balanceBox.innerText    = balanceTotal + depositAmount;
        
    }else {
        alert('Invalid Input');
    }

    // Clear deposit field
    depositInputBox.value     = '';


});


// Withdraw Buttton Event Linstener
document.getElementById('withdraw-btn').addEventListener('click', function(){
    // Withdraw Input Amount Getting 
    const withdrawInputBox  = document.getElementById('withdrawInputBox');
    const withdrawInputAmountString = withdrawInputBox.value;
    const withdrawInputAmount = parseFloat(withdrawInputAmountString);

    // Total Withdraw Amount Box
    const withdrawTotal     = document.getElementById('withdrawBox');
    const withdrawTotalAmountString = withdrawTotal.innerText;
    const withdrawTotalAmount   = parseFloat(withdrawTotalAmountString);

    // total amount 
    const balanceBox    = document.getElementById('balanceBox');
    const balanceTotalString  = balanceBox.innerText;
    const balanceTotal  = parseFloat(balanceTotalString);

    // Total Amount Calculation 
    if(withdrawInputAmount <= balanceTotal && withdrawInputAmount >= 0){
        balanceBox.innerText = balanceTotal - withdrawInputAmount;
        withdrawTotal.innerText = withdrawTotalAmount + withdrawInputAmount;
    }else {
        alert('Invalid Withdraw Amount!!');
    }

    // Clear withdraw field
    withdrawInputBox.value     = '';

});




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
    depositBox.innerText    = depositTotal + depositAmount;
    balanceBox.innerText    = balanceTotal + depositAmount;

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
    

});



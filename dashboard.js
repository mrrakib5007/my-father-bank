
// deposit button Event Listener 
document.getElementById('deposit-btn').addEventListener('click', function(){
    
    // Deposit Input Amount Getting 
    const depositInputBox = document.getElementById('depositInputBox');
    const depositAmount   = depositInputBox.value;
    
    // Deposit Total Box
    const depositBox    = document.getElementById('depositBox');
    const depositTotal  = depositBox.innerText;


    // Total Balance Box
    const balanceBox    = document.getElementById('balanceBox');
    const balanceTotal  = balanceBox.innerText;

    depositBox.innerText    = parseFloat(depositTotal) + parseFloat(depositAmount);
    balanceBox.innerText    = parseFloat(balanceTotal) + parseFloat(depositAmount);

    // Clear deposit field
    depositInputBox.value     = '';

    
});



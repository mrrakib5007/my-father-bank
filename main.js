
const btnLogin  = document.getElementById('btn-login');

btnLogin.addEventListener('click', function(){
    const emailInput    = document.getElementById('email-input');
    const email         = emailInput.value;

    const passInput     = document.getElementById('pass-input');
    const password      = passInput.value;

    if(email === 'abcd@gmail.com' && password == '1234'){
        window.location.href = 'another-page.html';

    }else{
        alert('Invalid Input!!');
    }


});
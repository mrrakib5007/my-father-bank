
let userAccountList  = [
    {
        email: 'abcd@gmail.com',
        pass: '1234#6R'
    },
    {
        email: 'abcd12@gmail.com',
        pass: '1234#6Ra'
    },
    {
        email: 'abcd1234@gmail.com',
        pass: '134#6Ra'
    },
];

const btnLogin  = document.getElementById('btn-login');

btnLogin.addEventListener('click', function(){
    const emailInput    = document.getElementById('email-input').value;
    const passInput     = document.getElementById('pass-input').value;

    alert(userAccountList);
});
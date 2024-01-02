const form = document.getElementById('form');
const loginname = document.getElementById('username');
const loginpassword = document.getElementById('password');
const login_button = document.getElementById('login_button');

function formgonder() {
    e.preventDefault();

    if(loginname.value === '123' && loginpassword.value ==='123')
    {
        login_button.textContent='af';
    }
    return;

}

form.addEventListener('submit',formgonder);
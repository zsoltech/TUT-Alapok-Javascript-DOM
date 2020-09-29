const form = document.querySelector('#user-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const roleInput = document.querySelector('#role');
const message = document.querySelector('.message');
const userList = document.querySelector('#userlist');

form.addEventListener('submit', onSubmit);

function onSubmit(ev) {
    ev.preventDefault();

    if (nameInput.value === '') {
        message.classList.add('error');
        message.innerHTML = 'Üres név mező!';
        clearError();

    } else if(!validateEmail(emailInput.value))
    {
        message.classList.add('error');
        message.innerHTML = 'Nem helyes email cím!!';
        
        clearError();
    }
    else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} (${emailInput.value})`));

        userList.appendChild(li);

        nameInput.value = '';
        emailInput.value = '';
    }
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function clearError() {
    setTimeout(() => {
        message.classList.remove('error');
        message.innerHTML = '';
    }, 2000)
}
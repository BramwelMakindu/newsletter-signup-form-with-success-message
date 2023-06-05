const formEl = document.querySelector('.form');
const inputEl = document.querySelector('.input');
const errorMsg = document.querySelector('.error-message');
const dismissBtn = document.querySelector('.dismiss-btn');
const subscribeEl = document.querySelector('.subscribe');
const subscribedEl = document.querySelector('.subscribed');


formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    validateEmail();
});

function validateEmail() {
    if(!inputEl.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        inputEl.classList.add('active');
        errorMsg.classList.add('active');
    } else {
        inputEl.classList.remove('active');
        errorMsg.classList.remove('active');
        inputEl.value = '';
        subscribeEl.classList.add('active');
        subscribedEl.classList.add('active');
    }
}

dismissBtn.addEventListener('click', () => {
    subscribeEl.classList.remove('active');
    subscribedEl.classList.remove('active');
})
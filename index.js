let container = document.querySelector('.container');
let successToast = document.querySelector('.sucess__message');
let emailContainer = document.querySelector('.input__email');
let emailInput = document.querySelector('input[type="email"]');
let submit = document.querySelector('input[type="submit"]');
let error = document.querySelector('.invalid-email');
let emailService = document.querySelector('.email__service');

let userEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org)$/ ;

submit.addEventListener('click', (e)=> {
    e.preventDefault();
    if(emailInput.value === "" | (!userEmail.test(userEmail.value))) {
        error.classList.remove('inactive');
        emailContainer.classList.add('error');
        userEmail.classList.add('invalid-email');
        userEmail.style.color = "red"
    }else {
        document.querySelector('.image').style.display ='none';
        document.querySelector('.copy__text').style.display ='none';
        successToast.classList.remove('inactive');
        emailService.innerText = emailInput.value;
        if(window.innerWidth >=750) {
            container.classList.add('success__message');
        }
    }
})

emailInput.addEventListener('focus' , () => {
    emailInput.style.color = "hsl(234, 29%, 20%)";
    emailContainer.classList.remove('error');
    emailInput.classList.remove('invalid-email');
})
let mainContainer = document.querySelector('.container')
let successMessage = document.querySelector('.success-message');
let emailContainer = document.querySelector('.email-input');
let emailInput = document.querySelector('input[type="email"]');
let submitButton = document.querySelector('input[type="submit"]');
let error = document.querySelector('.error-message');
let emailService = document.querySelector('.email-service');
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org)$/;

submitButton.addEventListener('click',(e)=>{
    e.preventDefault();
    if(emailInput.value === "" || (!emailRegex.test(emailInput.value))){
        error.classList.remove('inactive');
        emailContainer.classList.add('error');
        emailInput.classList.add('error-mail')
        emailInput.style.color = "red";
    }
    else{
        document.querySelector('.image').style.display = "none";
        document.querySelector('.text-email').style.display = "none";
        successMessage.classList.remove('inactive');
        emailService.innerText = emailInput.value;
        if(window.innerWidth >= 750){
            mainContainer.classList.add('success-container');
        }
    }

});
emailInput.addEventListener('focus',()=>{
   emailInput.style.color = "hsl(234, 29%, 20%)"; 
   emailContainer.classList.remove('error');
   emailInput.classList.remove('error-mail');
});
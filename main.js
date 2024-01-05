// Toggle mobile navigation

function toggleNav(){
    const navigation = document.querySelector('.primary-nav')
    const navToggle = document.querySelector('.hamburger-icon')

    navigation.classList.toggle('open')
    navToggle.classList.toggle('open')
}


// Form Validation

const pattern = (/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/);
const email = document.getElementById('email'); 
const error = document.querySelector('.error-msg');

let isValid;

function validation(){

    if(!email.value.match(pattern)){
        error.style.display = "block";
        email.style.borderColor = "hsl(4, 100%, 67%)";
        return false
    } else{
        error.style.display = "none"
        email.style.borderColor = "hsl(142, 76%, 36%)"
        return isValid = true
    };

};
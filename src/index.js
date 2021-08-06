const form = document.getElementById('form');
const firstname = document.getElementById('firstName');
const lastname = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('pwd');

form.addEventListener('submit', (e) => {
e.preventDefault();

checkInputs();
});

function checkInputs() {
// get the value from the inputs
const firstnameValue = firstname.value.trim()
const lastnameValue = lastname.value.trim()
const emailValue = email.value.trim()
const passValue = password.value.trim()

if (firstnameValue === '') {
//show error
//add error
//display success if valid
setErrorFor(firstname, 'First Name cannot be empty')
} else {
setSuccessFor(firstname);
}
if (lastnameValue === '') {
setErrorFor(lastname, 'First Name cannot be empty')
}
if (emailValue === '') {
setErrorFor(email, 'First Name cannot be empty')
}
if (passValue === '') {
setErrorFor(pwd, 'First Name cannot be empty')
}


}

function setErrorFor(input, message) {
const formControl = input.parentElement; // .form-control is the class of input div
const small = formControl.querySelector('small');

// add error message inside small tag
small.innerText = message;
//add error class
formControl.className = 'form-control error'

}


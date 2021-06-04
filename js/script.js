let name = document.querySelector('.reg-name');
let surname = document.querySelector('.reg-surname');
let email = document.querySelector('.reg-email');
let password = document.querySelector('.reg-password');
let conpassword = document.querySelector('.reg-con-password');

let nameVal;
let surnameVal;
let emailVal;
let passwordVal;
let conpasswordVal;

let btnRegistr = document.querySelector('.registr__btn');

let date = new Date();

let nowDay = date.getDate();
let nowMonth = date.getMonth();
let nowYear = date.getFullYear();

let messageErrorText = document.querySelectorAll('.error__text');

btnRegistr.addEventListener('click', function(event){
	event.preventDefault();

	nameVal = name.value.trim();
	surnameVal = surname.value.trim();
	emailVal = email.value.trim();
	passwordVal = password.value.trim();
	conpasswordVal = conpassword.value.trim();

	let user = new User (nameVal, surnameVal, emailVal, passwordVal, conpasswordVal);

	numMessage = 0;

	if (user.validateName() == true && 
	user.validateSurname() == true && 
	user.validateEmail() == true &&
	user.validatePassword() == true &&
	user.validateConPassword() == true) {

		user.setLocalStorage();
		location.replace('page.html');
	}
})

function validateEmaiFormula(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function messageError(input, message){
	input.classList.add('design-false-input');

	messageErrorText[numMessage].textContent = message;
}

function messageTrue(input){
	input.classList.remove('design-false-input')

	messageErrorText[numMessage].textContent = "";
	numMessage++;
}
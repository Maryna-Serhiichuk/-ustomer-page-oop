class User {
	constructor(name, surname, email, password, conpass){
		this.name = name;
		this.surname = surname;
		this.email = email;
		this.password = password;
		this.conpass = conpass;
	}

	validateName(){
		if(this.name == '' || this.name <= 2){
			messageError(name, "Name cannot be blank");
			return false
		} else {
			messageTrue(name);
			return true
		}
	}

	validateSurname(){
		if(this.surname == '' || this.surname <= 2){
			messageError(surname, "Surname cannot be blank");
			return false
		} else {
			messageTrue(surname);
			return true
		}
	}

	validateEmail(){
		if(this.email == ''){
			messageError(email, "Email cannot be blank");
			return false
		} else if (!validateEmaiFormula(this.email)) {
			messageError(email, "Email is not valid");
			return false
		} else {
			messageTrue(email);
			return true
		}
	}

	validatePassword(){
		if(this.password == ''){
			messageError(password, "Password cannot be blank");
			return false
		} else  if(this.password.length < 8) {
			messageError(password, "Password is not valid");
		} else {
			messageTrue(password);
			return true
		}
	}

	validateConPassword(){
		if(this.conpass == ''){
			messageError(conpassword, "Password cannot be blank");
			return false
		} else if (this.conpass != this.password) {
			messageError(conpassword, "Password does not match");
			return false
		} else {
			messageTrue(conpassword);
			return true
		}
	}

	setLocalStorage(){
		var user = {
			"name": this.name,
			"surname": this.surname,
			"email": this.email,
			"password": this.password,

			"role": "newUser",

			"dayRegistration": nowDay,
			"monthRegistration": nowMonth,
			"yearRegistration": nowYear,
		}

		localStorage.setItem("user", JSON.stringify(user));
	}
}
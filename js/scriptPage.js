let nameData = document.querySelector('.page__name');
let surnameData = document.querySelector('.page__surname');
let emailData = document.querySelector('.page__email');

let dateDay = document.querySelector('.page__date-registration-day');
let dateMonth = document.querySelector('.page__date-registration-month');
let dateYear = document.querySelector('.page__date-registration-year');

let datePayDay = document.querySelector('.page__date-pay-day');
let datePayMonth = document.querySelector('.page__date-pay-month');
let datePayYear = document.querySelector('.page__date-pay-year');

let dataUser;

getLocalStorage();

function getLocalStorage(){
	dataUser = localStorage.getItem("user");
	dataUser = JSON.parse(dataUser);

	nameData.textContent = dataUser.name;
	surnameData.textContent = dataUser.surname;
	emailData.textContent = dataUser.email;

	dateDay.textContent = dataUser.dayRegistration;
	dateMonth.textContent = dataUser.monthRegistration;
	dateYear.textContent = dataUser.yearRegistration;
}

let priceGoods = document.querySelectorAll('.goods-price');
let discountPriceGoods = document.querySelectorAll('.goods-price-discount');
let priceGoodsBlock = document.querySelectorAll('.goods-price__block');
let discountPriceGoodsBlock = document.querySelectorAll('.goods-discount__block');

let buttonPay = document.querySelectorAll('.btn-pay-goods');

let datePay = document.querySelector('.page__date-pay');

let date = new Date();

let nowYear = date.getFullYear();
let nowMonth = date.getMonth();
nowMonth = nowMonth + 1;
if(nowMonth == 12){
	nowMonth = 1;
}
let nowDay = date.getDate();

// window.addEventListener('click', discountForClient);

discountForClient();

function discountForClient(){
	for(let i = 0; i < buttonPay.length; i++){
		buttonPay[i].addEventListener('click', function(){
			let newClient = new Client();

			newClient.getDiscount();
			newClient.setLocalStorage();
			getLocalStorage();
			datePay.classList.add('active-discount');
		})
	}

	datePayDay.textContent = dataUser.dateDayPay;
	datePayMonth.textContent = dataUser.dateMonthPay;
	datePayYear.textContent = dataUser.dateYearPay;
}
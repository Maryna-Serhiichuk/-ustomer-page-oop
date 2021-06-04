class Client extends User{
	constructor(){
		super();
	}
	getDiscount(){
		for(let i = 0; i < priceGoods.length; i++){

			let priceWithoutDiscount = priceGoods[i].textContent;
			let discountPrice = Math.round(priceWithoutDiscount / 100 * 95);

			discountPriceGoods[i].textContent = discountPrice;

			priceGoodsBlock[i].classList.add('active-discount');
			discountPriceGoodsBlock[i].classList.add('active-discount');
		}
	}

	setLocalStorage(){
		dataUser = localStorage.getItem("user");
		dataUser = JSON.parse(dataUser);

		dataUser.dateDayPay = nowDay;
		dataUser.dateMonthPay = nowMonth;
		dataUser.dateYearPay = nowYear;


		localStorage.setItem("user", JSON.stringify(dataUser));
	}
}
const drinkAbout =(age)=>{
	switch (true){
		case age < 14:
			return 'Drink toddy';
			break;
		case age <18:
			return 'Drink coke';
			break;
		case age <21:
			return 'Drink beer';
			break;
		default:
			return 'Drink whisky';
	}
}

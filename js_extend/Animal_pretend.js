function AnimalPre(color) {
	this.color = color;
	this.sayColor = () => {
		console.log("Hi, my color is " + this.color);
	}
}
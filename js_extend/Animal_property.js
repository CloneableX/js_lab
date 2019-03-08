function AnimalPro() {
	
}

AnimalPro.prototype.color = "blue";
AnimalPro.prototype.sayColor = function() {
	console.log("Hi, my color is " + this.color);
};
function AnimalMix() {}

function AnimalMix(color) {
	this.color = color;
}

AnimalMix.prototype.sayColor = function() {
	console.log("Hi, my color is " + this.color);
}
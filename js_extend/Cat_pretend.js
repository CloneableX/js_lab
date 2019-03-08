function CatPre(color) {
	this.newMethod = AnimalPre;
	this.newMethod(color);
	delete this.newMethod;
}

function CatPreMulti(color, age) {
	this.newMethod = AnimalPre;
	this.newMethod(color);
	delete this.newMethod;
	
	this.newMethod = ReptilePre;
	this.newMethod(age);
	delete this.newMethod;
}

function CatPreCall(color) {
	AnimalPre.call(this, color);
}

function CatPreApply(color) {
	AnimalPre.apply(this, new Array(color));
}
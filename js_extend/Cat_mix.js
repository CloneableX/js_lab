function CatMix(color) {
	AnimalMix.call(this, color);
}

CatMix.prototype = new AnimalMix();
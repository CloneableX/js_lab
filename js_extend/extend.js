/**
 There are three approaches to achieve the extend by javascript:
 1.Pretend Object
 2.Prototype chaining
 3.mixed
*/

const pretendObj = () => {
	let animal = new AnimalPre("white");
	let cat = new CatPre("yellow");
	animal.sayColor();
	cat.sayColor();
}

/** 
 The Object can extend multiple objects by pretending object,
 but properties of the front object can be overrided by the latter one
*/
const pretendObjMulti = () => {
	let cat = new CatPreMulti("yellow", 3);
	cat.sayColor();
	cat.sayAge();
}

const pretendObjCall = () => {
	let cat = new CatPreCall("yellow");
	cat.sayColor();
}

const pretendObjApply = () => {
	let cat = new CatPreApply("yellow");
	cat.sayColor();
}

/**
 Prototype chaining make object only uses empty construct method,
 but it also makes 'subObject instanceof object' is true
*/
const prototypeChaining = () => {
	let animal = new AnimalPro();
	animal.color = "blue";
	let cat = new CatPro();
	cat.color = "gray";
	animal.sayColor();
	cat.sayColor();
	
	console.log(cat instanceof AnimalPro);
	console.log(cat instanceof CatPro);
	console.log(animal instanceof CatPro);
}

const mix = () => {
	let animal = new AnimalMix("blue");
	let cat = new CatMix("yellow");
	animal.sayColor();
	cat.sayColor();
}
function ReptilePre(age) {
	this.age = age;
	this.sayAge = () => {
		console.log("Hi, my age is " + this.age);
	}
	this.sayColor = () => {
		console.log("Hello, my color is " + this.color);
	}
}
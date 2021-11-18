function Person(name, age) {
  this.name = name;
  this.age = age;

  console.log(this.name, this.age);
}

var roy = new Person('로이', 30);
var royClone1 = new roy.__proto__.constructor('로이클론1', 10);
var royClone2 = new roy.constructor('로이클론2', 25);
var royClone3 = new Object.getPrototypeOf(roy).constructor('로이크론3', 20);
var royClone4 = new Person.prototype.constructor('로이클론4', 15);

console.log(roy);
console.log(royClone1);
console.log(royClone2);
console.log(royClone3);
console.log(royClone4);

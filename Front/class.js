// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   hello() {
//     console.log(`Hello! nice to meet you! My name is ${this.name}.`);
//   }

//   static sayHi() {
//     console.log(`Hi! My name is ${this.name}`);
//   }
// }

// function Player(name) {
//   this.name = name;
// }

// Player.prototype.run = function () {
//   console.log(`선수 ${this.name}이(가) 공을 가지고 달린다.`);
// };

// Player.shoot = function () {
//   console.log(`${this.name} 슛!!!`);
// };

// Player.shoot();

// console.log(typeof Person);
// console.dir(Person);

// Person.sayHi();
// const me = new Person('Son');
// console.log(me);
// me.hello();

// new Person('Kevin').hello();

// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }

//   set fullName(name) {
//     [this.firstName, this.lastName] = name.split(' ');
//   }
// }

// const me = new Person('Yeongsan', 'Son');

// console.log(`${me.firstName} ${me.lastName}`);

// me.fullName = 'Bruyne Kevin'; // setter
// console.log(me);

// console.log(me.fullName);

// console.log(Object.getOwnPropertyDescriptor(Person.prototype, 'fullName'));

// function Animal(age, weight) {
//   this.age = age;
//   this.weight = weight;
// }

// Animal.prototype.eat = function () {
//   return 'eat';
// };

// Animal.prototype.move = function () {
//   return 'move';
// };

// function Bird() {
//   Animal.apply(this, arguments);
// }

// Bird.prototype = Object.create(Animal.prototype);
// Bird.prototype.constructor = Bird;

// Bird.prototype.fly = function () {
//   return 'fly';
// };

// const bird = new Bird(1, 5);
// console.log(bird);
// console.log(bird.eat());
// console.log(bird.move());
// console.log(bird.fly());

class MyArray extends Array {
  static get [Symbol.species]() {
    return Array;
  }

  uniq() {
    return this.filter((v, i, self) => {
      console.log('v → ', v, 'i → ', i, 'self → ', self);
      return self.indexOf(v) === i;
    });
  }

  average() {
    return this.reduce((pre, cur) => pre + cur, 0) / this.length;
  }
}

const myArray = new MyArray(1, 1, 2, 3);
console.log('myArray uniq() → ', myArray.uniq());

console.log(myArray.uniq() instanceof MyArray);
console.log(myArray.uniq() instanceof Array);

console.log(myArray.uniq().average());

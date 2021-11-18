/*
const base = {
  name: 'Son',
  sayHi() {
    return `Hi! ${this.name}`;
  },
};

const derived = {
  // __proto__: base,
  // sayHi는 ES6메서드 → [[HomeObject]] 소유 → 메서드를 바인딩한 객체를 가리킨다
  // sayHi의 [[HomeObject]]는 derived.prototype을 가리키고
  // super는 sayHi의 [[HomeObject]]의 프로토타입인 base.prototype을 가리킨다.
  sayHi() {
    return `${super.sayHi()}. how are you doing?`;
  },
};

console.log(derived.__proto__);
derived.__proto__ = base; // derived의 프로토타입을 base 객체로 한다?
// console.log(derived.__proto__);
console.log(base.__proto__);
console.log(derived.sayHi()); // Hi Son. how are you doing?
*/

// const Bar = function () {};
// const Foo = () => {};

// console.log(Bar.hasOwnProperty('prototype')); // → true
// console.log(Foo.hasOwnProperty('prototype')); // → false
// console.log(Bar.prototype);
// console.log(Foo.prototype);

// function normal(a, a) {
//   console.log('a =>', a);
//   return a + a;
// }
// console.log(normal(1, 2)); // 4

// const add = (a, b) => {
//   console.log(a, b);
//   return a + b;
// };

// console.log(add.call(null, 1, 2)); // 3
// console.log(add.apply(null, [1, 2])); // 3
// console.log(add.bind(null, 1, 2)()); // 3

// const person = {
//   name: 'Son',
//   sayHi: () => {
//     console.log(`Hi! ${this.name}!`);
//   },
// };

// person.sayHi();

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.sayHi = function () {
//   console.log(`Hi! ${this.name}!`);
// };

// const person = new Person('Son');
// person.sayHi(); // Hi!Son!

// function foo(param, ...rest) {
//   console.log(param); // 1
//   console.log(rest); // [2, 3, 4, 5]
// }

// foo(1, 2, 3, 4, 5);

// function foo(...rest, param1, param2) {
// 	console.log(rest);
// 	console.log(param1);
// 	console.log(param2);
// }

// foo(1, 2, 3, 4, 5)

// function sum(...args) {
//   // Rest 파라미터 args에는 배열 [1, 2, 3, 4, 5]가 할당
//   console.log(Array.isArray(args));
//   return args.reduce((pre, cur) => pre + cur, 0);
// }
function sum() {
  console.log(Array.isArray(arguments));
}

console.log(sum(1, 2, 3, 4, 5));

// const x = 1;
// function foo() {
//   const x = 10;
//   bar();
//   console.dir(bar);
// }

// function bar() {
//   console.log(x);
// }

// console.dir(foo);
// foo();
// bar();

// function foo() {
//   const x = 1;
//   const y = 2;

//   function bar() {
//     const z = 3;

//     debugger;
//     console.log(x, y);
//     console.log(z);
//   }

//   return bar;
// }

// const bar = foo();
// bar();

// const Person = (function () {
//   let _age = 0;

//   function Person(name, age) {
//     this.name = name;
//     _age = age;
//   }

//   Person.prototype.sayHi = function () {
//     console.log(`Hi! My name is ${this.name}. I am ${_age}.`);
//   };

//   return Person;
// })();

// const me = new Person('Son', 31);
// me.sayHi();
// console.log(me.name);
// console.log(me._age);

// const you = new Person('Kim', 30);
// you.sayHi();
// console.log(you.name);
// console.log(you._age);

// me.sayHi();
// you.sayHi();

var funcs = [];

for (var i = 0; i < 3; i++) {
  funcs[i] = function () {
    return i;
  };
}

console.log(i);
console.log(funcs);

for (var j = 0; j < funcs.length; j++) {
  console.log(funcs[j]());
}

// function foo() {
//   console.log(this.a);
// }

// function bar(callback) {
//   console.log(callback);
//   callback();
// }

// let obj = {
//   a: 2,
//   foo,
// };

// var a = '엥, 전역이네.';

// obj.foo();
// setTimeout(obj.foo, 10000);
// bar(obj.foo);

// function foo() {
//   return a => {
//     console.log(this.a);
//   };
// }
function foo() {
  return function () {
    console.log(this.a);
  };
}

var obj1 = {
  a: 2,
};

var obj2 = {
  a: 3,
};

var bar = foo.call(obj1);
bar.call(obj2);

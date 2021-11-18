/*
var value = 1;

const obj = {
  value: 100,
  foo() {
    console.log("foo's this: ", this);
    setTimeout(
      function () {
        console.log("general func callbakc's this: ", this);
        console.log("general callback's this.value: ", this.value);
      }.bind(this),
      100
    );
    // 일반함수로 작성한 콜백함수를 apply/call/bind 메서드를 통해서 this를 간접 호출할 수 있다. → 명시적 this 바인딩
    // Function prototype이 Object prototype을 참조하도록???
  },
};

const obj2 = {
  value: 100,
  foo() {
    console.log("foo's this: ", this);
    setTimeout(() => {
      console.log("arrow func callbakc's this: ", this);
      console.log("arrow func callback's this.value: ", this.value);
    }, 100);
  },
};

obj.foo();
obj2.foo();
*/
function Person(name) {
  console.log(Person.prototype.name);
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

const me = new Person('Sonny');

console.log(1);
console.log(me.getName());

Person.prototype.name = 'Kevin';

console.log(2);
console.log(Person.prototype.getName());

const kevin = new Person();
const you = new Person('silva');

console.log(3);
console.log(kevin.getName());
console.log(4);
console.log(you.getName());

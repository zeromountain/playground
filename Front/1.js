const strObj = new String('Son');
const str = String('Sonny');

console.log('문자열 생성자 함수 → ', strObj); // String {'Son'}
console.log('문자열 생성자 함수 타입 → ', typeof strObj); // object
console.log('new 연산자 없는 생성자 함수 → ', str); // Sonny
console.log('new 연산자 없는 생성자 함수 타입 → ', typeof str); // string

const numObj = new Number(123);
const num = Number(123);

console.log('숫자 생성자 함수 → ', numObj); // Number {123}
console.log('숫자 생성자 함수 타입 → ', typeof numObj); // object
console.log('new 연산자 없는 숫자 생성자 함수 → ', num); // 123
console.log('new 연산자 없는 숫자 생성자 함수 타입 → ', typeof num); // number

const boolObj = new Boolean(1);
const bool = Boolean(1);

console.log('불린 생성자 함수 → ', boolObj); // Boolean {true}
console.log('불린 생성자 함수 타입 → ', typeof boolObj); // object
console.log('new 연산자 없는 불린 생성자  함수 → ', bool); // true
console.log('new 연산자 없는 불린 생성자  함수 타입 → ', typeof bool); // boolean

const func = new Function('x', 'return x * x');
const func1 = Function('x', 'return x * x');

console.log('Function 생성자 함수 → ', func); // ƒ anonymous(x) { return x * x }
console.log('Function 생성자 함수 타입 → ', typeof func); // function
console.log('new 연산자 없는 Function 생성자 함수 → ', func1); // ƒ anonymous(x) {return x * x}
console.log('new 연산자 없는 Function 생성자 함수 타입 → ', typeof func1); // function

const arr = new Array(1, 2, 3);
const array = Array(1, 2, 3);

console.log('Array 생성자 함수 → ', arr); // (3) [1, 2, 3]
console.log('Array 생성자 함수 타입 → ', typeof arr); // object
console.log('new 연산자 없는 Array 생성자 함수 → ', array); // (3) [1, 2, 3]
console.log('new 연산자 없는 Array 생성자 함수 타입 → ', typeof array); // object

const regExp = new RegExp(/ab+c/i);
const regExp1 = RegExp(/ab+c/i);

console.log('RegExp 생성자 함수 → ', regExp); // /ab+c/i
console.log('RegExp 생성자 함수 타입 → ', typeof regExp); // object
console.log('new 연산자 없는 RegExp 생성자 함수 → ', regExp1); // /ab+c/i
console.log('new 연산자 없는 RegExp 생성자 함수 타입 → ', typeof regExp1); // object

const date = new Date();
const date1 = Date();

console.log('Date 생성자 함수 → ', date); // Wed Nov 10 2021 16:26:50 GMT+0900 (한국 표준시)
console.log('Date 생성자 함수 타입 → ', typeof date); // object
console.log('new 연산자 없는 Date 생성자 함수 → ', date1); // Wed Nov 10 2021 16:26:50 GMT+0900 (한국 표준시)
console.log('new 연산자 없는 Date 생성자 함수 타입 → ', typeof date1); // string

console.log(`전역 범위에서 this 출력 → `);
console.log(this);
/* 
전역 범위에서 this 출력 → Window {window: Window, self: Window, document: document, name: 'Kevin', location: Location, …}
*/

function square(number) {
  console.log(`일반 함수에서 this 출력 → `);
  console.log(this);
  return number * number;
}

square(2);
/* 
일반 함수에서 this 출력 → Window {window: Window, self: Window, document: document, name: 'Kevin', location: Location, …}
*/

const person = {
  name: 'Son',
  getName() {
    console.log('메서드 내부에서 this 출력 → ');
    console.log(this);
    return this.name;
  },
};
/* 
메서드 내부에서 this 출력 → {name: 'Son', getName: ƒ}
*/
console.log(person.getName()); // Son

function Person(name) {
  console.log(`Person 생성자함수 초기화 전 this → `);
  console.log(this);
  this.name = name;
  console.log(`Person 생성자함수 초기화 후 this → `);
  console.log(this);
}

function Player(name) {
  console.log('Player 생성자 함수 new 연산자 없이 호출 시 초기화 전 this → ');
  console.log(this);
  this.name = name;
  console.log('Player 생성자 함수 new 연산자 없이 호출 시 초기화 후 this → ');
  console.log(this);
}

const me = new Person('Sonny');
/* 
Person 생성자함수 초기화 전 this → Person {}
Person 생성자함수 초기화 후 this → Person {name: 'Sonny'}
*/
const you = Player('Kevin');
/*
Player 생성자 함수 new 연산자 없이 호출 시 초기화 전 this → Window {window: Window, self: Window, document: document, name: 'Kevin', location: Location, …}
Player 생성자 함수 new 연산자 없이 호출 시 초기화 후 this → Window {window: Window, self: Window, document: document, name: 'Kevin', location: Location, …}
전역 객체가 생성될 때, new 연산자 없이 호출된 Player 함수 내부의 this가 같이 평가되어 전역 객체의 프로퍼티로 저장된다?
*/

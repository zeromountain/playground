/*
console.log('start');

foo(); // 참조에러 발생해 프로그램이 종료된다.

console.log('end'); // → 프로그램이 종료되어 해당 부분의 코드가 실행되지 않는다.
*/

console.log('start');

try {
  foo(); // 레퍼런스 에러 발생해 catch문으로 이동한다.
} catch (e) {
  console.error('Invoke Error', e); // → 에러 핸들링 해주고 있기 때문에, 프로그램이 종료되지 않고 이후의 코드까지 실행된다.
}

console.log('end');

const $button = document.querySelector('button');
// $button.classList.add('disabled'); // → 버튼 요소가 없기 때문에 타입 에러가 발생한다.
$button && $button.classList.add('disabled'); // → 논리연산 단축평가: 버튼 요소가 존재하면 버튼 요소에 dsiabled 클래스를 추가한다.
$button?.classList.add('disabled'); // → 옵셔널 체이닝 단축평가: ? 연산자 앞의 요소가 참값이면 disabled 클래스를 추가한다.

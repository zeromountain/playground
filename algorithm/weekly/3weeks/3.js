/**
[문제 설명]
전 세계의 알파벳들이 기차놀이를 하기 위해서 한 장소에 모였습니다.
뒤죽박죽 동일한 스펠링의 알파벳들도 섞여 들어가 있습니다.
여기에서 반복 없이 가장 긴 알파벳의 나열 문자를 찾아보세요.
[제한 사항]
- 기차 놀이의 참가자는 중복될 수 있습니다.
- 끊김없는 가장 연속적인 문자열을 골라보세요.

[입력 형식]
- str = "abcdefghijklmnopqrstuvwxyz"
[출력 형식]
- 26
 */

function solution(str) {
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1] && !arr.includes(str[i])) arr.push(str[i]);
    else arr = [];
  }

  return arr.length;
}

console.log(solution('abcdefg'));
console.log(solution('abssccbsbsv'));
console.log(solution('bbbb'));

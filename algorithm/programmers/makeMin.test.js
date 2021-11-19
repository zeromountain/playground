const solution = require('./makeMin.js');
// function solution(a, b) {
//   let answer = 0;
//   a.sort((a, b) => a - b);
//   b.sort((a, b) => b - a);

//   for (let i = 0; i < a.length; i++) {
//     answer += a[i] * b[i];
//   }

//   return answer;
// }

test('3개의 요소를 가진 두 배열의 최소값', () => {
  expect(solution([1, 4, 2], [5, 4, 4])).toBe(29);
});
test('2개의 요소를 가진 두 배열의 최소값', () => {
  expect(solution([1, 2], [3, 4])).toBe(10);
});

// function solution(arr) {
//   let answer = arr.reduce((acc, curr) => {
//     acc[curr] = acc[curr] ? acc[curr] : 1;
//     return acc;
//   }, {});

//   return Object.keys(answer);
// }
function solution(arr) {
  let answer = arr.filter((v, i) => {
    return arr.indexOf(v) === i; // 첫 요소의 인덱스와 arr 배열의 인덱스가 같은 경우만 필터
  });
  return answer;
}

console.log(solution(['good', 'time', 'good', 'time', 'student']));

module.exports = solution;

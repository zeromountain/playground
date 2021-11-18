/**
 * [문제설명]
 * 0 이상의 자연수 n이 주어질 때, n의 이진 표현에서 인접한 두 1 사이의 가장 긴 거리를 반환하는 함수, solution을 완성해주세요.
 * 예를 들어, n이 주어질 때의 결과는 다음과 같습니다.
 *
 * > n: 5
 * > n의 이진 표현: 101
 * > 결과 : 2
 *
 * > n: 11
 * > n의 이진 표현: 1011
 * > 결과 2
 *
 * [입력형식]
 * n은 0이상 10^9 이하의 자연수입니다.
 *
 * [출력형식]
 * n의 이진 표현에서 인접한 두 1 사이의 가장 긴 거리를 반환합니다.
 *
 * @param n {number}
 * @return {number}
 */

function getLength(n) {
  let binary = n.toString(2);
  let len = [];
  let maxLength = 0;
  console.log(binary);
  // 1과 1사이의 거리....
  // 1011 1000000001  10000000000000001  10000000000000000001  100000000000000000000001  100000000000000000000000001
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] == '1') len.push(i);
  }
  return len.length == 2 ? len[len.length - 1] : len[len.length - 1] - 1;
}

module.exports = getLength;

/*
[문제 설명]
정수 n이 주어집니다. 1부터 n까지의 수를 각각 이진수로 나타내었을 때, 1이 등장하는
두 번째 최상위 비트의 자리수를 더하여 출력하시오.
예를 들어, 131을 이진수로 나타내면 10000011이고, 최상위 비트는 2 7승 자리의 1이며,
두 번째 최상위 비트는 2 1승 자리의 1입니다.

만약 4와 같이 이진수로 나타내었을 때 1이 단 한 번만 나타나는 수의 경우에는 0을
더합니다.

[제한 사항]

n ≤ 1,000,000

[입력 형식]
정수 n이 입력됩니다.
[출력 형식]
1부터 n까지의 수를 각각 이진수로 나타내었을 때, 1이 등장하는 최상위 비트의
자리수를 더하여 출력하세요.

[입출력예시#!]
n: 100
output: 954

[입출력예시#2]
n: 10
output: 9
*/
/*
 * @param n {number}
 *
 * @return {number}
 */

const getBinary = n => {
  const binary = n.toString(2);
  console.log(binary);
};

getBinary(4);
getBinary(10);
getBinary(9);
getBinary(100);
getBinary(954);

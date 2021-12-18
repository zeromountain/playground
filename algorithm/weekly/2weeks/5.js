/*
[문제 설명]
문자열 N개가 주어졌습니다. 이 문자열과 접두어를 일대일대응으로 만들 수 있는 최소
접두어의 길이 K를 구해주세요. 만약 K가 문자열의 길이보다 크다면, 이 문자열 전체를
접두어로 사용하게 됩니다. 즉, “long”의 길이 5짜리 접두어는 “long”이 됩니다.

[제한 사항]
문자열은 중복되지 않습니다.

[매개변수 & Return Type]
S : string[]
return: number

[입력 형식]
매개변수 S 배열에 N (1 <= N <= 10,000)개의 문자열이 입력됩니다. 각 문자열은 100자를
넘지 않으며, 알파벳 소문자로만 이루어져 있습니다.

[출력 형식]
K를 반환하세요.

[입출력예시#1]
S: ['abcde', 'aaaa', 'abacad', 'bcdea', 'bcbbb']
output: 3

[입출력예시#2]
S: ['abcde', 'aa', 'a', 'bcd', 'bdbb']
output: 2
*/

/**
 * @param S {string[]}
 * @return {number}
 */
const getLength = S => {
  var answer = 0;
  return answer;
};

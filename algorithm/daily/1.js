/**
 * 애너그램(해쉬맵)
 * Anagram이란 두 문자열이 알파벳의 나열 순서는 다르지만 그 구성이 일치하면 두 단어는 아나그램이라고 합니다.
 * 예를 들면 AbaAeCe와 baeeACA는 알파벳 나열 순서는 다르지만 그 구성을 살펴보면 A(2), a(1), b(1), C(1), e(2)로 알파벳과 그 개수가 모두 일치합니다.
 * 즉 어느 한 단어를 재배열하면 상대편 단어가 될 수 있는 것을 아나그램이라 합니다.
 * 길이가 같은 두 개의 단어가 주어지면 두 단어가 아나그램인지 판별하는 프로그램을 작성하세요.
 * 아나그램 판별시 대소문자가 구분됩니다.
 *
 * ('AbaAeCe', 'baeeACA') => true
 * ('abaCC', 'Caaab') => fase
 */

// 애너그램 판별: 문자열을 구성하는 각 문자의 갯수가 일치하면 애너그램이다.

function isAnagram(str1, str2) {
  // 문자열을 배열로 변환하는 방법

  let result = false;

  const map1 = str1.split('').reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
  const map2 = str2.split('').reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  // 배열을 순회할때는 for in문은 안티패턴
  // for... of 로

  for (let key in map1) {
    console.log(key);
    // if (map1[key] === map2[key]) {
    //   result = true;
    // }
  }
  // console.log(map1, map2);
  return result;
}

// console.log(isAnagram('AbaAeCe', 'baeeACA')); // true
// console.log(isAnagram('abaCC', 'Caaab')); // false
// console.log(isAnagram('', 'b')); // false

const count = word => {
  // 해시맵 생성
  // 함수보다는 표현식으로 작성하는 것이 가독성이나 사용하는 부분에서 간편하다
  return [...word].reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1; // truthy값이면 acc[curr] falsy값이면 0
    // acc[curr] = acc[curr] === undefined ? 1 : acc[curr] + 1;
    return acc;
  }, {});
};

function isAnagram2(word1, word2) {
  if (word1.length !== word2.length) return false; // 문자열의 길이가 다른 경우 걸러준다.

  // 'AbaAeCe' hash => {A: 2, b: 1, a: 1, e: 2, C: 1}
  // const hash1 = count(word1);
  // const hash2 = count(word2);
  const [hash1, hash2] = [count(word1), count(word2)];
  // console.log(hash1, hash2);
  // 해시 객체의 키로 생성한 배열
  // console.log(Object.keys(hash1));
  return Object.keys(hash1).every(key => hash1[key] === hash2[key]);
}

console.log(isAnagram2('AbaAeCe', 'baeeACA')); // true
console.log(isAnagram2('abaCC', 'Caaab')); // false
console.log(isAnagram2('', 'b')); // false

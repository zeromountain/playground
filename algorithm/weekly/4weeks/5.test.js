function solution(p, s) {
  let count = 0;
  let modified = p
    .split('')
    .map(word => {
      if (word === '*') return '.*';
      else if (word === '?') return '.';
      else return word;
    })
    .join('');
  const regExp = new RegExp(`^${modified}`);
  // console.log(regExp);
  for (let word of s) {
    if (word.match(regExp)) count++;
  }
  // ? → 어떤 글자와도 매칭 → 길이 제한 1 → 정규식 . 대체
  // * → 0글자 이상의 어떤 글자와도 매칭 → 길이 제한 없음 → 정규식 .* 대체

  return count;
}

test('패턴에 매칭되는 텍스트의 개수는?', () => {
  expect(
    solution('fast*', ['fastcampus', 'fast', 'faster', 'notfast', 'notfaster'])
  ).toBe(3);
});
test('패턴에 매칭되는 텍스트의 개수는?', () => {
  expect(
    solution('*?as?*', ['fastcampus', 'fast', 'faster', 'notfast', 'notfaster'])
  ).toBe(5);
});
test('패턴에 매칭되는 텍스트의 개수는?', () => {
  expect(solution('xy?', ['axy', 'axyz', 'xy', 'xyz'])).toBe(1);
});
test('패턴에 매칭되는 텍스트의 개수는?', () => {
  expect(solution('?', ['a', 'bc', 'def', 'alpha'])).toBe(1);
});
test('패턴에 매칭되는 텍스트의 개수는?', () => {
  expect(solution('*', ['a', 'bc', 'def', 'beta'])).toBe(4);
});
test('패턴에 매칭되는 텍스트의 개수는?', () => {
  expect(
    solution('***********************************fast', [
      'fastcampus',
      'fast',
      'faster',
      'notfast',
      'notfaster',
    ])
  ).toBe(2);
});

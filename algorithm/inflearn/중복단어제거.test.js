const solution = require('./중복단어제거');

test('중복 단어를 제거합니다.', () => {
  expect(solution(['good', 'time', 'good', 'time', 'student'])).toStrictEqual([
    'good',
    'time',
    'student',
  ]);
});

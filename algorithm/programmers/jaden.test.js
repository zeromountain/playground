const solution = require('./jaden');

test('문자에 숫자가 포함된 경우에 Jaden Case 문자로 바꿔봅시다.', () => {
  expect(solution('3people unFollowed me')).toBe('3people Unfollowed Me');
});
test('문자열만 주어진 경우 Jaden Case 문자로 바꿔봅시다.', () => {
  expect(solution('for the last week')).toBe('For The Last Week');
});

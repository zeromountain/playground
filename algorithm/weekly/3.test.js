const getLength = require('./3');

test('1과 1사이의 최대 길이', () => {
  expect(getLength(11)).toBe(2);
});
test('1과 1사이의 최대 길이', () => {
  expect(getLength(513)).toBe(9);
});
test('1과 1사이의 최대 길이', () => {
  expect(getLength(65537)).toBe(16);
});
test('1과 1사이의 최대 길이', () => {
  expect(getLength(524289)).toBe(19);
});
test('1과 1사이의 최대 길이', () => {
  expect(getLength(8388609)).toBe(23);
});
test('1과 1사이의 최대 길이', () => {
  expect(getLength(67108865)).toBe(26);
});

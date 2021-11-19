function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  return A.reduce(
    (accumulator, currentValue, index) =>
      (accumulator += currentValue * B[index]),
    0
  );
}

module.exports = solution;

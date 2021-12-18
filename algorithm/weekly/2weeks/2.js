/*
[문제 설명]
세 점의 좌표 x1, y1, x2, y2, x3, y3 가 주어질 때, 세 점으로 만들 수 있는 삼각형의 넓이에
2를 곱하여 출력하세요. 만약 세 점이 일직선상에 위치하는 경우에는 0을 출력합니다.
[제한 사항]

|x1|, |y1|, |x2|, |y2|, |x3|, |y3| ≤1000

[입력 형식]
세 점의 x, y좌표가 x 순서대로 들어옵니다.


x1, y1, x2, y2, x3, y3

[출력 형식]
세 점을 연결하여 만들 수 있는 삼각형의 넓이에 2를 곱하여 출력합니다.

[입출력예시]
입력: 0 0 1 1 2 2
출력: 0

입력: 1 1 2 5 3 4 
출력: 5
*/

/*
 * @param x1 {number}
 * @param y1 {number}
 * @param x2 {number}
 * @param y2 {number}
 * @param x3 {number}
 * @param y3 {number}
 *
 * @return {number}
 */
const getWidth = coords => {
  // ① 삼각형의 밑변과 높이 구하기
  // 밑변은 (x, y) 최소 좌표에서 x 축에 대한 길이 → (0, 0)에서 (5, 0)
  // 높이는 (x, y) 최소 좌표에서 y 축에 대한 길이 → (0, 0)에서 (0, 5)
  // ② 삼각형 너비 → 밑변 x 높이 ➗ 2 인데 2를 곱하면 결과적으로 밑변과 높이의 곱을 구하는 함수
  // ③ 삼각형을 만족하지 못하는 경우 0 반환
  const [x1, y1, x2, y2, x3, y3] = coords;
  const base = Math.max(x1, x2, x3) - Math.min(x1, x2, x3);
  const height = Math.max(y1, y2, y3) - Math.min(y1, y2, y3);

  return base * height;
};

// getWidth([1, 1, 2, 5, 3, 4]);
console.log(getWidth([0, 0, 0, 5, 5, 0]));
console.log(getWidth([0, 0, 10, 0, 5, 5]));
console.log(getWidth([1, 1, 2, 5, 3, 4]));
console.log(getWidth([0, 0, 1, 1, 2, 2]));

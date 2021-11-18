/**
 * [문제설명]
 * r * c 크기의 온실에 식물을 키우고 있습니다. 식물이 잘 자라도록 n * n 만큼 커버가 가능한 램프를 설치하려고 합니다.
 * r * c 크기의 field에 식물이 없는 경우 0으로, 식물이 있는 경우 1로 주어지고, 램프의 크기 n이 주어질 때,
 * 최대한 커버 가능한 식물의 수를 구하는 함수, solution을 완성해 주세요.
 *
 * 예를 들어, 3 x 3 크기의 온실 [[1, 0, 1], [0, 0, 1], [0, 1, 1]]가 그림 (a)와 같이 주어지고 램프의 크기 2가 주어질 때,
 * 최대한 커버 가능한 식물의 수는 그림 (b)와 같이 3입니다.
 *
 * [제한 사항]
 * 주어진 식물은 옮겨 심을 수 없습니다.
 *
 * [입력형식]else
 * 온실의 식물 정보 field가 주어집니다.
 * field는 0과 1로 이루어진 r x c 크기의 2차원 배열입니다.
 * 온실의 크기 r과 c는 1이상 100이하의 자연수입니다.
 * 램프의 크기 n이 주어집니다.
 * n은 1 이상 r과 c 이하의 자연수입니다.
 *
 * [출력형식]
 * 램프로 최대한 커버 가능한 식물의 수를 출력합니다.
 *
 * @param field{number[][]}
 * @param n {number}
 * @return {number}
 */

// 2차원 배열에서 특정 범위내의 최대값 구하기?
// 램프의 범위 => n x n

function countPlant(field, n) {
  let row = field.length;
  let answer = 0;

  // 4 x 7
  for (let i = 0; i <= row - n; i++) {
    // 0, 1
    let col = field[i].length;
    for (let j = 0; j <= col - n; j++) {
      // 0, 1, 2, 3, 4
      let count = 0;
      for (let k = i; k < i + n; k++) {
        // i: 0 → k: 0, 1, 2 ‼️ i: 1 → k: 1, 2, 3
        for (let l = j; l < j + n; l++) {
          // console.log(field);
          // j:0 → l: 0, 1, 2 ↺↺ j: 1 → l: 1, 2, 3 ↺↺ j: 2 → l: 2, 3, 4 ↺↺ j: 3 → l: 3, 4, 5 ↺↺ j: 4 → l: 4, 5, 6
          if (field[k][l] === 1) count++;
        }
      }
      answer = Math.max(answer, count);
    }
  }
  return answer;
}

module.exports = countPlant;

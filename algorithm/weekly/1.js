/* 
[문제설명]
코로나로 인해 건물에 출입하는 인원의 시간을 체크하고 있습니다. 
출입 기록인 history에는 출입한 사람의 번호 배열이 저장되어 있습니다.
history에는 건물에 들어올 때에는 양수가, 나갈 때에는 음수가 기록됩니다.
이때, 확진자 번호 infected가 주어질 때, 확진자와 동선이 겹치는 사람의 번호를 
오름차순으로 출력하는 함수, solution을 완성해주세요.

예를 들어, histroy가 [3, 2, -3, 1, -1, -2, 4, -4, 1, -1]이고, infected가 2로 주어질 때, 확진자와 동선이 겹치는 사람은 
[1, 3] 입니다.

[제한사항]
- 사람은 건물을 여러 번 출입할 수 있습니다.
- 주어지는 history에는 건물에 남아있는 사람이 없습니다.

[입력형식]
- 출입 기록인 history가 주어집니다.
- history는 1이상 100 이하의 자연수로 이루어진 길이가 1000 이하의 배열입니다.
- 확진자 번호인 infected가 주어집니다.
- infected는 1이상 100이하의 자연수입니다.

[출력형식]
- 확진자와 동선이 겹치는 사람의 번호를 오름차순 배열로 출력합니다.

* @param history {number[]}
* @param infected {number}
* @return {number[]}
*/

/**
 *
 * 확진자 동선 파악 → 확진자의 건물 퇴장 전에 있었던 사람들은 확진 의심자로 간주
 * 확진자 동선 범위에서
 *
 */

/**
 * 확진자가 들어온 시점부터 확진자가 나간 시점 => slice(=> slice한 요소 시작점은 그대로, 요소 끝점은 + 1), indexOf
 * 확진자가 들어오기 전에 나가지 않은 사람 =>
 */

// function solution(history, infected) {
//   let infectedExit = history.indexOf(-infected);
//   let suspectedInfection = [];
//   console.log(infectedExit);

//   // 확진자가 퇴장하는 경우를 찾지 못할때까지 반복
//   while (infectedExit === -1) {
//     // 확진자와 동선이 겹치는 사람들
//     let line = history.slice(0, infectedExit + 1);
//     // 3, -3, 2, 1, -1
//     console.log(history);
//     // console.log(line);
//     // line 변수에 속한 사람은 의심 확진자로 분류
//     // 동선에서 의심 확진자의 입장 여부만 확인하면 되기 때문에, 양수이면서 확진자의 퇴장 값이랑 겹치지 않는 요소를 선별
//     // 확진자 포함되어 있으므로 확진자 제거 해주는 작업
//     suspectedInfection = [...line].filter(
//       person => person > 0 && person !== infectedExit && person !== infected
//     );
//     console.log(suspectedInfection);
//   }
// }

function solution(history, infected) {
  const result = [];
  const arr = history.slice(
    history.indexOf(infected) + 1,
    history.indexOf(infected * -1)
  );
  const stack = history.slice(0, history.indexOf(infected));
  for (let i = 0; i < stack.length; i++) {
    if (stack.indexOf(stack[i] * -1) == -1) result.push(stack[i]);
  }
  for (let i = 0; i < arr.length; i++) result.push(Math.abs(arr[i]));
  const set = [...new Set(result)].sort((a, b) => a - b);
  return set;
}

function benchmark(arr, num, callback) {
  let start = Date.now();

  callback(arr, num);

  return Date.now() - start;
}

const covid = [
  { history: [3, 2, -3, 1, -1, -2, 4, -4, 1, -1], infected: 2 }, // 3 X,
  { history: [2, 4, 3, -3, 3, -2, 1, -3, -1, -4], infected: 4 },
  { history: [1, -1], infected: 1 },
  {
    history: [
      7, -7, 2, 5, 1, 4, 9, -9, -2, 3, -1, -5, 6, 10, -10, 7, -4, -6, 8, -7, 4,
      -3, 3, -8, -3, -4,
    ],
    infected: 1,
  },
  {
    history: [
      10, 2, 14, 12, 13, 6, 9, -14, 4, 1, 11, 8, -10, 15, -11, -4, 3, -2, -15,
      -13, 7, 2, -7, 5, 7, -7, -2, -8, -3, -5, -6, -12, 5, -9, -5, -1,
    ],
    infected: 3,
  },
  {
    history: [
      18, 12, 13, 11, 6, 15, -6, 19, 7, 5, 17, -5, -13, -11, 14, 2, -19, 16,
      -17, -16, 3, 9, 19, -7, -15, 20, 10, -14, -10, -18, -2, -19, 8, -9, -8, 4,
      -20, -4, -12, -3, 1, -1,
    ],
    infected: 16,
  },
];

console.log(solution([3, 2, -3, 1, -1, -2, 4, -4, 1, -1], 2));
console.log(benchmark([3, 2, -3, 1, -1, -2, 4, -4, 1, -1], 2, solution));
console.log(solution([2, 4, 3, -3, 3, -2, 1, -3, -1, -4], 4));
console.log(benchmark([2, 4, 3, -3, 3, -2, 1, -3, -1, -4], 4, solution));
console.log(solution([1, -1], 1));
console.log(benchmark([1, -1], 1, solution));
console.log(
  solution(
    [
      7, -7, 2, 5, 1, 4, 9, -9, -2, 3, -1, -5, 6, 10, -10, 7, -4, -6, 8, -7, 4,
      -3, 3, -8, -3, -4,
    ],
    1
  )
);

console.log(
  solution(
    [
      10, 2, 14, 12, 13, 6, 9, -14, 4, 1, 11, 8, -10, 15, -11, -4, 3, -2, -15,
      -13, 7, 2, -7, 5, 7, -7, -2, -8, -3, -5, -6, -12, 5, -9, -5, -1,
    ],
    3
  )
);

console.log(
  solution(
    [
      18, 12, 13, 11, 6, 15, -6, 19, 7, 5, 17, -5, -13, -11, 14, 2, -19, 16,
      -17, -16, 3, 9, 19, -7, -15, 20, 10, -14, -10, -18, -2, -19, 8, -9, -8, 4,
      -20, -4, -12, -3, 1, -1,
    ],
    16
  )
);
console.log(
  benchmark(
    [
      18, 12, 13, 11, 6, 15, -6, 19, 7, 5, 17, -5, -13, -11, 14, 2, -19, 16,
      -17, -16, 3, 9, 19, -7, -15, 20, 10, -14, -10, -18, -2, -19, 8, -9, -8, 4,
      -20, -4, -12, -3, 1, -1,
    ],
    16,
    solution
  )
);

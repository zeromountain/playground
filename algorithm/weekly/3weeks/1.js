/**
[문제 설명]
아재들이 포장마차에서 서로 아재 개그를 주고받고 있습니다.

즐거운 시간을 보내던 중 옆자리에 놓여있던 신문에서 낱말 퍼즐을 발견하고 이것을
풀기로 했습니다.
낱말은 `4x4` 형태로 임의의 한글이 섞여 있고, 아재 개그에 해당하는 낱말을 찾는
것이었습니다.
낱말은 끊기지 않고 하나로 이어집니다.
주어진 낱말이 낱말 게임 내에 있는지 확인하여 있으면 `true`를 반환하는 함수를
작성해보세요.

[제한 사항]
- 낱말 퍼즐은 `4x4`형태의 칸으로 구성되어 있습니다.
- 모든 낱말은 중복되지 않습니다.
- 낱말은 한줄로 붙어 있습니다.
- 위 아래 가능
- 좌우 가능
- 대각선 불가능
 */
function solution(puzzle, word) {
  let answer = false;

  for (let i = 0; i < puzzle.length; i++) {
    let col = '';

    for (let j = 0; j < puzzle[i].length; j++) {}
  }

  return answer;
}

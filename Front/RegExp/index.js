{
  console.log('예제 31-01 시작');
  // 사용자로부터 입력받은 휴대폰 전화번호
  const tel = '010-1234-567팔';

  // 정규 표현식 리터럴로 휴대폰 전화번호 패턴을 정의한다.
  const regExp = /^\d{3}-\d{4}-\d{4}$/;

  // tel이 휴대폰 전화번호 패턴에 매칭하는지 테스트한다.
  console.log(regExp.test(tel)); // false

  console.log('예제 31-01 끝');
}

{
  console.log('예제 31-02 시작');
  const target = 'Is this all there is?';

  // 패턴: is
  // 플래그: i → 대소문자를 구별하지 않고 검색한다
  const regexp = /is/i;

  // test 메서드는 target 문자열에 대해 정규 표현식 regexp의 패턴을 검색하여 매칭 결과를 불리언 값으로 반환
  console.log(regexp.test(target)); //true
  console.log('예제 31-02 끝');
}

{
  console.log('예제 31-03 시작');
  const target = 'Is this all there is?';

  const regexp = new RegExp(/is/i); // ES6
  // const regexp = new RegExp(/is/, 'i');
  // const regexp = new RegExp('is', 'i');

  console.log(regexp.test(target));
  console.log('예제 31-03 끝');
}

{
  console.log('예제 31-04 시작');
  const target = 'Is this all there is?';
  const regExp = /is/;

  console.log(regExp.exec(target));
  // ['is', index: 5, input: 'Is this all there is?', groups: undefined]
  console.log('예제 31-04 끝');
}

{
  console.log('예제 31-05 시작');
  const target = 'Is this all there is?';
  const regExp = /is/;

  console.log(regExp.test(target)); // true
  console.log('예제 31-05 끝');
}

{
  console.log('예제 31-06 시작');
  const target = 'Is this all there is?';
  const regExp = /is/;

  console.log(target.match(regExp));
  // ['is', index: 5, input: 'Is this all there is?', groups: undefined]
  console.log('예제 31-06 끝');
}

{
  console.log('예제 31-07 시작');
  const target = 'Is this all there is?';
  const regExp = /is/g;

  console.log(target.match(regExp)); // (2) ['is', 'is']
  console.log('예제 31-07 끝');
}

{
  console.log('예제 31-08 시작');
  const target = 'Is this all there is?';
  //  target 문자열에서 is 문자열을 대소문자를 구별하여 한 번만 검색
  console.log(target.match(/is/));
  // ['is', index: 5, input: 'Is this all there is?', groups: undefined]

  // target 문자열에서 is 문자열을 대소문자를 구별하지 않고 한 번만 검색
  console.log(target.match(/is/i));
  // ['Is', index: 0, input: 'Is this all there is?', groups: undefined]

  // target 문자열에서 is 문자열을 대소문자를 구별하여 전역 검색
  console.log(target.match(/is/g)); // ['is', 'is']

  // target 문자열에서 is 문자열을 대소문자를 구별하지 않고 전역 검색
  console.log(target.match(/is/gi)); // ['Is', 'is', 'is']
  console.log('예제 31-08 끝');
}

{
  console.log('예제 31-09 시작');
  const target = 'Is this all there is?';

  // 'is' 문자열과 매치하는 패턴. 플래그가 생략되었으므로 대소문자를 구별한다.
  const regExp = /is/;

  // target과 정규 표현식이 매치하는지 테스트한다.
  console.log(regExp.test(target)); // true

  // target과 정규 표현식의 매칭 결과를 구한다.
  console.log(target.match(regExp));
  // ['is', index: 5, input: 'Is this all there is?', groups: undefined]
  console.log('예제 31-09 끝');
}

{
  console.log('예제 31-10 시작');
  const target = 'Is this all there is?';

  // 'is' 문자열과 매치하는 패턴. 플래그 i를 추가하면 대소문자를 구별하지 않는다.
  const regExp = /is/i;

  console.log(target.match(regExp));
  // ['Is', index: 0, input: 'Is this all there is?', groups: undefined]
  console.log('예제 31-10 끝');
}

{
  console.log('예제 31-11 시작');
  const target = 'Is this all there is?';

  // 'is' 문자열과 매치하는 패턴.
  // 플래그 g를 추가하면 대상 문자열 내에서 패턴과 일치하는 모든 문자열을 전역 검색한다.
  const regExp = /is/gi;

  console.log(target.match(regExp)); // ['Is', 'is', 'is']
  console.log('예제 31-11 끝');
}

{
  console.log('예제 31-12 시작');
  const target = 'Is this all there is?';

  // 임의의 3자리 문자열을 대소문자를 구별하여 전역 검색한다.
  const regExp = /.../g;

  console.log(target.match(regExp)); // ['Is ', 'thi', 's a', 'll ', 'the', 're ', 'is?']
  console.log('예제 31-12 끝');
}

{
  console.log('예제 31-13 시작');
  const target = 'A AA B BB Aa Bb AAA';

  // 'A'가 최소 1번, 최대 2번 반복되는 문자열을 전역 검색한다.
  const regExp = /A{1,2}/g;

  console.log(target.match(regExp)); // ['A', 'AA', 'A', 'AA', 'A']
  console.log('예제 31-13 끝');
}

{
  console.log('예제 31-14 시작');
  const target = 'A AA B BB Aa Bb AAA';

  // 'A'가 2번 반복되는 문자열을 전역 검색한다.
  const regExp = /A{2}/g;

  console.log(target.match(regExp)); // ['AA', 'AA']
  console.log('예제 31-14 끝');
}

{
  console.log('예제 31-15 시작');
  const target = 'A AA B BB Aa Bb AAA';

  // A가 최소 2번 이상 반복되는 문자열을 전역 검색한다.
  const regExp = /A{2,}/g;

  console.log(target.match(regExp)); // ['AA', 'AAA']
  console.log('예제 31-15 끝');
}

{
  console.log('예제 31-16 시작');
  const target = 'A AA B BB Aa Bb AAA';

  // A가 최소 한 번 이상 반복되는 문자열을 전역 검색한다.
  const regExp = /A+/g;

  console.log(target.match(regExp)); // ['A', 'AA', 'A', 'AAA']
  console.log('예제 31-16 끝');
}

{
  console.log('예제 31-17 시작');
  const target = 'color colour';

  // 'colo' 다음 'u'가 최대 한 번(0번 포함) 이상 반복되고 'r'이 이어지는
  // 문자열 'color', 'colour'를 전역 검색한다.
  const regExp = /colou?r/g;

  console.log(target.match(regExp)); // ['color', 'colour']
  console.log('예제 31-17 끝');
}

{
  console.log('예제 31-18 시작');
  const target = 'A AA B BB Aa Bb';

  // A 또는 B를 전역 검색한다.
  const regExp = /A|B/g;

  console.log(target.match(regExp)); // ['A', 'A', 'A', 'B', 'B', 'B', 'A', 'B']
  console.log('예제 31-18 끝');
}

{
  console.log('예제 31-19 시작');
  const target = 'A AA B BB Aa Bb';

  // A 또는 B가 한 번 이상 반복되는 문자열을 전역 검색한다.
  // A, AA, AAA, ...  또는 B, BB, BBB, ...
  const regExp = /A+|B+/g;

  console.log(target.match(regExp)); // ['A', 'AA', 'B', 'BB', 'A', 'B']
  console.log('예제 31-19 끝');
}

{
  console.log('예제 31-20 시작');
  const target = 'A AA B BB Aa Bb';

  // A 또는 B가 한 번 이상 반복되는 문자열을 전역 검색한다.
  // A, AA, AAA, ... 또는 B, BB, BBB, ...
  const regExp = /[AB]+/g;

  console.log(target.match(regExp)); // ['A', 'AA', 'B', 'BB', 'A', 'B']
  console.log('예제 31-20 끝');
}

{
  console.log('예제 31-21 시작');
  const target = 'A AA BB ZZ Aa Bb';

  // A ~ Z가 한 번 이상 반복되는 문자열을 전역 검색한다.
  // A, AA, AAA, ... 또는 B, BB, BBB, ... 또는 Z, ZZ, ZZZ
  const regExp = /[A-Z]+/g;

  console.log(target.match(regExp)); // ['A', 'AA', 'BB', 'ZZ', 'A', 'B']
  console.log('예제 31-21 끝');
}

{
  console.log('예제 31-22 시작');
  const target = 'AA BB Aa Bb 12';

  // A ~ Z 또는 a ~ z가 한 번 이상 반복되는 문자열을 전역 검색한다.
  const regExp = /[A-za-z]+/g;

  console.log(target.match(regExp)); // ['AA', 'BB', 'Aa', 'Bb']
  console.log('예제 31-22 끝');
}

{
  console.log('예제 31-23 시작');
  const target = 'AA BB 12,345';

  // 0 ~ 9가 한 번 이상 반복되는 문자열을 전역 검색한다.
  const regExp = /[0-9]+/g;

  console.log(target.match(regExp));
  console.log('예제 31-23 끝');
}

{
  console.log('예제 31-30 시작');
  const url = 'https://example.com';
  const regExp = /^https?:\/\//;

  console.log(regExp.test(url));
  console.log(/^(http|https):\/\//.test(url));
  console.log('예제 31-30 끝');
}

{
  console.log('예제 31-32 시작');
  const fileName = 'index.html';
  const regExp = /html$/;

  // html로 끝나는지 검사한다.
  console.log(regExp.test(fileName));
  console.log('예제 31-32 끝');
}

{
  console.log('예제 31-33 시작');
  const target = '12345';
  const regExp = /^\d+$/;

  console.log(regExp.test(target));
  console.log('예제 31-33 끝');
}

{
  console.log('예제 31-34 시작');
  const target = ' Hi!';
  const regExp = /^[\s]+/;

  console.log(regExp.tes(target));
  console.log('예제 31-34 끝');
}

{
  console.log('예제 31-35 시작');
  const id = 'abc123';
  const regExp = /^[A-Za-z0-9]{4,10}$/;

  console.log(regExp.test(id));
  console.log('예제 31-35 끝');
}

{
  console.log('예제 31-36 시작');
  const email = 'Son@gmail.com';
  const regExp =
    /^[0-9a-zA-z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2, 3}$/;

  console.log(regExp.test(email));
  console.log('예제 31-36 끝');
}

{
}

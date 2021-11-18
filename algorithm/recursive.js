function charCount(str) {
  const obj = {};
  for (let char of str) {
    char = char.toLowerCase();
    console.log(char);
    if (/[a-z0-9]/.test(char)) {
      obj[char] = ++obj[char] || 1;
      // if (obj[char] > 0) {
      //   obj[char] += 1;
      // } else {
      //   obj[char] = 1;
      // }
    }
  }
  console.log(obj);
}

function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) &&
    !(code > 64 && code < 91) &&
    !(code > 96 && code < 123)
  ) {
    return false;
  }
  return true;
}

charCount('Hello Hi!');

// function sumRange(num) {
//   if (num === 1) return 1;
//   return num + sumRange(num - 1);
// }

// console.log(sumRange(3));

// function factorial(num) {
//   let total = 1;
//   for (let i = num; i > 0; i--) {
//     total *= i;
//   }
//   return total;
// }

// function recursiveFactorial(num) {
//   // if (num === 1) return 1;
//   // return num * recursiveFactorial(num - 1);
//   return num === 1 ? 1 : num * recursiveFactorial(num - 1);
// }

// console.log(factorial(4));
// console.log(recursiveFactorial(4));

// function collectOddValues(arr) {
//   let result = [];

//   function helper(helperInput) {
//     if (helperInput.length === 0) {
//       return;
//     }
//     if (helperInput[0] % 2 !== 0) {
//       result.push(helperInput[0]);
//     }

//     helper(helperInput.slice(1));
//   }
//   helper(arr);
//   return result;
// }

// function nonHelperCollecOddValues(arr) {
//   let newArr = [];

//   if (arr.length === 0) {
//     return newArr;
//   }
//   if (arr[0] % 2 !== 0) {
//     newArr.push(arr[0]);
//   }
//   newArr = newArr.concat(nonHelperCollecOddValues(arr.slice(1)));
//   return newArr;
// }

// console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// console.log(nonHelperCollecOddValues([1, 2, 3, 4, 5]));

// function power(num1, num2) {
//   if (num2 === 0) return 1;
//   return num1 * power(num1, num2 - 1);
// }

// console.log(power(2, 0));
// console.log(power(2, 2));
// console.log(power(2, 4));

function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1, 2, 3, 4, 5]));

function recursiveRange(n) {
  if (n === 0) return 0;
  return n + recursiveRange(n - 1);
}

console.log(recursiveRange(10));

function fib(n) {
  // O(n ** 2)
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

function memoFib(num) {
  // O(n)
  const memo = [0, 1];
  const aux = n => {
    // helper 함수
    if (memo[n] !== undefined) return memo[n];
    memo[n] = aux(n - 1) + aux(n - 2); // → memo[n]의 값에 할당된게 없다면, 이전항과 그 이전항의 합을 할당한다
    return memo[n];
  };
  return aux(num);
}

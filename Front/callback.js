function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

function calc(a, b, callback) {
  const y = a * 2;
  console.log(callback(y, b));
}

calc(10, 20, add);

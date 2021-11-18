const Counter = (function () {
  let display = document.getElementById('display');
  let num = 0;

  function Counter() {}

  Counter.prototype.increase = function () {
    console.log('increase');
    ++num;
    display.innerText = num;
  };

  Counter.prototype.decrease = function () {
    console.log('decrease');
    num = num > 0 ? --num : 0;
    display.innerText = num;
  };

  return Counter;
})();

const counter = new Counter();
let increaseButton = document.getElementById('increase');
let decreaseButton = document.getElementById('decrease');

increaseButton.addEventListener('click', counter.increase);
decreaseButton.addEventListener('click', counter.decrease);

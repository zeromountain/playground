const $button = document.querySelector('input');

const foo = () => {
  throw new Error('foo에서 발생한 에러');
};

const bar = () => {
  foo();
};

const baz = () => {
  bar();
};

$button.addEventListener('click', () => {
  try {
    baz();
  } catch (err) {
    console.error(err);
  }
});

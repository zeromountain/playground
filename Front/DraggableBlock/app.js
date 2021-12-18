const $wrapper = document.querySelector('.wrapper'),
  $header = $wrapper.querySelector('header');

function onDrag({ movementX, movementY }) {
  const getStyle = window.getComputedStyle($wrapper);
  let left = parseInt(getStyle.left);
  let top = parseInt(getStyle.top);
  $wrapper.style.left = `${left + movementX}px`;
  $wrapper.style.top = `${top + movementY}px`;
}

$header.addEventListener('mousedown', () => {
  $header.classList.add('active');
  $header.addEventListener('mousemove', onDrag);
});
$header.addEventListener('mouseup', () => {
  $header.classList.remove('active');
  $header.addEventListener('mousemove', onDrag);
});

function init() {
  const title = document.createElement('h2');
  title.innerText = 'Hello';
  title.style.color = 'white';
  document.body.appendChild(title);
  resizeWindow();
}

function resizeWindow() {
  if (window.innerWidth > 1000) {
    console.log('900초과');
    document.body.style.backgroundColor = '#DBC834';
  } else if (window.innerWidth > 675) {
    console.log('600초과');
    document.body.style.backgroundColor = '#D438DB';
  } else if (window.innerWidth < 675) {
    console.log('600미만');
    document.body.style.backgroundColor = '#1E76FA';
  }
}

init();
window.addEventListener('resize', resizeWindow);

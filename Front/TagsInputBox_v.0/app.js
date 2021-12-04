const $ul = document.querySelector('ul'),
  $input = document.querySelector('input'),
  $countNumb = document.querySelector('.details span'),
  $removeBtn = document.querySelector('button');

let maxTags = 10,
  tags = [];

countTag();

function countTag() {
  $input.focus();
  $countNumb.textContent = maxTags - tags.length; // subtracting max value with tags length
}

function createTag() {
  $ul.querySelectorAll('li').forEach(li => li.remove());
  console.log(tags);
  tags.forEach(tag => {
    let $liTag = `<li>${tag} <i class="uit uit-multiply" onclick="remove(this, '${tag}')"></i></li>`;
    $ul.insertAdjacentHTML('afterbegin', $liTag); // ul 내부에 li 삽입/추가
  });
  countTag();
}

function remove($element, tag) {
  let index = tags.indexOf(tag);
  tags = [...tags.slice(0, index), ...tags.slice(index + 1)]; // removing or excluding selected tag from an array
  $element.parentElement.remove();
  countTag();
}

function addTag(e) {
  if (e.key === 'Enter') {
    let tag = e.target.value.replace(/\s+/g, ' '); // removing unwanted spaces from user tag
    if (tag.length > 1 && !tags.includes(tag)) {
      if (tags.length < 10) {
        // if tags length is less than 10 then only add tag
        tag.split(',').forEach(tag => {
          tags.unshift(tag);
          createTag();
        });
      }
    }
    e.target.value = '';
  }
}

$input.addEventListener('keyup', addTag);
$removeBtn.addEventListener('click', () => {
  tags.length = 0;
  $ul.querySelectorAll('li').forEach(li => li.remove());
  countTag();
});

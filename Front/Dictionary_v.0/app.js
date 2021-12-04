const $wrapper = document.querySelector('.wrapper'),
  $infoText = document.querySelector('.info-text'),
  $synonyms = document.querySelector('.synonyms .list'),
  $volumeIcon = document.querySelector('.word i'),
  $removeIcon = document.querySelector('.search span'),
  $searchInput = document.querySelector('input');
let audio;

function data(result, word) {
  if (result.title) {
    $infoText.innerHTML = `Can't find the meaning of <span>"${word}"</span>. Please, try to search for another word.`;
  } else {
    $wrapper.classList.add('active');
    let { definition, example, synonyms } =
      result[0].meanings[0].definitions[0];
    let phonetics = `${result[0].meanings[0].partOfSpeech} / ${result[0].phonetics[0].text}/`;

    document.querySelector('.word p').textContent = result[0].word;
    document.querySelector('.word span').textContent = phonetics;
    document.querySelector('.meaning span').textContent = definition;
    document.querySelector('.example span').textContent = example;
    audio = new Audio('https:' + result[0].phonetics[0].audio);

    if (synonyms[0] === undefined) {
      $synonyms.parentElement.style.display = 'none';
    } else {
      $synonyms.parentElement.style.display = 'block';
      $synonyms.innerHTML = '';
      for (let i = 0; i < 5; i++) {
        let sentence = !(synonyms[i].split(' ').length === 1);
        let word = `'${synonyms[i]}'`;
        let tag = sentence
          ? `<span>${synonyms[i]}</span>`
          : `<span onclick=search(${word})>${synonyms[i]}</span>`;
        $synonyms.insertAdjacentHTML('beforeend', tag);
      }
    }
  }
}

function search(word) {
  $searchInput.value = word;
  fetchAPI(word);
  $wrapper.classList.remove('active');
}

function fetchAPI(word) {
  $wrapper.classList.remove('active');
  $infoText.style.colr = '#000';
  $infoText.innerHTML = `Searching the meaning of <span>"${word}"</span>`;
  let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  fetch(url)
    .then(res => res.json())
    .then(result => data(result, word));
}

$searchInput.addEventListener('keyup', e => {
  if (e.key === 'Enter' && e.target.value) {
    fetchAPI(e.target.value);
  }
});
$volumeIcon.addEventListener('click', () => {
  audio.play();
});
$removeIcon.addEventListener('click', () => {
  $searchInput.value = '';
  $searchInput.focus();
  $wrapper.classList.remove('active');
  $infoText.style.colr = '#9a9a9a';
  $infoText.textContent = `Type a word and press Enter to get meaning, example, pronunciation, and synonyms of that typed word.`;
});

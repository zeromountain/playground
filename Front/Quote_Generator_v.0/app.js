const quoteText = document.querySelector('.quote'),
  authorName = document.querySelector('.author .name'),
  quoteBtn = document.querySelector('button'),
  soundBtn = document.querySelector('.sound'),
  copyBtn = document.querySelector('.copy'),
  twitterBtn = document.querySelector('.twitter');

function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType('application/json');
  rawFile.open('GET', file, true);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4 && rawFile.status == '200') {
      callback(rawFile.responseText);
    }
  };
  rawFile.send(null);
}

const randomQuote = function () {
  quoteBtn.classList.add('loading');
  quoteBtn.textContent = '명언을 가져오는 중,,,';
  setTimeout(
    () =>
      readTextFile('./quote.json', function (text) {
        const data = JSON.parse(text);
        const index = Math.floor(Math.random() * (data.length + 1));
        quoteText.textContent = data[index].message;
        authorName.textContent = data[index].author;
        quoteBtn.classList.remove('loading');
        quoteBtn.textContent = '새로운 명언';
      }),
    500
  );
};

soundBtn.addEventListener('click', () => {
  let utterance = new SpeechSynthesisUtterance(
    `${quoteText.textContent} by ${authorName.textContent}`
  );
  speechSynthesis.speak(utterance);
});

copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(quoteText.textContent);
});

twitterBtn.addEventListener('click', () => {
  let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.textContent}`;
  window.open(tweetUrl, '_blank');
});

quoteBtn.addEventListener('click', randomQuote);

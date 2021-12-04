const textarea = document.querySelector('textarea'),
  voiceList = document.querySelector('select'),
  speechBtn = document.querySelector('button');

let synth = speechSynthesis,
  isSpeaking = true;

function voices() {
  for (let voice of synth.getVoices()) {
    let selected = voice.name === 'Google US English' ? 'selected' : '';
    let option = `<option value="${voice.name}" ${selected}>${voice.name} (${voice.lang})</option>`;
    voiceList.insertAdjacentHTML('beforeend', option);
  }
}

synth.addEventListener('voiceschanged', voices);

function textToSpeech(text) {
  let utternance = new SpeechSynthesisUtterance(text);
  for (let voice of synth.getVoices()) {
    if (voice.name === voiceList.value) {
      utternance.voice = voice;
    }
  }
  speechSynthesis.speak(utternance);
}

speechBtn.addEventListener('click', e => {
  e.preventDefault();
  console.log('speechBtn click');
  if (textarea.value !== '') {
    if (!synth.speaking) {
      textToSpeech(textarea.value);
      console.log('speeching');
    }
    if (textarea.value.length > 80) {
      if (isSpeaking) {
        synth.resume();
        console.log('respeeching');
        isSpeaking = false;
        speechBtn.textContent = 'Pause Speech';
      } else {
        synth.pause();
        console.log('stop speeching');
        isSpeaking = true;
        speechBtn.textContent = 'Resume Speech';
      }
      setInterval(() => {
        if (!synth.speaking && !isSpeaking) {
          isSpeaking = true;
          speechBtn.textContent = 'Convert To Speech';
        }
      });
    } else {
      speechBtn.textContent = 'Convert To Speech';
    }
  }
});

const $wrapper = document.querySelector('.wrapper'),
  $inputPart = $wrapper.querySelector('.input-part'),
  $infoTxt = $inputPart.querySelector('info-txt'),
  $inputField = $inputPart.querySelector('input');

function requestAPI(city) {
  let api = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

  fetch(api).then(response => console.log(response.json()));
}

$inputField.addEventListener('keyup', e => {
  if (e.key == 'Enter' && $inputField.value != '') {
    requestAPI($inputField.value);
  }
});

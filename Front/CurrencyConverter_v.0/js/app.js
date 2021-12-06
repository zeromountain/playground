const $dropList = document.querySelectorAll('.drop-list select'),
  $fromCurrency = document.querySelector('.from select'),
  $toCurrency = document.querySelector('.to select'),
  $exchangeIcon = document.querySelector('.drop-list .icon'),
  $getButton = document.querySelector('form button');

for (let i = 0; i < $dropList.length; i++) {
  for (currency_code in country_code) {
    let selected;
    if (i === 0) {
      selected = currency_code === 'KRW' ? 'selected' : '';
    } else if (i === 1) {
      selected = currency_code === 'USD' ? 'selected' : '';
    }
    let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
    $dropList[i].insertAdjacentHTML('beforeend', optionTag);
  }
  $dropList[i].addEventListener('change', e => {
    console.log('hi');
    loadFlag(e.target);
  });
}

function loadFlag(element) {
  for (code in country_code) {
    if (code == element.value) {
      let imgTag = element.parentElement.querySelector('img');
      imgTag.src = `https://flagcdn.com/28x21/${country_code[
        code
      ].toLowerCase()}.png`;
    }
  }
}

function getExchangeRate() {
  const $amount = document.querySelector('.amount input');
  const $exchangeRateTxt = document.querySelector('.exchange-rate');
  $exchangeRateTxt.textContent = 'Getting exchange rate...';
  let amountVal = $amount.value;
  if (amountVal == '' || amountVal == '0') {
    $amount.value = '1';
    amountVal = 1;
  }
  let url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${$fromCurrency.value}`;
  fetch(url)
    .then(response => response.json())
    .then(result => {
      let exchangeRate = result.conversion_rates[$toCurrency.value];
      let totalExchangeRate = (amountVal * exchangeRate).toFixed(2);
      $exchangeRateTxt.textContent = `${amountVal} ${$fromCurrency.value} = ${totalExchangeRate} ${$toCurrency.value}`;
    })
    .catch(() => {
      $exchangeRateTxt.textContent = 'Something went wrong';
    });
}
window.addEventListener('load', () => {
  loadFlag($fromCurrency);
  loadFlag($toCurrency);
  getExchangeRate();
});

$getButton.addEventListener('click', e => {
  e.preventDefault();
  getExchangeRate();
});

$exchangeIcon.addEventListener('click', () => {
  let tempCode = $fromCurrency.value;
  $fromCurrency.value = $toCurrency.value;
  $toCurrency.value = tempCode;
  loadFlag($fromCurrency);
  loadFlag($toCurrency);
  getExchangeRate();
});

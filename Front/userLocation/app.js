const $button = document.querySelector('button');

$button.addEventListener('click', () => {
  if (navigator.geolocation) {
    $button.textContent = 'Allow to detect location';
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  } else {
    $button.innerText = 'Your browser not support!';
  }
});

function onSuccess(position) {
  $button.textContent = 'Detecting your location...';
  const { latitude, longitude } = position.coords;

  fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`
  )
    .then(response => response.json())
    .then(result => {
      console.dir(result);
      let allDetails = result.results[0].components; // passing components obj to allDetails variable
      let { city, postcode, country } = allDetails; // getting county, postcode, country properties value from allDetails obj
      $button.textContent = `${city} ${postcode}, ${country}`;
      console.table(allDetails);
    })
    .catch(error => {
      console.log('catch', error);
      $button.textContent = 'Something went wrong';
    });
}

function onError(error) {
  console.log('onError', error);
  if (error.code == 1) {
    $button.textContent = 'You denied the request!';
  } else if (error.code == 2) {
    $button.textContent = 'Location not available!';
  } else {
    $button.textContent = 'Something went wrong!';
  }
  $button.setAttribute('disabled', true);
}

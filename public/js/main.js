const weatherForm = document.querySelector('#weather-form');
const searchInput = weatherForm.querySelector('input[name=location]');
const submitButton = weatherForm.querySelector('button');
const dataBlock = document.querySelector('.data');
const errorBlock = document.querySelector('.error');
const loadingImg = document.querySelector('.loading');

const updateUI = (message, errorMessage) => {
  dataBlock.innerHTML = message;
  errorBlock.textContent = errorMessage;
};

const displayLoading = (isVisible) => {
  loadingImg.style.display = isVisible ? 'initial' : 'none';
  submitButton.style.display = isVisible ? 'none' : 'initial';
};

const fetchWeatherData = (location) => {
  return fetch(`/weather?address=${location}`)
    .then(response => response.json())
    .catch(error => {
      console.error(error);
      throw error;
    });
};

const handleFormSubmit = (event) => {
  event.preventDefault();
  const location = searchInput.value.trim();

  displayLoading(true);

  if (location) {
    fetchWeatherData(location)
      .then(data => {
        if (data.error) {
          updateUI('', data.error);
          console.error(data.error);
        } else {
          const { weather_icons, weather_descriptions, temperature, feelslike } = data.forecast.current;
          const message = `<img src="${weather_icons[0]}" alt="${weather_descriptions[0]}">${weather_descriptions[0]}. It's currently ${temperature} degrees out. It feels like ${feelslike} degrees out.`;
          updateUI(message, '');
        }
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        displayLoading(false);
      });
  }
};

weatherForm.addEventListener('submit', handleFormSubmit);

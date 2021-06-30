let weatherIcon = document.querySelector('.weather-widget-icon')
let weatherTemperature = document.querySelector('.weather-widget-temperature')
let weatherWidgetLocation = document.querySelector('.wether-widget-location')
let weatherDescription = document.querySelector('.weather-widget-description')

let weatherWidgetContainer = document.querySelector('.weather-widget-container')
let weatherFormButton = document.querySelector('.weather-form_button')
let weatherCityInput = document.querySelector('.city')
let weatherCountryInput = document.querySelector('.country')

const key = '730bf60c01234e648b667e47a2ab5bd6'

weatherFormButton.addEventListener ('click', foundWeather)

function foundWeather(e) {
  e.preventDefault()
  weatherWidgetContainer.style.visibility = 'visible'
  fetch(`https://api.weatherbit.io/v2.0/current?&&city=${weatherCityInput.value}&country=${weatherCountryInput.value}&key=${key}`)
  .then((response) => {
  return response.json();
  })
  .then((data) => {
    console.log(data);
    weatherWidgetLocation.innerHTML = data['data'][0].city_name
    weatherTemperature.innerHTML = Math.round(data['data'][0].temp) + '&deg;С'
    weatherIcon.innerHTML = `<img src="https://www.weatherbit.io/static/img/icons/${data['data'][0].weather.icon}.png">`
    weatherDescription.innerHTML = data['data'][0].weather.description
  })
}


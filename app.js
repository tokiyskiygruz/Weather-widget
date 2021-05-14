let weatherIcon = document.querySelector('.weather-widget-icon')
let weatherTemperature = document.querySelector('.weather-widget-temperature')
let weatherWidgetLocation = document.querySelector('.wether-widget-location')
let weatherDescription = document.querySelector('.weather-widget-description')

const key = '730bf60c01234e648b667e47a2ab5bd6'

fetch(`https://api.weatherbit.io/v2.0/current?&&city=Kiev&country=UA&key=${key}`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    weatherWidgetLocation.innerHTML = data['data'][0].city_name
    weatherTemperature.innerHTML = Math.round(data['data'][0].temp) + '&deg;С'
    weatherIcon.innerHTML = `<img src="https://www.weatherbit.io/static/img/icons/${data['data'][0].weather.icon}.png">`
    weatherDescription.innerHTML = data['data'][0].weather.description
  });
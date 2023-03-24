class WeatherClient {
  constructor() { }

  fetchWeatherData(city) {
    const apiKey = require('./apiKey');
    return fetch(`http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`)
    .then((response) => response.json())
    .then((weatherData) => {
      return weatherData
    });
  }
}

module.exports = WeatherClient;

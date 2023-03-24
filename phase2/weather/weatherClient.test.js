const WeatherClient = require('./weatherClient')

describe('WeatherClient class', () => {
  it ('can fetch the current weather for a given city', (done) => {
    const weatherClient = new WeatherClient();
    weatherClient.fetchWeatherData('London')
    .then((weatherData) => {
      expect(weatherData.name).toEqual('London');
      done();
    });
  });
});


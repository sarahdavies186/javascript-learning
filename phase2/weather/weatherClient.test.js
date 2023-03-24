const WeatherClient = require('./weatherClient')
const jestFetchMock = require("jest-fetch-mock");
jestFetchMock.enableMocks();

describe('WeatherClient class', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  const weatherClient = new WeatherClient();
  it ('can fetch the current weather for a given city', (done) => {
    fetch.mockResponseOnce(JSON.stringify({website: "openweathermap"}));

    weatherClient.fetchWeatherData('London').then((weatherData) => {
      const apiKey = require('./apiKey');
      expect(weatherData.website).toEqual("openweathermap");
      expect(fetch.mock.calls[0][0]).toEqual(`http://api.openweathermap.org/data/2.5/weather?units=metric&q=London&appid=${apiKey}`)
      done();
    });

  });
 });



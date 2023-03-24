const WeatherClient = require('./weatherClient')

class Weather {
  constructor(client) {
    this.client = client
    this.weather = []
  }

  async load(city) {
  const cityWeather = await this.client.fetchWeatherData(city);
    this.weather = cityWeather
  }

  getWeatherData() {
    return this.weather
  }
}


module.exports = Weather;
const Weather = require('./weather')
const jestFetchMock = require('jest-fetch-mock')
jestFetchMock.enableMocks();

describe("Weather class", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it("calls the weatherAPI and returns the data", (done) => {
    const mockWeatherClient = {
      fetchWeatherData: jest.fn(),
    };

    mockWeatherClient.fetchWeatherData.mockResolvedValueOnce({
      name: "Bristol",
    });

    const weather = new Weather(mockWeatherClient);
    weather.load("Bristol").then(() => {
      expect(mockWeatherClient.fetchWeatherData).toHaveBeenCalledWith('Bristol');
      const currentWeather = weather.getWeatherData();
      expect(currentWeather.name).toEqual("Bristol");
      done();
    })
  })


})

  

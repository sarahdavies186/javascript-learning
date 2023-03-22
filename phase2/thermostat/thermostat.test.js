const Thermostat = require('./thermostat')

describe('Thermostat', () => {
  const thermostat = new Thermostat();
  it('starts with an inital temperature of 20 degrees', () => {
    expect(thermostat.getTemperature()).toBe(20)
  })

  it('increases the temperature up by 1 degrees', () => {
    thermostat.up();
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(22)
  })

  it('lowers the temperature down by 1 degrees', () => {
    thermostat.down();
    expect(thermostat.getTemperature()).toBe(21)
  })

  it('the minimum lowest temp is 10 degrees', () => {
    for (let i = 0; i < 13; i++) {
      thermostat.down();
    }
    expect(thermostat.getTemperature()).toBe(10)
  })

  it('with power saving mode on, max temp is 25 degrees', () => {
    thermostat.setPowerSavingMode(true);
    for (let i = 0 ; i < 30 ; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe(25)
  })

  it('with power saving mode off, max temp is 32 degrees', () => {
    thermostat.setPowerSavingMode(false);
    for (let i = 0 ; i < 10 ; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe(32)
  })

  it('resets the temperatue to 20 degrees', () => {
    thermostat.reset();
    expect(thermostat.getTemperature()).toBe(20)
  })

})
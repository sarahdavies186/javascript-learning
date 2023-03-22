class Thermostat {
  constructor() {
  this.temperature = 20;
  }

  getTemperature() {
    return this.temperature;
  }

  setPowerSavingMode(trueOrFalse) {
    this.PowerSavingMode = trueOrFalse;
  };

  up() {
    let highTemp = this.temperature += 1;
    if (this.PowerSavingMode === true) {
      if (highTemp > 25) {
        this.temperature = 25
      } else {
        this.temperature = highTemp
      }
    } else if (this.PowerSavingMode === false) {
      if (highTemp > 32) {
        this.temperature = 32
      } else {
        this.temperature = highTemp
      }
    }
  }

  down() {
    let lowTemp = this.temperature -= 1;
    if (lowTemp < 10) {
      this.temperature = 10
    } else {
      this.temperature = lowTemp
    }
  };

  reset() {
    this.temperature = 20
  }

}

module.exports = Thermostat;
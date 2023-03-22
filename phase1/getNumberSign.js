const getNumberSign = (number) => {
  if (number === 0) {
    return 'zero';
  } else if (number < 0) {
    return 'negative';
  } else {
    return 'positive';
  }
}

module.exports = getNumberSign;
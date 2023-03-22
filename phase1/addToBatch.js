const addToBatch = (array, number) => {
  if (array.length < 5) {
  return array.concat(number)
  }
  else {
    return array
  }
}

module.exports = addToBatch;






const checkLength = (phoneNumber) => {
  if (phoneNumber.length <= 10)
  return true;
  else {
    return false;
  }
}

const filterLongNumbers = (numbers) => {
  return numbers.filter(checkLength);
}


const generateMessages = (namesAndDiscounts) => {
  return namesAndDiscounts.map(({name, discount}) => {
    return `Hi ${name}! ${discount}% off our best candies for you today!`
  });
}


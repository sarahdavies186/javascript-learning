const printHello = () => {
  console.log('hello');
}


const executeAfterDelay = (messageFunction, time) => {
  setTimeout(messageFunction, time * 1000);
}

module.exports = {
  printHello,
  executeAfterDelay,
};
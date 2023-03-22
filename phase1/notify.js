const notifyByEmail = (email) => {
  return `Email sent to: <${email}>`;
}

const notifyByText = (number) => {
  return `Text sent to: <${number}>`;
}

const notify = (emailPhone, notifyFunction) => {
  return notifyFunction(emailPhone);
}

module.exports = {
  notifyByEmail,
  notifyByText,
  notify,
};
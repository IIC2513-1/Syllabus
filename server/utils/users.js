const validateEmail = (email) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
};

const validateName = (name) => {
  return name && name.length >= 2;
};

const validateAddUserInput = (body) => {
  return (
    validateName(body.firstName) &&
    validateName(body.lastName) &&
    validateEmail(body.email)
  );
};

module.exports = { validateAddUserInput };

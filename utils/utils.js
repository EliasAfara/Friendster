const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
  const saltRounds = 10; // Number of salt rounds for hashing (adjust as needed)
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};

module.exports = {
  hashPassword,
};

const bcrypt = require("bcrypt");
const saltRounds = 10;

const hashIt = async (password) => {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  } catch (err) {
    console.log(err);
  }
};

const compareHash = async (password, hash) => {
  try {
    const isMatch = await bcrypt.compare(password, hash);
    return isMatch;
  } catch (err) {
    console.log(err);
  }
}

module.exports = { hashIt, compareHash };

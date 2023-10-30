const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const generateJwtToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    process.env.JWT_SECRET_KEY,
    { expiresIn: '7d' },
    { algorithm: "HS256" }
  );
};

module.exports = { generateJwtToken };
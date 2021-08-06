const jwt = require("jsonwebtoken");

process.env.JWT_SECRET || "my local secret";
process.env.EXP_TIME || "1h";

const signToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: EXP_TIME });
};

const verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRET, { maxAge: EXP_TIME });
};

module.exports = { signToken, verifyToken };

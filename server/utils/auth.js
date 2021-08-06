const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET || "my local secret";
const expiry = process.env.EXP_TIME || "1h";

const signToken = (payload) => {
  return jwt.sign(payload, secret, { expiresIn: expiry });
};

const verifyToken = (token) => {
  return jwt.verify(token, secret, { maxAge: expiry });
};

module.exports = { signToken, verifyToken };

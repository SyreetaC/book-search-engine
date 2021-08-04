const { AuthenticationError } = require("apollo-server");
const { signToken } = require("../utils/auth");
const { User } = require("../models");

const login = async (_, { input }) => {
  const { email, password } = input;

  const user = await User.findOne({ email });

  if (!user) {
    throw new AuthenticationError("Can't find this user");
  }

  const correctPassword = await user.isCorrectPassword(password);

  if (!correctPassword) {
    throw new AuthenticationError("Wrong password!");
  }

  const token = signToken({
    id: user._id,
    email: user.email,
    username: user.username,
  });

  return { token, user };
};

module.exports = login;

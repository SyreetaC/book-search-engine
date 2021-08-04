const { AuthenticationError } = require("apollo-server");

const { User } = require("../models/User");

const login = async (_, { input }) => {
  const { username, email, password } = input;

  const user = await User.findOne({ email, username });

  if (!user) {
    throw new AuthenticationError("Can't find this user");
  }
  const correctPassword = await user.isCorrectPassword(password);
  if (!correctPassword) {
    throw new AuthenticationError("Wrong password!");
  }
  //   TO DO const token = signToken(user);
  //   res.json({ token, user });
};

module.exports = login;

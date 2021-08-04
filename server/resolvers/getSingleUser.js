const { User } = require("../models");

const getSingleUser = async (_, { input }, context) => {
  if (context.user) {
    const { email, username, password } = input;
    const foundUser = await User.findOne({
      username,
      email,
      password,
    }).populate("user"); //made up
    return foundUser;
  } else {
    throw new AuthenticationError("Not logged in");
  }
};

module.exports = getSingleUser;

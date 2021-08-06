const { User } = require("../models");

const getSingleUser = async (_, args, context) => {
  if (context.user) {
    const foundUser = await User.findById(context.user.id).populate(
      "savedBooks"
    );
    return foundUser;
  } else {
    throw new AuthenticationError("Not logged in");
  }
};

module.exports = getSingleUser;

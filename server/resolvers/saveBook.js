const { AuthenticationError } = require("apollo-server");
const { User } = require("../models/User");

const saveBook = async (_, { input }, context) => {
  if (context.user) {
    const { bookId, authors, title, description, image } = input;
    const updatedUserBook = await User.findOneAndUpdate(
      { _id: context.user.id },
      {
        $addToSet: {
          savedBooks: { bookId, authors, title, description, image },
        },
      },
      { new: true }
    );
    return updatedUserBook;
  } else {
    throw new AuthenticationError("You must be logged in to save a book. ");
  }
};

module.exports = saveBook;

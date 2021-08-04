const { AuthenticationError } = require("apollo-server");
const { User } = require("../models/User");

const deleteBook = async (_, { bookId }, context) => {
  if (context.user) {
    const userRemovedBook = await User.findOneAndUpdate({});
    return userRemovedBook;
  } else {
    throw new AuthenticationError("You must be logged in to save a book. ");
  }
};

module.exports = deleteBook;

// async deleteBook({ user, params }, res) {
//   const updatedUser = await User.findOneAndUpdate(
//     { _id: user._id },
//     { $pull: { savedBooks: { bookId: params.bookId } } },
//     { new: true }
//   );
//   if (!updatedUser) {
//     return res.status(404).json({ message: "Couldn't find user with this id!" });
//   }
//   return res.json(updatedUser);
// },

const { AuthenticationError } = require("apollo-server");
const { User } = require("../models/User");

const saveBook = async (_, { savedBook }, context) => {
  if (context.user) {
    const updatedUserBook = await User.findOneAndUpdate({});
    return updatedUserBook;
  } else
    throw new AuthenticationError("You must be logged in to save a book. ");
};

module.exports = saveBook;

// async saveBook({ user, body }, res) {
//   console.log(user);
//   try {
//     const updatedUser = await User.findOneAndUpdate(
//       { _id: user._id },
//       { $addToSet: { savedBooks: body } },
//       { new: true, runValidators: true }
//     );
//     return res.json(updatedUser);
//   } catch (err) {
//     console.log(err);
//     return res.status(400).json(err);
//   }
// },

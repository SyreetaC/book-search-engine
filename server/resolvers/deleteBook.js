const deleteBook = () => {
  console.log("Delete book");
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

// define resolvers for the queries and mutations
const getSingleUser = require("./getSingleUser");
const login = require("./login");
const createUser = require("./createUser");
const saveBook = require("./saveBook");
const deleteBook = require("./deleteBook");

const resolvers = {
  Query: {
    me: getSingleUser,
  },
  Mutation: { createUser, login, saveBook, deleteBook },
};

module.exports = resolvers;

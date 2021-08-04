//require gql from apollo server
const { gql } = require("apollo-server");

// define typeDefs
// queries and mutations to go in here
const typeDefs = gql`
  type Book {
    _id: ID!
    title: String!
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
  }
  type User {
    _id: ID
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(book: SavedBookInput): User
    removeBook(bookId: String!): User
  }
  input SavedBookInput {
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }
`;

module.exports = typeDefs;

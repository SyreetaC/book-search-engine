//require gql from apollo server
const { gql } = require("apollo-server");

// define typeDefs
// queries and mutations to go in here
const typeDefs = gql`
  type Book {
    bookId: ID!
    title: String!
    authors: [String!]
    description: String!
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
    me: User!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  input AddUserInput {
    username: String!
    email: String!
    password: String!
  }

  input SavedBookInput {
    authors: [String]
    description: String!
    bookId: ID!
    image: String
    title: String!
  }

  type Mutation {
    login(input: LoginInput!): Auth!
    createUser(input: AddUserInput!): Auth!
    saveBook(savedBook: SavedBookInput!): User!
    deleteBook(bookId: ID!): User!
  }
`;

module.exports = typeDefs;

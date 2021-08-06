import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Mutation($loginInput: LoginInput!) {
    login(input: $loginInput) {
      token
      user {
        _id
        email
        username
      }
    }
  }
`;

export const SIGNUP = gql`
  mutation Mutation($createUserInput: createUserInput!) {
    createUser(input: $createUserInput) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation Mutation($saveBookInput: SavedBookInput!) {
    saveBook(input: $saveBookInput) {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        title
        authors
        description
        image
        link
      }
    }
  }
`;

export const DELETE_BOOK = gql`
  mutation Mutation($deleteBookBookId: ID!) {
    deleteBook(bookId: $deleteBookBookId) {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        title
        authors
        description
        image
        link
      }
    }
  }
`;

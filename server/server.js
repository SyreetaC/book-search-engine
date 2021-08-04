const express = require("express");
const path = require("path");

//got rid of routes

const { ApolloServer } = require("apollo-server");
const db = require("./config/connection");

const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const context = require("./context");
//need to require resolvers, typedefs and context

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
});

db.once("open", () => {
  app.listen(PORT, () =>
    console.log(`🌍 Now listening on https://localhost:${PORT}`)
  );
});

db.once("open", () => {
  server.listen().then(({ url }) => {
    console.log(`🌍 Server ready at ${url}`);
  });
});

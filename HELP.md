# Help for the Homework 21

## A mixture of hints, and guidance:

We've already been given starter code that has a fully functioning Google Books API build with RESTful Node. This means that all the endpoints will work with Postman. The goal is to refactor this to use GraphQL due to reasons. The app has been built with a React frontend which is already complete for the REST endpoints so you will just need to implement / swap out for the graphql endpoints.

The README has a breakdown of all the different expectations from the perspective of what the graphql types / schema / queries /mutations should look like.

In a RESTful app we have a different way of thinking when we're creating our frontend components, it's much more about 'what do I render if I don't have the api data I need?' where as when we have useQuery and useMutation in GraphQL, they provide us with data/loading/error values. So we don't need to check data, if loading is true for example.

Rather than having a specific collection of API methods, we have 2 different types of graphQL operations we can use - so here it will be Queries and Mutations. 2 separate files for the utils folder?

All of the operations needed to be performed on the data to perform CRUD operations is done for you. Don't over think this part and just copy and paste it into the respective resolvers for each Query / Mutation.

> CONCURRENTLY <- This is the package that we're using to run both the client and the server at the same time. When this breaks / or something goes wrong you need to google `how to stop node running on port X windows/mac`. This should give you some commands where you can destroy the node operations when concurrently forgets what it started.

---

### Specific things for Homework 21:

1. You MUST submit a deployed application
2. The application repo MUST contain code.
3. The application no longer has RESTFUL methods, but instead has a GraphQL API
4. There should be an Apollo Server that uses GraphQL queries and mutations to fetch and modify data.
5. Application includes a schema that has settings for Resolvers and Type Defs as outlined in the homework README.md
6. Application's authentication middleware has been modified to work with the Context of the GraphQL api.
7. Application MUST use Apollo Provider to communicate with Apollo Server.
8. Users MUST be able to sign up for an account AND log in.
9. Application MUST allow users to search for books and then save them to their account.
10. Application MUST allow a user to view the books that they've saved to their account AND delete them from the page.

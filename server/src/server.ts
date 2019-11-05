import * as express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import { createConnection, getRepository } from "typeorm";

const typeDefs = `
type User {
  id: ID!
  name: String!
  email: String!
}
type Query {
  hello(name: String): String!
  user(id: ID!): User!
}
`;

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();

server.applyMiddleware({ app });

createConnection().then(() => {
  app.get('/', (req, res) => {
    res.send('');
  });
  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
})

// App



import * as express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};


async function bootstrap() {

}


const server = new ApolloServer({ typeDefs, resolvers });



// App
const app = express();

server.applyMiddleware({ app });

app.get('/', (req, res) => {
  res.send('');
});
app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
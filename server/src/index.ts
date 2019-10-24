import { ApolloServer } from "apollo-server-express";
import express from "express";
import "reflect-metadata";
import { buildSchema, Query, Resolver,  } from "type-graphql";
@Resolver()
class UserResolver {
  @Query(() => String, {name: "PrintMax"})
  public async users() {
    return "MAXDAXLAX";
  }
}

const main = async () => {

  const schema = await buildSchema({
    resolvers: [UserResolver],
  });

  const apolloServer = new ApolloServer({schema});

  const app = express();

  apolloServer.applyMiddleware({ app });

  app.listen(8080, () => {
    // console.log("server started on http://localhost:4000/graphql");
  });
};

main();

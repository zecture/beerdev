import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import * as cors from "cors";


const startServer = async () => {
  await createConnection();
  console.log("Database connection successful");
  const app = express();


  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [__dirname + "/modules/**/resolver.*"]
    }),
    context: ({ req }: any) => ({
      req
    })
  });
  console.log("Here");

  server.applyMiddleware({ app });

  app.listen({ port: 8080 }, () => {
    console.log("Server running");
  });
};

startServer();
import { Dependencies } from "@corecodeio/libraries/di";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import { IContext } from "./interface/IContext";
import { resolvers } from "./resolvers";
import { default as createRoutes } from "./routes";
import { schema as typeDefs } from "./schema";

export const dependencies = new Dependencies();

export const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    dependencies,
  } as IContext,
});

const app = express();

app.use(express.json());

server.applyMiddleware({ app });

createRoutes(app);

export default app;

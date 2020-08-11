import { IDependencies } from "@corecodeio/libraries/di";
import { ApolloServer } from "apollo-server-express";
import { IContext } from "./interface/IContext";
import { resolvers } from "./resolvers";
import { schema as typeDefs } from "./schema";

export const createApolloServer = (dependencies: IDependencies) =>
  new ApolloServer({
    typeDefs,
    resolvers,
    context: {
      dependencies,
    } as IContext,
  });

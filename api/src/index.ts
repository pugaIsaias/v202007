import { Dependencies } from "@corecodeio/libraries/di";
import {
  createApolloServer,
  createExpressServer,
  createRoutes,
} from "./server";

const dependencies = new Dependencies();

const apolloServer = createApolloServer(dependencies);
const expressServer = createExpressServer();
createRoutes(expressServer, dependencies);

apolloServer.applyMiddleware({ app: expressServer });

expressServer.listen("8001", () => {
  console.log("listening");
});

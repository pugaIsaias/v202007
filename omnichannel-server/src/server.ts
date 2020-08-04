import { Dependencies } from "@corecodeio/libraries/di";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import { MessageSourceController } from "./feature/message-source/controller/MessageSourceController";
import { MessageSourceControllerInjectionKey } from "./feature/message-source/InjectionKeys";
import { queries as onboardingQueries } from "./feature/onboarding/resolver";
// import { sendPhoneNumberVerificationCode } from "./feature/onboarding/resolver/sendPhoneNumberVerificationCode";
import { schema } from "./schema";

const dependencies = new Dependencies();

const app = express();

export const server = new ApolloServer({
  typeDefs: schema,
  resolvers: {
    Query: {
      ...onboardingQueries,
      // sendPhoneNumberVerificationCode,
    },
  },
  context: {
    dependencies,
  },
});

app.use(express.json());

server.applyMiddleware({ app });

const messageSourceController = dependencies.provide<MessageSourceController>(
  MessageSourceControllerInjectionKey
);

app.post(
  "/message-source",
  messageSourceController.messageSource.bind(messageSourceController)
);

export default app;

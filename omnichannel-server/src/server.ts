import { Dependencies } from "@corecodeio/libraries/di";
import express from "express";
import { MessageSourceController } from "./feature/message-source/controller/MessageSourceController";
import { MessageSourceControllerInjectionKey } from "./feature/message-source/InjectionKeys";

export const server = express();
server.use(express.json());

const dependencies = new Dependencies();
const messageSourceController = dependencies.provide<MessageSourceController>(
  MessageSourceControllerInjectionKey
);

server.post(
  "/message-source",
  messageSourceController.messageSource.bind(messageSourceController)
);

export default server;

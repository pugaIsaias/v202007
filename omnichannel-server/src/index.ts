import { Dependencies } from "@corecodeio/libraries/di";
import { MessageSourceController } from "./feature/message-source/controller/MessageSourceController";
import { MessageSourceControllerInjectionKey } from "./feature/message-source/InjectionKeys";
import server from "./server";

const dependencies = new Dependencies();
const messageSourceController = dependencies.provide<MessageSourceController>(
  MessageSourceControllerInjectionKey
);

server.post(
  "/message-source",
  messageSourceController.messageSource.bind(messageSourceController)
);

server.listen("8001", () => {
  console.log("listening");
});

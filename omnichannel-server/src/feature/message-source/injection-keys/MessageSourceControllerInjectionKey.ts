import { InjectionKey, InjectionKeyScope } from "@corecodeio/libraries/di";
import { MessageSourceController } from "../controller/MessageSourceController";
import { MessageParserInjectionKey } from "./MessageParserInjectionKey";

export const MessageSourceControllerInjectionKey: InjectionKey<MessageSourceController> = {
  name: "MessageSourceControllerInjectionKey",
  scope: InjectionKeyScope.singleton,
  closure: (dependencies) => {
    const messageParser = dependencies.provide(MessageParserInjectionKey);
    const messageSourceController = new MessageSourceController(messageParser);
    return messageSourceController;
  },
};

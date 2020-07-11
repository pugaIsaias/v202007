import { InjectionKey, InjectionKeyScope } from "@corecodeio/libraries/di";
import { MessageParser } from "../util/MessageParser";
import { MessagePayload } from "../interfaces/messages/MessagePayload";
import { MessageBirdPayload } from "../interfaces/messages/MessageBirdPayload";

export const MessageParserInjectionKey: InjectionKey<MessageParser> = {
  name: "MessageParserInjectionKey",
  scope: InjectionKeyScope.singleton,
  closure: (dependencies) => {
    const messageBirdPayload: MessageBirdPayload = null;
    const standarMessageProviderInterface:MessagePayload = null;
    const messageParser = new MessageParser(null,[messageBirdPayload],standarMessageProviderInterface);
    return messageParser;
  },
};

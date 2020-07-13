import { InjectionKey, InjectionKeyScope } from "@corecodeio/libraries/di";
import { MessageParser } from "../util/MessageParser";
import { MessagePayload } from "../interfaces/messages/MessagePayload";
import { MessageBirdPayload } from "../interfaces/messages/MessageBirdPayload";

export const MessageParserInjectionKey: InjectionKey<MessageParser> = {
  name: "MessageParserInjectionKey",
  scope: InjectionKeyScope.singleton,
  closure: (dependencies) => {
    const messageBirdPayload: MessageBirdPayload = null;
    let standarMessageProviderPayload: MessagePayload;
    const messageParser = new MessageParser([messageBirdPayload]);
    return messageParser;
  },
};

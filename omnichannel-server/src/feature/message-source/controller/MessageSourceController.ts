import { MessageParser } from "../util/MessageParser";

export class MessageSourceController {
  private messageParser = new MessageParser();

  constructor(messageParser: MessageParser) {
    this.messageParser = messageParser;
  }

  setRawData = (rawData: any) => {
    this.messageParser.setRawData(rawData);
  };

  getParsedMessage = () => {
    return this.messageParser.parse();
  };
}

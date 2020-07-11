import { MessageParser } from "../util/MessageParser";

export class MessageSourceController {
  private messageParser = new MessageParser();

  constructor(messageParser: MessageParser) {
    this.messageParser = messageParser;
  }

  initializeMessageParser(rawData: any) {
    this.messageParser.setRawData(rawData);
  }

  getMessage() {
    return this.messageParser.parse();
  }
}

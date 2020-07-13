import { is } from "typescript-is";
import { MessagePayload } from "../interfaces/messages/MessagePayload";

export class MessageParser {
  private rawData: any;
  private messageServiceProviders: Array<any> = [];

  constructor(messageServiceProviders?: Array<any>) {
    this.messageServiceProviders = messageServiceProviders;
  }

  setRawData = (rawData: any) => {
    this.rawData = rawData;
  };

  getRawData = () => {
    return this.rawData;
  };

  setMessageServiceProviders = (messageServiceProviders: Array<any>) => {
    this.messageServiceProviders = messageServiceProviders;
  };

  private assertMessageServiceProvider = (rawData: any): Boolean => {
    if (this.messageServiceProviders !== null) {
      for (const provider of this.messageServiceProviders) {
        if (is<typeof provider>(rawData)) {
          return true;
        }
      }
    } else {
      throw new Error("Parser needs at least one Message Service Provider");
    }
    return false;
  };

  parse = () => {
    if (this.rawData !== undefined || null) {
      if (this.assertMessageServiceProvider(this.rawData)) {
        const parsedData: MessagePayload = this.rawData;
        return parsedData;
      } else {
        throw new Error("Raw data does not have a defined provider");
      }
    } else {
      throw new Error(
        "The parser needs to initialize the raw data in order to work"
      );
    }
  };
}

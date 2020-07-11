export class MessageParser {
  private rawData: any;
  private messageServiceProviders: Array<any> = [];
  private standardMessageInterface;

  constructor(
    rawData?: any,
    messageServiceProviders?: Array<any>,
    standarMessageInterface?: any
  ) {
    this.rawData = rawData;
    this.messageServiceProviders = messageServiceProviders;
    this.standardMessageInterface = standarMessageInterface;
  }

  public set setRawData(rawData: any) {
    this.rawData = rawData;
  }

  public set setMessageServiceProviders(messageServiceProviders: Array<any>) {
    this.messageServiceProviders = messageServiceProviders;
  }

  public set setStandardMessageInterface(standardMessageInterface: any) {
    this.standardMessageInterface = standardMessageInterface;
  }

  public get getStandardMessageInterface(): any {
    return this.standardMessageInterface;
  }

  private assertMessageServiceProvider(rawData: any): Boolean {
    if (this.messageServiceProviders !== null) {
      for (const provider of this.messageServiceProviders) {
        if (typeof rawData === provider) {
          return true;
        }
      }
    } else {
      throw new Error("Parser needs at least one Message Service Provider");
    }
    return false;
  }

  parse() {
    if (this.rawData !== undefined || null) {
      if (this.assertMessageServiceProvider(this.rawData)) {
        if (this.getStandardMessageInterface() !== undefined || null) {
          const standardMessageInterface = this.getStandardMessageInterface();
          const parsedData: typeof standardMessageInterface = this.rawData;

          return parsedData;
        } else {
          throw new Error("The parser needs a standard message interface");
        }
      } else {
        throw new Error("Raw data does not have a defined provider");
      }
    } else {
      throw new Error(
        "The parser needs to initialize the raw data in order to work"
      );
    }
  }
}

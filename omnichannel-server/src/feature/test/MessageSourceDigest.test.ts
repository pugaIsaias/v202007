import { Dependencies } from "@corecodeio/libraries/di";
import { MessageSourceDigestInjectionKey } from "../message-source/InjectionKeys";
import { IMessageBirdPayload } from "../message-source/interfaces/IMessageBirdPayload";
import { IMessagePayload } from "../message-source/interfaces/IMessagePayload";

const dependencies = new Dependencies();
const messageSourceDigest = dependencies.provide(
  MessageSourceDigestInjectionKey
);

describe("Testing MessageSourceDigest parseRequestBody method", () => {
  test("Should return the body of the request parsed", () => {
    const date = "2020-07-14T02:28:51.11316996Z";
    const body: IMessageBirdPayload = {
      contactPhoneNumber: "+123456789",
      currentTime: date,
      payload: "Hello World Tests",
    };

    const payloadExpected: IMessagePayload = {
      message: "Hello World Tests",
      currentTime: new Date(date),
      from: "+123456789",
    };

    expect(messageSourceDigest.parseRequestBody(body)).toEqual(payloadExpected);
  });
});

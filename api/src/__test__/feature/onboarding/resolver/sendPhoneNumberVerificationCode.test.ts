import { QuerySendPhoneNumberVerificationCode } from "@corecodeio/libraries/api/onboarding";
import { Dependencies } from "@corecodeio/libraries/di";
import { createTestClient } from "apollo-server-testing";
import { createApolloServer } from "../../../../server";
import { TwilioSMSVerificationInjectionKey } from "../../../../util/twilio/InjectionKeys";
import { ISMSVerification } from "../../../../util/twilio/interface/ISMSVerification";

const dependencies = new Dependencies();
const apolloServer = createApolloServer(dependencies);

dependencies.override<ISMSVerification>(TwilioSMSVerificationInjectionKey, {
  send: jest.fn(() => Promise.resolve(true)),
  verify: jest.fn(() => Promise.resolve(true)),
});

describe("sendPhoneNumberVerificationCode", () => {
  test("Should return a response with code 200", async () => {
    const { query } = createTestClient(apolloServer);

    const res = await query({
      query: QuerySendPhoneNumberVerificationCode,
      variables: {
        input: {
          phoneNumber: "123",
        },
      },
    });

    const twilioSMSVerification = dependencies.provide(
      TwilioSMSVerificationInjectionKey
    );

    expect(twilioSMSVerification.send).toHaveBeenCalledTimes(1);
  });
});

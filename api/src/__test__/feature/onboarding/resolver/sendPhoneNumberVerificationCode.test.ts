import { QuerySendPhoneNumberVerificationCode } from "@corecodeio/libraries/api/onboarding";
import request from "supertest";
import { server } from "../../../../server";

describe("sendPhoneNumberVerificationCode", () => {
  test("Should return a response with code 200", async (done) => {
    const res = await request(server)
      .post(server.graphqlPath)
      .send({
        query: QuerySendPhoneNumberVerificationCode,
        variables: {
          input: {
            phoneNumber: "123",
          },
        },
      });
  });
});

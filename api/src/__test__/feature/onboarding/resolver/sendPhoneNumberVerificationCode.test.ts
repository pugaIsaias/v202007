import { QuerySendPhoneNumberVerificationCode } from "@corecodeio/libraries/api/onboarding";
import { Dependencies } from "@corecodeio/libraries/di";
import request from "supertest";
import { createApolloServer } from "../../../../server";

const dependencies = new Dependencies();
const server = createApolloServer(dependencies);

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

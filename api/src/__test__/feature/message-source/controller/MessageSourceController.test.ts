import { Dependencies } from "@corecodeio/libraries/di";
import request from "supertest";
import { IMessageBirdPayload } from "../../../../feature/message-source/interfaces/IMessageBirdPayload";
import { createExpressServer, createRoutes } from "../../../../server";

const dependencies = new Dependencies();

const server = createExpressServer();
createRoutes(server, dependencies);

describe("MessageSourceController", () => {
  test("Should return a response with code 200", async (done) => {
    const currentTime = "2020-07-14T02:28:51.11316996Z";
    const message = "Hello World Tests";
    const from = "+123456789";

    const body: IMessageBirdPayload = {
      contactPhoneNumber: from,
      currentTime,
      payload: message,
    };

    const res = await request(server).post("/message-source").send(body);

    expect(res.status).toBe(200);
    done();
  });
});

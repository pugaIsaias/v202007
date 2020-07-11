import { Dependencies } from "@corecodeio/libraries/di";
import { Request, Response } from "express";
import { MessageSourceControllerInjectionKey } from "./feature/message-source/injection-keys/MessageSourceControllerInjectionKey";
import server from "./server";

const dependencies = new Dependencies();

server.post("/message-source", async (req: Request, res: Response) => {
  const MessageSourceController = dependencies.provide(
    MessageSourceControllerInjectionKey
  );
  
});

server.listen("8001", () => {
  console.log("listening");
});

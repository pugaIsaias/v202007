import { MessageSourceControllerInjectionKey } from "../injection-keys/MessageSourceControllerInjectionKey";
import { Response, Request } from "express";
import { Dependencies } from "@corecodeio/libraries/di";

export const sourceController = async (req: Request, res: Response) => {
  const dependencies = new Dependencies();
  const messageSourceController = dependencies.provide(
    MessageSourceControllerInjectionKey
  );
  const errorMessage = "Internal server error";

  try {
    messageSourceController.setRawData(req.body.message);
    console.log(messageSourceController.getParsedMessage());
  } catch (err) {
    console.log(err);
    res.status(500);
    res.json({
      code: "500",
      message: Boolean(err.message) ? err.message : errorMessage,
    });
  }
};

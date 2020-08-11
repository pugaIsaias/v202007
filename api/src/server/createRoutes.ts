import { IDependencies } from "@corecodeio/libraries/di";
import * as core from "express-serve-static-core";
import { MessageSourceController } from "../feature/message-source/controller/MessageSourceController";
import { MessageSourceControllerInjectionKey } from "../feature/message-source/InjectionKeys";

export const createRoutes = (
  app: core.Express,
  dependencies: IDependencies
) => {
  const messageSourceController = dependencies.provide<MessageSourceController>(
    MessageSourceControllerInjectionKey
  );

  app.post(
    "/message-source",
    messageSourceController.messageSource.bind(messageSourceController)
  );
};

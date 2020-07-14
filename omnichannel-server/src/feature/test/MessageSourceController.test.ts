import { Dependencies } from "@corecodeio/libraries/di";
import { MessageSourceControllerInjectionKey } from "../message-source/InjectionKeys";

const dependencies = new Dependencies();
const messageSourceDigest = dependencies.provide(
  MessageSourceControllerInjectionKey
);

describe("Testing MessageSourceController messageSource method", () => {
  test("Should return something", () => {});
});

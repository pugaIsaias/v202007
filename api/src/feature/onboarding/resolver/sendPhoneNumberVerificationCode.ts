import { QueryResolvers } from "@corecodeio/libraries/api";
import { IContext } from "../../../server/interface/IContext";
import { OnboardingControllerInjectionKey } from "../InjectionKeys";

export const sendPhoneNumberVerificationCode: QueryResolvers<
  IContext
>["sendPhoneNumberVerificationCode"] = (
  parent,
  { input },
  { dependencies }
) => {
  try {
    const onboardingController = dependencies.provide(
      OnboardingControllerInjectionKey
    );

    return onboardingController.sendPhoneNumberVerificationCode(input);
  } catch (error) {}
};

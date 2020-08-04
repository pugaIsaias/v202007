import { InjectionKey, InjectionKeyScope } from "@corecodeio/libraries/di";
import { TwilioSMSVerificationInjectionKey } from "../../util/twilio/InjectionKeys";
import { OnboardingController } from "./controller/OnboardingController";

export const OnboardingControllerInjectionKey: InjectionKey<OnboardingController> = {
  name: "OnboardingControllerInjectionKey",
  scope: InjectionKeyScope.singleton,
  closure: (dependencies) => {
    const twilioSMSVerification = dependencies.provide(
      TwilioSMSVerificationInjectionKey
    );

    const onboardingController = new OnboardingController(
      twilioSMSVerification
    );
    return onboardingController;
  },
};

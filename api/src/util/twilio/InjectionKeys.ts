import { InjectionKey, InjectionKeyScope } from "@corecodeio/libraries/di";
import { ISMSVerification } from "./interface/ISMSVerification";
import { default as TwilioSMSVerification } from "./service/SMSVerification";

export const TwilioSMSVerificationInjectionKey: InjectionKey<ISMSVerification> = {
  name: "TwilioSMSVerificationInjectionKey",
  scope: InjectionKeyScope.singleton,
  closure: (dependencies) => {
    return TwilioSMSVerification;
  },
};

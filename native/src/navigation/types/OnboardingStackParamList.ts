import { VerifyPhoneNumberCodeInput } from "@corecodeio/libraries/api";
import { OnboardingStackScreenName } from "../model/OnboardingStackScreenName";

export type OnboardingStackParamList = {
  [OnboardingStackScreenName.SendPhoneNumberVerificationCode]: undefined;
  [OnboardingStackScreenName.VerifyPhoneNumberCode]: Pick<
    VerifyPhoneNumberCodeInput,
    "phoneNumber"
  >;
};

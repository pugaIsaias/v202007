import { QuerySendPhoneNumberVerificationCodeArgs } from "@corecodeio/libraries/api";

export interface IOnboardingController {
  sendPhoneNumberVerificationCode: (
    input: QuerySendPhoneNumberVerificationCodeArgs["input"]
  ) => Promise<boolean>;
}

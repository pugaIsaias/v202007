import { ISMSVerification } from "../../../util/twilio/interface/ISMSVerification";

export class OnboardingController {
  private twilioSMSVerification: ISMSVerification;

  constructor(twilioSMSVerification: ISMSVerification) {
    this.twilioSMSVerification = twilioSMSVerification;
  }

  async sendPhoneNumberVerificationCode({ phoneNumber }): Promise<boolean> {
    // TODO check if phone number already exists (apply to resolver middleware)

    return this.twilioSMSVerification.send(phoneNumber);
  }
}

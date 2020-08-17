import config from "../../../util/config";
import { ISMSVerification } from "../../../util/twilio/interface/ISMSVerification";
import { IOnboardingController } from "../interface/IOnboardingController";

const env = config.get("env");
const { verifiedPhoneNumbers } = config.get("flags");

export class OnboardingController implements IOnboardingController {
  private twilioSMSVerification: ISMSVerification;
  private verifiedPhoneNumbers = [];

  constructor(twilioSMSVerification: ISMSVerification) {
    this.twilioSMSVerification = twilioSMSVerification;
    this.verifiedPhoneNumbers = env === "test" ? verifiedPhoneNumbers : [];
  }

  async sendPhoneNumberVerificationCode({ phoneNumber }) {
    // TODO check if phone number already exists (apply to resolver middleware)

    if (this.verifiedPhoneNumbers.includes(phoneNumber)) {
      return true;
    }

    return this.twilioSMSVerification.send(phoneNumber);
  }
}

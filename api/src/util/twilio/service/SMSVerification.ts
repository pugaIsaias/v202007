import { client } from "../client";
import { ISMSVerification } from "../interface/ISMSVerification";

const serviceId = process.env.TWILIO_SMS_SID;

const send = async (to: string): Promise<boolean> => {
  try {
    const response = await client.verify
      .services(serviceId)
      .verifications.create({
        locale: "es",
        to,
        channel: "sms",
      });

    return response.status === "approved";
  } catch (error) {}
};

const verify = async (to: string, code: string): Promise<boolean> => {
  try {
    const response = await client.verify
      .services(serviceId)
      .verificationChecks.create({
        to,
        code,
      });

    return response.status === "approved";
  } catch (error) {}
};

const smsVerification: ISMSVerification = {
  verify,
  send,
};

export default smsVerification;

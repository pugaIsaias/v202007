import convict from "convict";

const config = convict({
  env: {
    doc: "The applicaton environment.",
    format: ["production", "staging", "test"],
    default: "test",
    env: "NODE_ENV",
  },

  twilio: {
    aid: {
      doc: "Twilio Account SID",
      format: "*",
      default: null,
      env: "TWILIO_ACCOUNT_SID",
      arg: "twilio-account-sid",
    },

    smsServiceID: {
      doc: "Twilio SMS Service ID",
      format: "*",
      default: null,
      env: "TWILIO_SMS_SID",
      arg: "twilio-sms-sid",
    },

    authToken: {
      doc: "Twilio Auth Token",
      format: "*",
      default: null,
      env: "TWILIO_AUTH_TOKEN",
      arg: "twilio-auth-token",
    },
  },
});

export default config;

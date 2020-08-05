import twilio from "twilio";
import config from "../config";

const { aid, authToken } = config.get("twilio");

export const client = twilio(aid, authToken);

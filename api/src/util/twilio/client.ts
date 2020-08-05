import twilio from "twilio";
import config from "../config";

const { aid, autToken } = config.get("twilio");

export const client = twilio(aid, autToken);

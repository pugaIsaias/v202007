import expressJWT from "express-jwt";
import jsonwebtoken from "jsonwebtoken";
import config from "../config";
import { IJSONWebToken } from "./interface/IJSONWebToken";

const { privateKey, publicKey, algorithm, audience, issuer } = config.get(
  "jwt"
);

function sign<Payload = object>(payload: Payload, options?: any): string {
  return jsonwebtoken.sign(payload, Buffer.from(privateKey, "base64"), {
    algorithm,
    audience,
    issuer,
    expiresIn: "7days",
  });
}

function verify(token: string): boolean {
  return jsonwebtoken.verify(token, publicKey);
}

export const jwtMiddleware = expressJWT({
  credentialsRequired: false,
});

export const jwt: IJSONWebToken = {
  sign,
  verify,
};

export default jwt;

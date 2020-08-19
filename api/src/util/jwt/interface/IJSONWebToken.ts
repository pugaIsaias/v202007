export interface IJSONWebToken {
  sign: <Payload = object>(payload: Payload, options?: any) => string;
  verify: (token: string) => boolean;
}

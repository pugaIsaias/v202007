export interface ISMSVerification {
  send: (to: string) => Promise<boolean>;
  verify: (to: string, code: string) => Promise<boolean>;
}

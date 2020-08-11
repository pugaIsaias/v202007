import { gql } from "apollo-server-express";

export const schema = gql`
  type Query {
    sendPhoneNumberVerificationCode(
      input: SendPhoneNumberVerificatioCodeInput!
    ): Boolean!
    verifyPhoneNumberCode(input: VerifyPhoneNumberCodeInput!): Boolean!
  }

  input SendPhoneNumberVerificatioCodeInput {
    phoneNumber: String!
  }

  input VerifyPhoneNumberCodeInput {
    phoneNumber: String!
    code: String!
  }
`;

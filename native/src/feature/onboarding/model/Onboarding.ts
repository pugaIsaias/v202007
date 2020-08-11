import { LazyQueryResult, useLazyQuery } from "@apollo/client";
import {
  Query,
  QuerySendPhoneNumberVerificationCodeArgs,
} from "@corecodeio/libraries/api";
import { QuerySendPhoneNumberVerificationCode } from "@corecodeio/libraries/api/onboarding";

export class Onboarding {
  useSendPhoneNumberVerificationCode(): {
    executeSendPhoneNumberVerificationCode: (
      input: QuerySendPhoneNumberVerificationCodeArgs
    ) => void;
    result: Query["sendPhoneNumberVerificationCode"];
    queryResult: LazyQueryResult<
      Query["sendPhoneNumberVerificationCode"],
      QuerySendPhoneNumberVerificationCodeArgs
    >;
  } {
    const [execute, queryResult] = useLazyQuery<
      Query["sendPhoneNumberVerificationCode"],
      QuerySendPhoneNumberVerificationCodeArgs
    >(QuerySendPhoneNumberVerificationCode);

    return {
      executeSendPhoneNumberVerificationCode: async ({ input }) => {
        await execute({
          variables: {
            input,
          },
        });
      },
      result: queryResult.data?.valueOf() as Query["sendPhoneNumberVerificationCode"],
      queryResult,
    };
  }
}

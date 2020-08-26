import { LazyQueryResult, useLazyQuery } from "@apollo/client";
import {
  Query,
  QueryVerifyPhoneNumberCodeArgs,
} from "@corecodeio/libraries/api";
import { QueryVerifyPhoneNumberCode } from "@corecodeio/libraries/api/onboarding";

export class OnboardingCode {
  useVerifyPhoneNumberCode(): {
    executeVerifyPhoneNumberCode: (
      input: QueryVerifyPhoneNumberCodeArgs
    ) => void;
    result: Query["verifyPhoneNumberCode"];
    queryResult: LazyQueryResult<
      Query["verifyPhoneNumberCode"],
      QueryVerifyPhoneNumberCodeArgs
    >;
  } {
    const [execute, queryResult] = useLazyQuery<
      Query["verifyPhoneNumberCode"],
      QueryVerifyPhoneNumberCodeArgs
    >(QueryVerifyPhoneNumberCode);

    return {
      executeVerifyPhoneNumberCode: async ({ input }) => {
        await execute({
          variables: {
            input,
          },
        });
      },
      result: queryResult.data?.valueOf() as Query["verifyPhoneNumberCode"],
      queryResult,
    };
  }
}

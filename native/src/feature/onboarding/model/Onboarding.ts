import { LazyQueryResult, useLazyQuery } from "@apollo/client";
import {
  Query,
  QuerySendPhoneNumberVerificationCodeArgs,
  QueryVerifyPhoneNumberCodeArgs,
} from "@corecodeio/libraries/api";
import {
  QuerySendPhoneNumberVerificationCode,
  QueryVerifyPhoneNumberCode,
} from "@corecodeio/libraries/api/onboarding";
import React from "react";

export class Onboarding {
  useSendPhoneNumberVerificationCode(): {
    executeSendPhoneNumberVerificationCode: (
      input: QuerySendPhoneNumberVerificationCodeArgs
    ) => void;
    result: Query["sendPhoneNumberVerificationCode"] | undefined;
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
      result: queryResult.data,
      queryResult,
    };
  }

  useVerifyPhoneNumberCode(): {
    executeVerifyPhoneNumberCode: (
      input: QueryVerifyPhoneNumberCodeArgs
    ) => void;
    result: Query["verifyPhoneNumberCode"] | undefined;
    error: Error | null;
    queryResult: LazyQueryResult<
      Query["verifyPhoneNumberCode"],
      QueryVerifyPhoneNumberCodeArgs
    >;
  } {
    const [error, setError] = React.useState<Error | null>(null);

    const [execute, queryResult] = useLazyQuery<
      Query["verifyPhoneNumberCode"],
      QueryVerifyPhoneNumberCodeArgs
    >(QueryVerifyPhoneNumberCode);

    return {
      executeVerifyPhoneNumberCode: async ({ input }) => {
        try {
          await execute({
            variables: {
              input,
            },
          });
        } catch (error) {
          setError(new Error("Algo salió mal. Intenta de nuevo"));
        }
      },
      result: queryResult.data,
      error: queryResult.error ?? error,
      queryResult,
    };
  }
}

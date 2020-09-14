import { InjectionKey, InjectionKeyScope } from "@corecodeio/libraries/di";
import { AuthTokenInjectionKey } from "../../util/auth/InjectionKey";
import { Onboarding } from "./model/Onboarding";

export const OnboardingInjectionKey: InjectionKey<Onboarding> = {
  name: "OnboardingInjectionKey",
  scope: InjectionKeyScope.singleton,
  closure: (dependencies) => {
    const authToken = dependencies.provide(AuthTokenInjectionKey);

    const onboarding = new Onboarding(authToken);

    return onboarding;
  },
};

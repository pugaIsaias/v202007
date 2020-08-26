import { InjectionKey, InjectionKeyScope } from "@corecodeio/libraries/di";
import { Onboarding } from "./model/Onboarding";
import { OnboardingCode } from "./model/OnboardingCode";

export const OnboardingInjectionKey: InjectionKey<Onboarding> = {
  name: "OnboardingInjectionKey",
  scope: InjectionKeyScope.singleton,
  closure: (dependencies) => {
    const onboarding = new Onboarding();
    return onboarding;
  },
};

export const OnboardingCodeInjectionKey: InjectionKey<OnboardingCode> = {
  name: "OnboardingCodeInjectionKey",
  scope: InjectionKeyScope.singleton,
  closure: (dependencies) => {
    const onboarding = new OnboardingCode();
    return onboarding;
  },
};

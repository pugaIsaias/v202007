import { InjectionKey, InjectionKeyScope } from "@corecodeio/libraries/di";
import { StoreInjectionKey } from "../store/InjectionKey";
import { AuthToken } from "./model/AuthToken";

export const AuthTokenInjectionKey: InjectionKey<AuthToken> = {
  name: "AuthInjectionKey",
  scope: InjectionKeyScope.singleton,
  closure: (dependencies) => {
    const store = dependencies.provide(StoreInjectionKey);

    const authToken = new AuthToken(store);

    return authToken;
  },
};

import { InjectionKey, InjectionKeyScope } from "@corecodeio/libraries/di";
import { Store } from "./model/Store";

export const StoreInjectionKey: InjectionKey<Store> = {
  name: "StoreInjectionKey",
  scope: InjectionKeyScope.singleton,
  closure: (dependencies) => {
    const authToken = new Store();

    return authToken;
  },
};

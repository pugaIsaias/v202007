import { InjectionKeyScope } from "@corecodeio/libraries/di/InjectionKeyScope";
import { IDependencies } from "./IDependencies";

export interface InjectionKey<T> {
  name: string;
  scope: InjectionKeyScope;
  closure: (dependencies: IDependencies) => T;
}

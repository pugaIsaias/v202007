import { IDependencies } from "./IDependencies";
import { InjectionKeyScope } from "./InjectionKeyScope";

export interface InjectionKey<T> {
  name: string;
  scope: InjectionKeyScope;
  closure: (dependencies: IDependencies) => T;
}

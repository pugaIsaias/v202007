import { IDependencies } from "./IDependencies";

export interface InjectionKey<T> {
  name: string;
  scope: string;
  closure: (dependencies: IDependencies) => T;
}

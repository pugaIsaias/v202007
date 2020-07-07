import { IDependencies } from "./IDependencies";

export class Dependencies implements IDependencies {
  provide(injectionKey: InjectionKey) {}

  destroy() {}
}

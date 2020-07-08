import { IDependencies } from "./IDependencies";
import { InjectionKey } from "./InjectionKey";
import { InjectionKeyScope } from "./InjectionKeyScope";

class Dependencies implements IDependencies {
  protected cache = new Map<string, any>();

  provide<T>(injectionKey: InjectionKey<T>) {
    switch (injectionKey.scope) {
      case InjectionKeyScope.singleton:
        let object = this.cache.get(injectionKey.name) as T;

        if (Boolean(object)) {
          return object;
        }

        object = injectionKey.closure(this);
        this.cache.set(injectionKey.name, object);

        return object;
      case InjectionKeyScope.transient:
        return injectionKey.closure(this);
    }
  }

  destroy() {
    this.cache.clear();
  }
}

export { Dependencies };
export default Dependencies;

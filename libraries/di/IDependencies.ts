export interface IDependencies {
  provide(injectionKey: InjectionKey);
  destroy();
}

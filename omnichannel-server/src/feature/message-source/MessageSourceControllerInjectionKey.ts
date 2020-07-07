export const MessageSourceControllerInjectionKey: InjectionKey<MessageSourceController> = {
  name: "MessageSourceControllerInjectionKey",
  scope: "singleton",
  closure: (dependencies) => {
    const MessageSourceController = new MessageSourceController();
    return MessageSourceController;
  },
};

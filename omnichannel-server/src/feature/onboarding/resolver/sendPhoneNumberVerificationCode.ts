export const sendPhoneNumberVerificationCode = (
  parent,
  input,
  { dependencies },
  info
) => {
  try {
    const onboardingController = dependencies.provide(
      OnboardingRepositoryInjectionKey
    );

    return onboardingController.sendPhoneNumberVerificationCode(input);
    // const response = { status: "success" };

    // return response.status === "success";
  } catch (error) {}
};

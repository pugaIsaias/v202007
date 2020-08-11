import { QueryResolvers } from "@corecodeio/libraries/api";
import { queries as onboardingQueries } from "../feature/onboarding/resolver";
import { IContext } from "./interface/IContext";

export const resolvers = {
  Query: {
    ...onboardingQueries,
  } as QueryResolvers<IContext>,
};

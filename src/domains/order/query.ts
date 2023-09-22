import {
  DomainTypeOf,
  RemeshCommandContext,
  RemeshQueryContext,
  RemeshState
} from "remesh";
import { OrderDomain, OrderState } from ".";

export const getQuerys = (domain: any, state: RemeshState<OrderState>) => {
  const getBuyer = domain.query({
    name: "getBuyer",
    impl(d: RemeshQueryContext) {
      const curState = d.get(state());

      return curState.buyer;
    }
  });

  return {
    getBuyer
  };
};

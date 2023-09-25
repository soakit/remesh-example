import { RemeshDomainContext, RemeshQueryContext, RemeshState } from "remesh";
import { OrderState } from ".";

export const getQueries = (
  domain: RemeshDomainContext,
  state: RemeshState<OrderState>,
) => {
  const GetBuyerQuery = domain.query({
    name: "GetBuyerQuery",
    impl(d: RemeshQueryContext) {
      const curState = d.get(state());

      return curState.buyer;
    },
  });

  return {
    GetBuyerQuery,
  };
};

import { RemeshDomainContext, RemeshState } from "remesh";
import { Buyer, OrderState } from ".";

export const getCommands = (
  domain: RemeshDomainContext,
  state: RemeshState<OrderState>,
  events: any,
) => {
  const UpdateBuyerCommand = domain.command({
    name: "UpdateBuyerCommand",
    impl({ get }, buyer: Buyer) {
      const newState = state().new({
        ...get(state()),
        buyer,
      });
      return [newState, events.UpdateBuyerEvent(buyer)];
    },
  });

  return {
    UpdateBuyerCommand,
  };
};

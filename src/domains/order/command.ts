import { RemeshState } from "remesh";
import { OrderState } from ".";

export const getCommands = (domain: any, state: RemeshState<OrderState>) => {
  const updateBuyer = domain.command({
    name: "updateBuyer",
    impl({ get }: any, buyer: any) {
      return state().new({
        ...get(state()),
        buyer
      });
    }
  });

  return {
    updateBuyer
  };
};

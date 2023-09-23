import { RemeshDomainContext } from "remesh";
import { Buyer } from ".";

export const getEvents = (domain: RemeshDomainContext) => {
  const UpdateBuyerEvent = domain.event<Buyer>({
    name: "UpdateBuyerEvent"
  });

  return {
    UpdateBuyerEvent
  };
};

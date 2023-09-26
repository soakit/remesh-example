import { useRemeshDomain, useRemeshQuery } from "remesh-react";
import { CustomerSelfOrderDomain } from "../../domains/compose/CustomerSelfOrder";

export const AddOrder = () => {
  
  const domain = useRemeshDomain(CustomerSelfOrderDomain());

  const buyer = useRemeshQuery(domain.query.GetBuyerQuery());

  return (
    <div>
      <div>买方: {buyer?.name}</div>
    </div>
  );
};

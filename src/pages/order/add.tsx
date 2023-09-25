import { useRemeshDomain, useRemeshQuery } from "remesh-react";
import { OrderDomain } from "../../domains/order";

export const AddOrder = () => {
  const domain = useRemeshDomain(OrderDomain());

  const buyer = useRemeshQuery(domain.query.GetBuyerQuery());

  return (
    <div className="todoapp">
      <div>买方: {buyer?.name}</div>
    </div>
  );
};

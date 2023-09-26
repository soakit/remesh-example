import { useRemeshDomain, useRemeshQuery } from "remesh-react";
import { CustomerSelfOrderDomain } from "../../domains/compose/CustomerSelfOrder";
import { OrderSource } from "../../domains/base/typings/order";

export const AddOrder = () => {
  const domain = useRemeshDomain(
    CustomerSelfOrderDomain({
      orderSource: OrderSource.WEB,
    })
  );

  const buyer = useRemeshQuery(domain.query.GetBuyerQuery());

  return (
    <div>
      <div>买方: {buyer?.name}</div>
    </div>
  );
};

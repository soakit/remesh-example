import { RemeshDomainContext, Capitalize } from "remesh";

export type Buyer = {
  id: number;
  name: string;
};

export type Seller = {
  id: number;
  name: string;
}

// TODO:
export type ProductItem = {};

export type OrderState = {
  buyer?: Buyer;
  seller?: Seller;
  products?: ProductItem[];
};

export type BaseOrderModuleOptions = {
  name: Capitalize
  default: OrderState
}

export const BaseOrderModule = (domain: RemeshDomainContext, options: BaseOrderModuleOptions) => {

  const OrderState = domain.state<OrderState>({
    name: `${options.name}.OrderState`,
    default: options.default,
  });

  const UpdateBuyerEvent = domain.event<Buyer>({
    name: `${options.name}.UpdateBuyerEvent`
  });

  const GetBuyerQuery = domain.query({
    name: `${options.name}.GetBuyerQuery`,
    impl({ get }) {
      const curState = get(OrderState());

      return curState.buyer;
    },
  });

  const UpdateBuyerCommand = domain.command({
    name: `${options.name}.UpdateBuyerCommand`,
    impl({ get }, buyer: Buyer) {
      const newState = OrderState().new({
        ...get(OrderState()),
        buyer,
      });
      return [newState, UpdateBuyerEvent(buyer)];
    },
  });

  return {
    query: {
      GetBuyerQuery
    },
    command: {
      UpdateBuyerCommand
    },
    event: {
      UpdateBuyerEvent
    },
  };
};

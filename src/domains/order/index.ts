import { Remesh } from "remesh";
import { getQueries } from "./query";
import { getCommands } from "./command";
import { getEvents } from "./event";
import { interval, map, take, tap } from "rxjs";

export type Buyer = {
  id: number;
  name: string;
};

export type OrderState = {
  buyer: null | Buyer;
  seller: null | {
    id: number;
    name: string;
  };
};

export const OrderDomain = Remesh.domain({
  name: "OrderDomain",
  impl: (domain) => {
    const OrderState = domain.state<OrderState>({
      name: "OrderState",
      default: {
        buyer: null,
        seller: null,
      },
    });

    const events = getEvents(domain);
    const queries = getQueries(domain, OrderState);
    const commands = getCommands(domain, OrderState, events);

    domain.effect({
      name: "InitEffect",
      impl() {
        return [
          commands.UpdateBuyerCommand({
            id: 1,
            name: "张三",
          }),
        ];
        /* return interval(1000).pipe(
          take(1),
          map((value) => {
            return [
              commands.updateBuyerCommand({
                id: 1,
                name: "张三"
              })
            ];
          })
        ); */
      },
    });

    return {
      query: queries,
      command: commands,
      event: events,
    };
  },
});

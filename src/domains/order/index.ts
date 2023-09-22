import { Remesh } from "remesh";
import { getQuerys } from "./query";
import { getCommands } from "./command";
import { getEvents } from "./event";
import { interval, map, take, tap } from "rxjs";

export type OrderState = {
  buyer: null | {
    id: number;
    name: string;
  };
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
        seller: null
      }
    });

    const events = getEvents(domain);
    const querys = getQuerys(domain, OrderState);
    const commands = getCommands(domain, OrderState);

    // console.log(
    //   "commands.updateBuyer",
    //   commands.updateBuyer({
    //     id: 1,
    //     name: "张三"
    //   })
    // );

    domain.effect({
      name: "FakeEffect",
      impl() {
        return interval(1000).pipe(
          take(1),
          map((value) => {
            return [
              commands.updateBuyer({
                id: 1,
                name: "张三"
              })
            ];
          })
        );
      }
    });

    return {
      query: querys,
      command: commands,
      event: events
    };
  }
});

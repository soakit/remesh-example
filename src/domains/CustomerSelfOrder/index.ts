import { Remesh } from "remesh";
import { BaseOrderModule } from "../BaseOrder";

export const CustomerSelfOrderDomain = Remesh.domain({
  name: "CustomerSelfOrderDomain",
  impl: (domain) => {

    const CustomerSelfOrder = BaseOrderModule(domain, {
      name: 'CustomerSelfOrder',
      default: {},
    })

    // 初始化
    domain.effect({
      name: "InitEffect",
      impl() {
        return [
          CustomerSelfOrder.command.UpdateBuyerCommand({
            id: 1,
            name: "张三",
          }),
        ];
      },
    });

    return {
      query: {
        ...CustomerSelfOrder.query
      },
      command: {
        ...CustomerSelfOrder.command
      },
      event: {
        ...CustomerSelfOrder.event
      }
    }
  }
});


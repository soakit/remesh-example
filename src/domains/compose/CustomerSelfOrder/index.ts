import { Remesh } from "remesh";
import { BaseOrderModule } from "../../base/BaseOrder";
import { OrderSource, OrderStatus } from "../../base/typings/order";
import { EOrgType } from "../../base/typings/organ";

export const CustomerSelfOrderDomain = Remesh.domain({
  name: "CustomerSelfOrderDomain",
  impl: (
    domain,
    options: {
      orderSource: OrderSource;
    }
  ) => {
    const { orderSource } = options;

    const CustomerSelfOrder = BaseOrderModule(domain, {
      name: "CustomerSelfOrder",
      default: {
        couponId: null,
        couponAmount: 0,
        point: 0,
        pointAmount: 0,
        customFreight: false,
        totalFreight: 0,
        orderTotalAmount: 0,
        orderDiscountAmount: 0,
        productDiscountAmount: 0,
        productTotalAmount: 0,
        orderStatus: OrderStatus.ORDER_AUDIT_PENDING,
        remark: [],
        orderAttachments: [],
        orderSource,
      },
    });

    // 初始化
    domain.effect({
      name: "InitEffect",
      impl() {
        return [
          CustomerSelfOrder.command.UpdateBuyerCommand({
            id: 1,
            name: "张三",
            hierarchyCode: EOrgType.CUSTOMER,
            orgId: 0,
            parentId: 0,
            parentName: "",
          }),
        ];
      },
    });

    return {
      query: {
        ...CustomerSelfOrder.query,
      },
      command: {
        ...CustomerSelfOrder.command,
      },
      event: {
        ...CustomerSelfOrder.event,
      },
    };
  },
});

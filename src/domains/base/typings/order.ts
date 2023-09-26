import { IOrderAttachment } from "./order-attachment";
import { IOrderDelivery } from "./order-delivery";
import { IOrganization } from "./organ";
import { IOrderRemark } from "./order-remark";

// TODO:
export type ProductItem = {};

/** 订单状态 */
export enum OrderStatus {
  /** 待订单审核 */
  ORDER_AUDIT_PENDING = "ORDER_AUDIT_PENDING",
  /** 待收货审核 */
  RECEIPT_AUDIT_PENDING = "RECEIPT_AUDIT_PENDING",
  /** 待财务审核 */
  FINANCE_AUDIT_PENDING = "FINANCE_AUDIT_PENDING",
  /** 已审核 */
  AUDITED = "AUDITED",
  /** 已完成 */
  FINISHED = "FINISHED",
  /** 已作废 */
  CANCELLED = "CANCELLED",
  /** 待提交 */
  SUBMIT_PENDING = "SUBMIT_PENDING",
  /** 待上级审核 */
  SUPERIOR_AUDIT_PENDING = "SUPERIOR_AUDIT_PENDING",
  /** 待调出审核 */
  ALLOTMENT_AUDIT_PENDING = "ALLOTMENT_AUDIT_PENDING",
}

/** 订单来源 */
export enum OrderSource {
  /** PC/Web */
  WEB = "WEB",
  /** APP管理端 */
  APP = "APP",
  /** 微信/小程序 */
  WECHAT = "WECHAT",
  /** POS端 */
  POS = "POS",
}

export type OrderState = {
  /** 订单id */
  id?: number;
  /** 订单code */
  orderCode?: number;

  /** 买方 */
  buyer?: IOrganization;
  /** 卖方 */
  seller?: IOrganization;
  /** 商品 */
  products?: ProductItem[];
  /** 配送相关 */
  delivery?: IOrderDelivery;

  /** 优惠券id */
  couponId: null | number;
  /** 优惠券金额 */
  couponAmount: number;
  /** 本次订单使用的积分数量 */
  point: number;
  /** 积分抵扣金额 */
  pointAmount: number;
  /** 是否自定义运费 */
  customFreight: boolean;
  /** 运费 */
  totalFreight: number;

  /** 订单最后结算金额：结算总额(折后总额-整单优惠金额-优惠券金额-积分-返利+运费) */
  orderTotalAmount: number;
  /** 整单优惠金额(这个涵括了优惠券和积分的金额） */
  orderDiscountAmount: number;
  /** 商品所有优惠总额（除了优惠券和积分优惠之外）包含赠品金额 */
  productDiscountAmount: number;
  /** 商品小计之和（小计是会算促销的，不会算优惠券分摊） */
  productTotalAmount: number;

  /** 备注 */
  remark: IOrderRemark[];
  /** 附件 */
  orderAttachments: IOrderAttachment[];
  /** 订单状态 */
  orderStatus: OrderStatus;
  /** 订单来源 */
  orderSource: OrderSource;

  // TODO: MVP暂不涉及
  // 元数据

  // TODO: 订单详情
  // 支付状态、创建时间、

  // TODO: 扩充字段，适应代下单等
  // 业务员
};

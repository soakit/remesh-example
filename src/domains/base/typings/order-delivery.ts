import { DeliveryMethod } from "@ircloud/types";

/** 收货地址 */
export interface IAddress {
  /** 拼装好的地址，包含省市区 */
  address: string;
  /** 城市ID */
  cityId: number;
  /** 城市名字 */
  cityName: string;
  /** 默认收货地址标志 */
  defaultFlag: boolean;
  /** 详细地址 */
  details: string;
  /** 区ID */
  districtId: number;
  /** 区名字 */
  districtName: string;
  /** id */
  id: number;
  /** 备注 */
  memo: string;
  /** 名字 */
  name: string;
  /** 电话号码 */
  phoneNum: string;
  /** 省份ID */
  provinceId: number;
  /** 省份名字 */
  provinceName: string;
}

/** 交货方式 */
export enum DeliveryWay {
  /** 自提 */
  PICK_UP = "PICK_UP",
  /** 发货 */
  DELIVERY = "DELIVERY",
}

/** 运费计价方式 */
export enum FreightPricingWay {
  /** 下单时确定 */
  CONFIRMED_AT_CREATE_ORDER = "CONFIRMED_AT_CREATE_ORDER",
  /** 发货时确定 */
  CONFIRMED_AT_DELIVERY = "CONFIRMED_AT_DELIVERY",
}

/** 配送方式 */
export type IOrderDeliveryMethod = DeliveryMethod;

/** 订单配送 */
export interface IOrderDelivery {
  /** 配送方式 */
  method?: IOrderDeliveryMethod;
  /** 配送地址 */
  address?: IAddress;
  /** 交货时间 */
  date?: number;
  /** 发货仓库 */
  warehouseId?: number;
}

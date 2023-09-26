/** 订单备注 */
export interface IOrderRemark {
  /** 创建人 */
  creator?: string;
  /** 备注信息 */
  content: string;
  /** 备注时间 */
  createTime?: number;
  /** 备注ID */
  id?: string | number | null;
  /** 更新时间 */
  updateTime?: number;
  /** 是否为草稿 */
  draft?: boolean;
}

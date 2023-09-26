/** 经营方式 */
export enum EBusinessModelType {
  /** 默认 */
  DEFAULT = 0,
  /** 直营 */
  DIRECT_SALES = 10,
  /** 购销 */
  PURCHASE_SALES = 20,
}

/** 机构类型 */
export enum EOrgType {
  /** 供应商品 */
  SUPPLIER = "SUPPLIER",
  /** 总部 */
  HEADQUARTER = "HEADQUARTER",
  /** 分公司 */
  BRANCH = "BRANCH",
  /** 门店 */
  STORE = "STORE",
  /** 客户 */
  CUSTOMER = "CUSTOMER",
  /** ?? */
  VOID = "VOID",
}

/** 机构编码 */
export enum HierarchyCode {
  /** 总部 */
  HEADQUARTERS = "HEADQUARTERS",
  /** 分公司 */
  BRANCH = "BRANCH",
  /** 门店 */
  STORE = "STORE",
  /** 客户 */
  CUSTOMER = "CUSTOMER",
}

/** 机构 */
export interface IOrganization {
  /** 机构经营模式 */
  businessModelType?: EBusinessModelType;
  /** 机构经营模式名称 */
  businessModelTypeName?: string;
  /** Chain ID */
  chainId?: string;
  /** 编码 */
  code?: string;
  /** 联系人名称 */
  contactName?: string;
  /** 联系人电话 */
  contactPhone?: string;
  /** 客户分类ID */
  customerCategoryId?: number;
  /** 客户分类名称 */
  customerCategoryName?: string;
  /** 机构层级编码 */
  hierarchyCode: EOrgType;
  /** ID */
  id: number;
  /** 名称 */
  name: string;
  /** 机构ID */
  orgId: number;
  /** 上游机构ID */
  parentId: number;
  /* 所属机构名 */
  parentName: string;
  /** 业务员名字 */
  salesName?: string;
  /* 机构账号 */
  userName?: string;
}

/** 订单附件上传类型 */
export interface IUploadAttachment {
  /** 文件名 */
  fileName: string;
  /** 文件类型 */
  fileType: string;
  /** 文件路径 */
  fileUrl: string;
  /** 文件大小 */
  fileSize: number;
}

/**
 * 订单附件
 */
export interface IOrderAttachment extends IUploadAttachment {
  createId?: string | number;
  /** 上传者 */
  createName?: string;
  /** 创建时间 */
  createTime?: number;
  /** 原始文件名 */
  fileOriginalName?: string;
  /** 文件ID */
  id?: number | string;
  /** 最后修改时间  */
  modifyTime?: number;
  /** 订单编号  */
  orderCode?: string;
  /** 文件状态  */
  fileStatus?: number;
  /** 暂时的数据 */
  isTemporary?: boolean;
  /** 文件 MimeType */
  fileMimeType?: string | undefined;
}

export interface IOptions {
  value: string | number;
  label: string;
  children?: IOptions[];
}
export interface IResponse {
  code: number;
  msg: string;
  data: any;
  map: any;
}

export interface IFormData {
  articleName: string; //物品名称
  articleDescription: string; //物品描述
  articleAddress: IOptions[]; //物品位置
  //详细地址
  articleAddressDetail: string;
  // 物品类别
  articleCategory: number[];
  articlePrice: number; //价格
  userIndex: any; //用户id
}

interface IItemObject {
  slug: string;
  origin?: string;
  data?: any;
}

interface IErrorObject extends IItemObject {
  statusCode?: number;
  message?: string;
  payload?: any;
}

export interface IDefaultSliceState {
  loading: IItemObject[] | [];
  success: IItemObject[] | [];
  errors: IErrorObject[] | [];
}

import { PaginationRecordResponse } from "./pagination.interface";
import { RecordInterface } from "./record.interface";

export interface DataInterfaceState{
  recordList:PaginationRecordResponse;
  pagination:Pagination;
  record?:RecordInterface;
}

export interface Pagination{
  page:number;
  size:number;
}

export const DATA_INITIAL_STATE:DataInterfaceState={
  recordList:{
    items:[],
    pageInfo:{
      hasNext:false,
      hasPrevious:false,
      totalCount:0
    }
  },
  pagination:{
    page:0,
    size:20
  }
}

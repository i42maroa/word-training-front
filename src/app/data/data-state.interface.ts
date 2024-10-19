import { PaginationRecordResponse } from "./pagination.interface";
import { RecordInterface } from "./record.interface";

export interface DataInterfaceState{
  recordList:PaginationRecordResponse;
  record?:RecordInterface;
}

export const DATA_INITIAL_STATE:DataInterfaceState={
  recordList:{
    items:[],
    pageInfo:{
      hasNext:false,
      hasPrevious:false,
      totalCount:0
    }
  }
}

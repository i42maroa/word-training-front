import { PaginationRecordResponse } from "./pagination.interface";

export interface DataInterfaceState{
  recordList:PaginationRecordResponse;
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

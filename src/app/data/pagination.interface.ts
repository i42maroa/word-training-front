import { RecordInterface } from "./record.interface";

export interface PaginationRecordResponse{
  items:RecordInterface[];
  pageInfo:Pageable;
}

export interface Pageable{
  hasNext:boolean;
  hasPrevious:boolean;
  totalCount:number;
}

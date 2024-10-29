import { createAction, props } from "@ngrx/store";
import { PaginationRecordResponse } from "../../data/pagination.interface";
import { RecordInterface } from "../../data/record.interface";

export const loadRecordListData =  createAction('[Data] load record data.', props<{ recordList:PaginationRecordResponse}>());

export const checkIsRecordPrecharged =  createAction('[Data] checking record detail.', props<{ recordId:string}>());
export const loadRecordDetail =  createAction('[Data] load record detail.', props<{ record:RecordInterface}>());


export const changePaginationPage = createAction('[Data] changing pagination page.', props<{ page:number}>());

import { createAction, props } from "@ngrx/store";
import { PaginationRecordResponse } from "../../data/pagination.interface";
import {  RecordInterface } from "../../data/record.interface";
import { FiltersStoraged } from "../../data/filters";

export const loadRecordListData =  createAction('[Data] load record data.', props<{ recordList:PaginationRecordResponse}>());
export const addRecordListPaginatedData =  createAction('[Data] addRecordListPaginated.', props<{ recordList:PaginationRecordResponse}>());


export const changeFilters =  createAction('[Data] change filters.', props<{ filters:FiltersStoraged}>());

export const checkIsRecordPrecharged =  createAction('[Data] checking record is loaded.', props<{ recordId:string}>());
export const loadRecordDetail =  createAction('[Data] record detail loaded.', props<{ record:RecordInterface}>());


export const changePaginationPage = createAction('[Data] changing pagination page.', props<{ page:number}>());

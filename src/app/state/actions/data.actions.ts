import { createAction, props } from "@ngrx/store";
import { PaginationRecordResponse } from "../../data/pagination.interface";

export const loadRecordListData =  createAction('[Data] load record data.', props<{ recordList:PaginationRecordResponse}>());

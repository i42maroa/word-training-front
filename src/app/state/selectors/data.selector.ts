import { createFeatureSelector, createSelector } from "@ngrx/store";
import { DataInterfaceState } from "../../data/data-state.interface";

export const selectDataFeature = createFeatureSelector<DataInterfaceState>(`dataInfo`);


export const selectRecordList = createSelector(
  selectDataFeature,
  (state:DataInterfaceState) => state.recordList
)

export const selectRecordDetail = createSelector(
  selectDataFeature,
  (state:DataInterfaceState) => state.record
)

export const selectPageInfo = createSelector(
  selectDataFeature,
  (state:DataInterfaceState) => state.recordList.pageInfo
)

export const selectPagination = createSelector(
  selectDataFeature,
  (state:DataInterfaceState) => state.pagination
)

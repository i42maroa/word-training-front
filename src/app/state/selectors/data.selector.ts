import { createFeatureSelector, createSelector } from "@ngrx/store";
import { DataInterfaceState } from "../../data/data-state.interface";

export const selectDataFeature = createFeatureSelector<DataInterfaceState>(`dataInfo`);

export const selectData = createSelector(
  selectDataFeature,
  (state:DataInterfaceState) => state
)

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

export const selectFilters = createSelector(
  selectDataFeature,
  (state:DataInterfaceState) => state.filters
)


import { createFeatureSelector, createSelector } from "@ngrx/store";
import { loadingInterfaceState } from "../../data/loading.interface";

export const selectDataFeature = createFeatureSelector<loadingInterfaceState>(`loading`);

export const isLoading = createSelector(
  selectDataFeature,
  (state:loadingInterfaceState) => state.isLoading
)

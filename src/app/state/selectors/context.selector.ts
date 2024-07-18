import { createFeatureSelector, createSelector } from "@ngrx/store";
import { InterfaceState } from "../../data/modal.interface";

export const selectWordsFeature = createFeatureSelector<InterfaceState>(`interface`);

export const selectShowModal = createSelector(
  selectWordsFeature,
  (state:InterfaceState) => state.modal.show
)

export const selecTitleModal = createSelector(
  selectWordsFeature,
  (state:InterfaceState) => state.modal.title
)

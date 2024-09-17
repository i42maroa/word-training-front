import { createFeatureSelector, createSelector } from "@ngrx/store";
import { InterfaceState } from "../../data/modal.interface";

export const selectWordsFeature = createFeatureSelector<InterfaceState>(`interface`);

export const selectShowModal = createSelector(
  selectWordsFeature,
  (state:InterfaceState) => state.modal.show
)

export const selectShowButtons = createSelector(
  selectWordsFeature,
  (state:InterfaceState) => state.buttons.show
)

export const selectTypeButtons = createSelector(
  selectWordsFeature,
  (state:InterfaceState) => state.buttons.buttonType
)

export const selectTypeModal = createSelector(
  selectWordsFeature,
  (state:InterfaceState) => state.modal.type
)

export const selectModal = createSelector(
  selectWordsFeature,
  (state:InterfaceState) => state.modal
)

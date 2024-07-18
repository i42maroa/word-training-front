import { ActionReducerMap } from "@ngrx/store";
import { interfaceReducer } from "./reducers/context.reducer";
import { InterfaceState } from "../data/modal.interface";

export interface ContextState {
  interface: InterfaceState
}

export const ROOT_REDUCERS: ActionReducerMap<ContextState> = {
  interface: interfaceReducer
}

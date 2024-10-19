import { ActionReducerMap } from "@ngrx/store";
import { interfaceReducer } from "./reducers/context.reducer";
import { InterfaceState } from "../data/modal.interface";
import { DataInterfaceState } from "../data/data-state.interface";
import { dataReducer } from "./reducers/data.reducer";

export interface ContextState {
  interface: InterfaceState;
  dataInfo: DataInterfaceState;
}

export const ROOT_REDUCERS: ActionReducerMap<ContextState> = {
  interface: interfaceReducer,
  dataInfo: dataReducer
}

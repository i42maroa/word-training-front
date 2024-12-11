import { interfaceReducer } from "./reducers/context.reducer";
import { InterfaceState } from "../data/modal.interface";
import { DataInterfaceState } from "../data/data-state.interface";
import { dataReducer } from "./reducers/data.reducer";
import { ActionReducerMap } from "@ngrx/store";
import { loadingInterfaceState } from "../data/loading.interface";
import { loadingReducer } from "./reducers/loading.reducer";

export interface ContextState {
  interface: InterfaceState;
  dataInfo: DataInterfaceState;
  loading: loadingInterfaceState;
}

export const ROOT_REDUCERS: ActionReducerMap<ContextState> = {
  interface: interfaceReducer,
  dataInfo: dataReducer,
  loading: loadingReducer
}

import { createReducer, on } from "@ngrx/store";

import * as actions from "../actions/data.actions";
import { DATA_INITIAL_STATE, DataInterfaceState } from "../../data/data-state.interface";


export const initialState:DataInterfaceState = DATA_INITIAL_STATE;

export const dataReducer = createReducer(
  initialState,
  on(actions.loadRecordListData, (state, { recordList}) => {
    return {...state, recordList}
  })
)

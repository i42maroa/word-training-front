import { createReducer, on } from "@ngrx/store";

import * as actions from "../actions/data.actions";
import * as actionsContext from "../actions/context.actions";
import { DATA_INITIAL_STATE, DataInterfaceState } from "../../data/data-state.interface";
import { INITIAL_FILTERS } from "../../data/filters";


export const initialState:DataInterfaceState = DATA_INITIAL_STATE;

export const dataReducer = createReducer(
  initialState,
  on(actions.loadRecordListData, (state, { recordList}) => {
    return {...state, recordList}
  }),
  on(actions.loadRecordDetail, (state, { record }) => {
    return {...state, record}
  }),
  on(actions.changePaginationPage, (state, { page }) => {
    return {...state, pagination:{...state.pagination, page:page }}
  }),
  on(actions.changeFilters, (state, { filters }) => {
    return {...state, filters, pagination:{...state.pagination, page:0,}}
  }),

  on(actionsContext.saveNewRecordSuccessfull, (state,) => {
    return {...state, filters:INITIAL_FILTERS, pagination:{...state.pagination, page:0}}
  }),
  on(actionsContext.removeRecordSuccessfull, (state,) => {
    return {...state, filters:INITIAL_FILTERS, pagination:{...state.pagination, page:0}}
  }),
)

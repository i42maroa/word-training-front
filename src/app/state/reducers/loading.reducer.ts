import { createReducer, on } from "@ngrx/store";

import * as actionsContext from "../actions/context.actions";
import { LOADING_INITIAL_STATE, loadingInterfaceState } from "../../data/loading.interface";


export const initialState:loadingInterfaceState = LOADING_INITIAL_STATE;

export const loadingReducer = createReducer(
  initialState,
  on(actionsContext.errorInApi, (state,) => {
    return {...state, isLoading:false, isLoadingRecords:false}
  }),
  on(actionsContext.getRecordsList, (state,) => {
    return {...state, isLoadingRecords:true, isLoading:false}
  }),
  on(actionsContext.loadRecordsListSuccessfully, (state,) => {
    return {...state, isLoadingRecords:false}
  }),
  on(actionsContext.getRecordDetail, (state,) => {
    return {...state, isLoading:true}
  }),
  on(actionsContext.getRecordDetailSuccessfull, (state,) => {
    return {...state, isLoading:false}
  }),
  on(actionsContext.saveNewRecord, (state,) => {
    return {...state, isLoading:true}
  }),
  on(actionsContext.saveNewRecordSuccessfull, (state,) => {
    return {...state, isLoading:false}
  }),
  on(actionsContext.modifyRecord, (state,) => {
    return {...state, isLoading:true}
  }),
  on(actionsContext.modifyRecordSuccessfull, (state,) => {
    return {...state, isLoading:false}
  }),
  on(actionsContext.saveNewDefinition, (state,) => {
    return {...state, isLoading:true}
  }),
  on(actionsContext.saveNewDefinitionSuccessfull, (state,) => {
    return {...state, isLoading:false}
  }),
  on(actionsContext.saveNewExample, (state,) => {
    return {...state, isLoading:true}
  }),
  on(actionsContext.saveNewExampleSuccessfull, (state,) => {
    return {...state, isLoading:false}
  }),
  on(actionsContext.removeRecord, (state,) => {
    return {...state, isLoading:true}
  }),
  on(actionsContext.removeRecordSuccessfull, (state,) => {
    return {...state, isLoading:false}
  }),
)

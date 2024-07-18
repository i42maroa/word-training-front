import { createReducer, on } from "@ngrx/store";
import { INTERFACE_INITIAL_STATE, InterfaceState } from "../../data/modal.interface";
import * as actions from "../actions/context.actions";

export const initialState:InterfaceState = INTERFACE_INITIAL_STATE;

export const interfaceReducer = createReducer(
  initialState,
  on(actions.showModal, (state, { title }) => {
    return {...state, showAddButton:false, modal:{...state.modal, title, show:true}}
  }),
  on(actions.closeModal, (state) => {
    return {...state, showAddButton:true, modal:{...state.modal, show:false}}
  })
)

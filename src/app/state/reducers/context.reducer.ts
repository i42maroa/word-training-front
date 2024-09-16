import { createReducer, on } from "@ngrx/store";
import { INTERFACE_INITIAL_STATE, InterfaceState } from "../../data/modal.interface";
import * as actions from "../actions/context.actions";

export const initialState:InterfaceState = INTERFACE_INITIAL_STATE;

export const interfaceReducer = createReducer(
  initialState,
  on(actions.showModal, (state, { modalType }) => {
    return {...state, buttons:{...state.buttons, show:false},
    modal:{...state.modal, show:true, type:modalType}}
  }),
  on(actions.showModal, (state, { modalType, modalData }) => {
    return {...state, buttons:{...state.buttons, show:false},
    modal:{show:true, type:modalType, data:modalData}}
  }),
  on(actions.closeModal, (state) => {
    return {...state, buttons:{...state.buttons, show:true},
      modal:{...state.modal, show:false}}
  })
)

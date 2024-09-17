import { createReducer, on } from "@ngrx/store";
import { ButtonType, INTERFACE_INITIAL_STATE, InterfaceState } from "../../data/modal.interface";
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
    modal:{show:true, type:modalType, data:modalData??state.modal.data
    }}
  }),
  on(actions.closeModal, (state) => {
    return {...state, buttons:{...state.buttons, show:true},
      modal:{...state.modal, show:false}}
  }),
  on(actions.recordList, (state) => {
    const type = 'add' as ButtonType;
    return {...state, buttons:{...state.buttons, buttonType:type}, modal:{...state.modal}}
  }),
  on(actions.recordDetail, (state, {recordId}) => {
    const type = 'add-definition' as ButtonType;
    return {...state, buttons:{...state.buttons, buttonType:type}, modal:{...state.modal, data:{recordId:recordId}}}
  })
)

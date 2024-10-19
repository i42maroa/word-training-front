import { createReducer, on } from "@ngrx/store";
import { ButtonType, INTERFACE_INITIAL_STATE, InterfaceState, PageUbication } from "../../data/modal.interface";
import * as actions from "../actions/context.actions";

export const initialState:InterfaceState = INTERFACE_INITIAL_STATE;

export const interfaceReducer = createReducer(
  initialState,
  on(actions.showModal, (state, { modalType, modalData }) => {
    return {...state, buttons:{...state.buttons, show:false}, menu:{show:false},
    modal:{show:true, type:modalType, data:modalData??state.modal.data
    }}
  }),
  on(actions.closeModal, (state) => {
    return {...state, buttons:{...state.buttons, show:true},
      modal:{...state.modal, show:false}}
  }),
  on(actions.loadRecordList, (state) => {
    const type = 'add' as ButtonType;
    const page = 'root' as PageUbication;
    return {...state, page, menu:{show:false}, buttons:{...state.buttons, show:true, buttonType:type}, modal:{...state.modal}, loading:true}
  }),
  on(actions.recordListLoadedSuccessfully, (state) => {
    return {...state, menu:{show:false}, buttons:{...state.buttons}, modal:{...state.modal}, loading:false}
  }),
  on(actions.getRecordDetail, (state, {recordId}) => {
    const type = 'add-definition' as ButtonType;
    const page = 'detail' as PageUbication;
    return {...state, menu:{show:false}, page, buttons:{...state.buttons, show:true, buttonType:type}, modal:{...state.modal, data:{recordId:recordId}}}
  }),
  on(actions.showMenu, (state) => {
    return {...state, menu:{show:true}, buttons:{...state.buttons, show:false},  modal:{...state.modal, show:false}}
  }),
  on(actions.closeMenu, (state) => {
    return {...state, menu:{show:false}, buttons:{...state.buttons, show:true}}
  }),
)

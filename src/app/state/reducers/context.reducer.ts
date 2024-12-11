import { createReducer, on } from "@ngrx/store";
import { ButtonType, INTERFACE_INITIAL_STATE, InterfaceState, MenuType } from "../../data/modal.interface";
import * as actions from "../actions/context.actions";
import * as actionNavigations from "../actions/navigation.actions";

export const initialState:InterfaceState = INTERFACE_INITIAL_STATE;


export const interfaceReducer = createReducer(
  initialState,
  on(actions.showModal, (state, { modalType, modalData }) => {
    return {...state, buttons:{...state.buttons, show:false}, menu:{...state.menu, show:false},
    modal:{show:true, type:modalType, data:modalData??state.modal.data
    }}
  }),
  on(actions.closeModal, (state) => {
    return {...state, buttons:{...state.buttons, show:true}, modal:{...state.modal, show:false}}
  }),

  on(actions.showMenu, (state) => {
    return {...state, menu:{...state.menu, show:true}, buttons:{...state.buttons, show:false},
     modal:{...state.modal, show:false}}
  }),
  on(actions.closeMenu, (state) => {
    return {...state, menu:{...state.menu, show:false}, buttons:{...state.buttons, show:true}}
  }),

  on(actions.removeRecordSuccessfull, (state) => {
    return {...state, menu:{...state.menu, show:false}, buttons:{...state.buttons, show:true}, modal:{...state.modal, show:false}}
  }),

  on(actionNavigations.landingPageTakeOff, (state) => {
    const menuType = 'root' as MenuType;
    const buttonType = 'add' as ButtonType;
    return {...state, buttons:{...state.buttons, buttonType, show:true},
    menu:{type: menuType, show:false},
    }
  }),

  on(actionNavigations.detailPageTakeOff, (state) => {
    const menuType = 'detail' as MenuType;
    const buttonType = 'add-definition' as ButtonType;
    return {...state, buttons:{...state.buttons,buttonType, show:true}, menu:{type: menuType, show:false}
    }
  })
)



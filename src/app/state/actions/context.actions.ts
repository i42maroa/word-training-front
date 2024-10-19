import { createAction, props } from "@ngrx/store";
import { ButtonType, ModalDataState, ModalType } from "../../data/modal.interface";

export const closeModal = createAction('[Modal record] close modal');
export const showModal = createAction('[Modal record] show modal', props<{ modalType:ModalType, modalData?:ModalDataState }>());

export const showMenu = createAction('[Menu] show');
export const closeMenu = createAction('[Menu] close');

export const changeButtonType = createAction('[Record list] in record list', props<{ buttonType:ButtonType}>());

export const loadRecordList =  createAction('[Record list] try load record List');
export const recordListLoadedSuccessfully =  createAction('[Record list] record list loaded successfully');
export const recordListError =  createAction('[Record list] error to load Record list');

export const recordDetail =  createAction('[Record detail] record loaded', props<{ recordId:string}>());

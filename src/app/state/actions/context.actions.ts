import { createAction, props } from "@ngrx/store";
import { ButtonType, ModalDataState, ModalType } from "../../data/modal.interface";
export const closeModal = createAction('[Modal record] close modal');
export const showModal = createAction('[Modal record] show modal', props<{ modalType:ModalType, modalData?:ModalDataState }>());

export const changeButtonType = createAction('[Record list] in record list', props<{ buttonType:ButtonType}>());

export const recordList =  createAction('[Record list] record list loaded');
export const recordDetail =  createAction('[Record detail] record loaded', props<{ recordId:string}>());

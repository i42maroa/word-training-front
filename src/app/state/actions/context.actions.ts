import { createAction, props } from "@ngrx/store";
import { ModalDataState, ModalType } from "../../data/modal.interface";

export const closeModal = createAction('[Modal record] close modal');
export const showModal = createAction('[Modal record] show modal', props<{ modalType:ModalType, modalData?:ModalDataState }>());

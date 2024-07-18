import { createAction, props } from "@ngrx/store";

export const closeModal = createAction('[Modal record] close modal');
export const showModal = createAction('[Modal record] show modal', props<{ title:string }>());

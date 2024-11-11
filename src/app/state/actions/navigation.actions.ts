import { createAction, props } from "@ngrx/store";

export const landingPageTakeOff =  createAction('[Navigation] landing page takeoff');
export const detailPageTakeOff =  createAction('[Navigation] detail page takeoff', props<{ recordId:string}>());

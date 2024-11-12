import { createAction, props } from "@ngrx/store";
import { RecordInterface } from "../../data/record.interface";

export const landingPageTakeOff =  createAction('[Navigation] landing page takeoff');
export const detailPageTakeOff =  createAction('[Navigation] detail page takeoff', props<{ recordId:string}>());


export const goToDetail =  createAction('[Navigation] go to record detail', props<{ record:RecordInterface}>());

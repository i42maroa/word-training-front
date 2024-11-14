import { createAction, props } from "@ngrx/store";
import { ModalDataState, ModalType } from "../../data/modal.interface";
import { DefinitionNewRequest, ExampleNewRequest, RequestNewRecord } from "../../data/api.interface";


export const showModal = createAction('[Context] show modal', props<{ modalType:ModalType, modalData?:ModalDataState }>());
export const closeModal = createAction('[Context] close modal');

export const showMenu = createAction('[Context] show menu');
export const closeMenu = createAction('[Context] close menu');


export const getRecordsList =  createAction('[Context] try load record List');
export const loadRecordsListSuccessfully =  createAction('[Context] record list loaded successfully');
export const getRecordsListPaginated =  createAction('[Context] try load record List pagination');
export const loadRecordListPaginatedSuccessfully =  createAction('[Context] record list paginated added successfully');

export const getRecordDetail =  createAction('[Context] try load record detail', props<{ recordId:string}>());
export const getRecordDetailSuccessfull =  createAction('[Context] record loaded successfull');


export const saveNewRecord =  createAction('[Context] try create new record', props<{ recordRequest:RequestNewRecord}>());
export const saveNewRecordSuccessfull =  createAction('[Context] new record created successfully');

export const modifyRecord =  createAction('[Context] try modify record ', props<{recordId:string, recordRequest:RequestNewRecord}>());
export const modifyRecordSuccessfull =  createAction('[Context] modify record successfully');

export const saveNewDefinition =  createAction('[Context] try add new definition', props<{ recordId:string, definitionRequest:DefinitionNewRequest}>());
export const saveNewDefinitionSuccessfull =  createAction('[Context] new definition added successfully');

export const saveNewExample =  createAction('[Context] try add new example', props<{ recordId:string, definitionId:string, exampleRequest:ExampleNewRequest}>());
export const saveNewExampleSuccessfull =  createAction('[Context] new example added successfully');


export const removeRecord =  createAction('[Context] try remove record', props<{ recordId:string}>());
export const removeRecordSuccessfull =  createAction('[Context] record removed successfully');



export const errorInApi =  createAction('[Context] error appear');

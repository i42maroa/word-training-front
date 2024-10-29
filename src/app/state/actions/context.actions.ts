import { createAction, props } from "@ngrx/store";
import { ModalDataState, ModalType } from "../../data/modal.interface";
import { RecordInterface } from "../../data/record.interface";
import { DefinitionNewRequest, ExampleNewRequest, RequestNewRecord } from "../../data/api.interface";

export const closeModal = createAction('[Modal record] close modal');
export const showModal = createAction('[Modal record] show modal', props<{ modalType:ModalType, modalData?:ModalDataState }>());

export const showMenu = createAction('[Menu] show');
export const closeMenu = createAction('[Menu] close');

// export const changeButtonType = createAction('[Record list] in record list', props<{ buttonType:ButtonType}>());

export const getRecordsList =  createAction('[Record list] try load record List');
export const loadRecordsListSuccessfully =  createAction('[Record list] record list loaded successfully');
// export const recordListError =  createAction('[Record list] error to load Record list');

export const getRecordDetail =  createAction('[Record detail] record loaded', props<{ recordId:string}>());
export const loadRecordDetailSuccessfully =  createAction('[Record detail] record loaded', props<{ record:RecordInterface}>());


export const saveNewRecord =  createAction('[Record new] new record create', props<{ recordRequest:RequestNewRecord}>());
export const saveNewRecordSuccessfull =  createAction('[Record new] new record create successfull');

export const modifyRecord =  createAction('[Record modify] modify record ', props<{recordId:string, recordRequest:RequestNewRecord}>());
export const modifyRecordSuccessfull =  createAction('[Record modify] modify record successfull');

export const saveNewDefinition =  createAction('[Definition new] new definition create', props<{ recordId:string, definitionRequest:DefinitionNewRequest}>());
export const saveNewDefinitionSuccessfull =  createAction('[Definition new] new definition create successfull');

export const saveNewExample =  createAction('[Record new] new example create', props<{ recordId:string, definitionId:string, exampleRequest:ExampleNewRequest}>());
export const saveNewExampleSuccessfull =  createAction('[Record new] new example create successfull');


export const removeRecord =  createAction('[Record remove] remove record', props<{ recordId:string}>());
export const removeRecordSuccessfull =  createAction('[Record remove] record removed successfully');



export const rootPageTakeOff =  createAction('[Navigate] root page takeoff');
export const detailPageTakeOff =  createAction('[Record list] detail page takeoff');

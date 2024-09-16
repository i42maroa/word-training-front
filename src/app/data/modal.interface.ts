
export interface InterfaceState{
  buttons:ButtonsState,
  modal:ModalState
}

export interface ModalDataState {
  recordId:string;
  definitionId?:string | undefined;
  exampleId?:string | undefined;
}

export interface ModalState{
  show:boolean;
  type: ModalType;
  data?: ModalDataState;
}

export interface ButtonsState{
  show:boolean;
  type:ButtonType
}


export type ModalType = RecordOperation | DefinitionOperation | ExampleOperation;

export type ButtonType = 'add' ;
export type RecordOperation = 'new-record' | 'modify-record' | 'delete-record';
export type DefinitionOperation = 'new-definition' | 'modify-definition' | 'delete-definition';
export type ExampleOperation = 'new-example' | 'modify-example' | 'delete-example';

export const INTERFACE_INITIAL_STATE:InterfaceState ={
  buttons:{
    show:true,
    type:'add'
  },
  modal:{
    show:false,
    type:'new-record',
    data: {
        recordId:"",
        definitionId: undefined,
       exampleId: undefined
    }
  }
}

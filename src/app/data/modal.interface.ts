
export interface InterfaceState{
  buttons:ButtonsState,
  modal:ModalState,
  menu:MenuState
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
  buttonType:ButtonType;
  show:boolean;
}

export interface MenuState{
  show:boolean;
  type: MenuType
}

export type ModalType = RecordOperation | DefinitionOperation | ExampleOperation;

export type ButtonType = 'add' | 'add-definition' ;
export type RecordOperation = 'new-record' | 'modify-record' | 'delete-record';
export type DefinitionOperation = 'new-definition' | 'modify-definition' | 'delete-definition';
export type ExampleOperation = 'new-example' | 'modify-example' | 'delete-example';

export type MenuType = 'root' | 'detail' ;

export const INTERFACE_INITIAL_STATE:InterfaceState ={
  buttons:{
    show:true,
    buttonType:'add'
  },
  modal:{
    show:false,
    type:'new-record',
    data: {
        recordId:"",
        definitionId: undefined,
       exampleId: undefined
    }
  },
  menu:{
    show:false,
    type:'root'
  }
}


export interface InterfaceState{
  buttons:ButtonsState,
  modal:ModalState
}

export interface ModalState{
  title:string,
  show:boolean,
  type: ModalType
}

export interface ButtonsState{
  show:boolean;
  type:ButtonType
}


export type ModalType = RecordOperation ;

export type ButtonType = 'add' ;
export type RecordOperation = 'new-record' | 'modify-record' | 'delete-record';

export const INTERFACE_INITIAL_STATE:InterfaceState ={
  buttons:{
    show:true,
    type:'add'
  },
  modal:{
    title:"Nuevo registro",
    show:false,
    type:'new-record'
  }
}

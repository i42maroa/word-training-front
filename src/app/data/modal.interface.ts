
export interface InterfaceState{
  showAddButton:boolean,
  modal:ModalState
}

export interface ModalState{
  title:string,
  show:boolean,
  type: ModalType
}


export type ModalType = RecordOperation ;

export type RecordOperation = 'new-record' | 'modify-record' | 'delete-record';

export const INTERFACE_INITIAL_STATE:InterfaceState ={
  showAddButton:false,
  modal:{
    title:"titulo",
    show:false,
    type:'new-record'
  }
}

export interface ToastInterface{
  message:string;
  type:ToastType;
  show:boolean;
}

export type ToastType = 'error' | 'success' | 'warn';

export const TOAST_EMPTY:ToastInterface = {
  message:'',
  type:'success',
  show:false
}

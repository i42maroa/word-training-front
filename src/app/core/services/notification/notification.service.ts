
import { Injectable } from '@angular/core';
import { BehaviorSubject,} from 'rxjs';
import { TOAST_EMPTY, ToastInterface, ToastType } from '../../../data/toast.interface';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  toast$ = new BehaviorSubject<ToastInterface>(TOAST_EMPTY);

  showSuccessfullyMessage(message: string, time = 3000): void {
    this.show(message, 'success', time);
  }

  showErrorMessage(message: string, time = 3000): void {
    this.show(message, 'error', time);
  }

  showWarnMessage(message: string, time = 3000): void {
    this.show(message, 'warn', time);
  }

  show(message:string, type:ToastType, time:number){

    this.toast$.next({ message, type, show:true })

    setTimeout(() => this.unshow(), time);
  }

  unshow(){
    this.toast$.next({...this.toast$.value, show:false})
  }
}

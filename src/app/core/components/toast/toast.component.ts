import { Component } from '@angular/core';
import { NotificationService } from '../../services/notification/notification.service';
import { Observable } from 'rxjs';
import { ToastInterface } from '../../../data/toast.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent {

  constructor(private readonly notification:NotificationService){}

  get toastData(): Observable<ToastInterface>{
    return this.notification.toast$.asObservable();
  }
}

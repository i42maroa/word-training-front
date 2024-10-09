import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModalComponent } from './core/components/modal/modal.component';
import { FloatButtonComponent } from './core/components/buttons/float-button/float-button.component';
import { HeaderComponent } from './core/components/header/header.component';
import { MenuComponent } from './core/components/menu/menu.component';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectMenuShow, selectShowModal } from './state/selectors/context.selector';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './core/components/toast/toast.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterOutlet, ModalComponent, FloatButtonComponent, MenuComponent, ToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'word-training-front';

  constructor(private readonly store:Store) {}

  get showMenu():Observable<boolean>{
    return this.store.select(selectMenuShow);
  }

  get showModal(): Observable<boolean>{
    return this.store.select(selectShowModal);
  }
}

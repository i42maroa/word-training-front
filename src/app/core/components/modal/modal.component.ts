import { Component } from '@angular/core';
import {  Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selecTitleModal, selectShowModal } from '../../../state/selectors/context.selector';
import { closeModal } from '../../../state/actions/context.actions';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

  showModal$: Observable<boolean>;
  titleModal$: Observable<string>;

  constructor(private readonly store:Store){
    this.showModal$ = this.store.select(selectShowModal);
    this.titleModal$ = this.store.select(selecTitleModal);
  }

  closeModal(){
    this.store.dispatch(closeModal());
  }
}

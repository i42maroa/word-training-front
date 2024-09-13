import { Component } from '@angular/core';
import {  Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selecTitleModal, selectShowModal } from '../../../state/selectors/context.selector';
import { AddModalComponent } from './templates/add/add.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, AddModalComponent],
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


}

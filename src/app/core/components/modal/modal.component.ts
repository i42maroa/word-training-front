import { Component } from '@angular/core';
import {  Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectShowModal, selectTypeModal } from '../../../state/selectors/context.selector';
import { AddModalComponent } from './templates/add/add.component';
import { ModalType } from '../../../data/modal.interface';
import { AddExampleComponent } from './templates/add-example/add-example.component';
import { AddDefinitionComponent } from './templates/add-definition/add-definition.component';
import { ModalTitlePipe } from '../../pipes/modal-title/modal-title.pipe';
import { ModifyRecordComponent } from './templates/modify-record/modify-record.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, AddModalComponent, AddExampleComponent, AddDefinitionComponent, ModalTitlePipe, ModifyRecordComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

  constructor(private readonly store:Store){}

  get showModal(): Observable<boolean>{
    return this.store.select(selectShowModal);
  }

  get typeModal(): Observable<ModalType>{
    return this.store.select(selectTypeModal);
  }

}

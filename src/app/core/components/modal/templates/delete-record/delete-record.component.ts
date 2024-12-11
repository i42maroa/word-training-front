import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { first, Observable } from 'rxjs';
import { selectModalDataRecordId } from '../../../../../state/selectors/context.selector';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormButtonContainerComponent } from '../../../form/form-button-container/form-button-container.component';
import { removeRecord } from '../../../../../state/actions/context.actions';

@Component({
  selector: 'app-delete-record-modal',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormButtonContainerComponent],
  templateUrl: './delete-record.component.html',
  styleUrl: './delete-record.component.css'
})
export class DeleteRecordComponent {
  formGroup:FormGroup =new FormGroup({})

  constructor(private readonly store:Store) {}

  recordId():Observable<string | undefined>{
    return this.store.select(selectModalDataRecordId);
  }

  sendForm(){
    const subscription = this.store.select(selectModalDataRecordId)
          .pipe(first())
          .subscribe(recordId => this.store.dispatch(removeRecord({recordId})));

    subscription.unsubscribe();
  }
}

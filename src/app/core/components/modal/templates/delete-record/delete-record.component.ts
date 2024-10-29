import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormContainerComponent } from '../../../form/form-container/form-container.component';
import { CommonModule } from '@angular/common';
import { map, Observable } from 'rxjs';
import { selectModal } from '../../../../../state/selectors/context.selector';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-delete-record-modal',
  standalone: true,
  imports: [FormContainerComponent, CommonModule],
  templateUrl: './delete-record.component.html',
  styleUrl: './delete-record.component.css'
})
export class DeleteRecordComponent {
  formGroup:FormGroup =new FormGroup({})

  constructor(private readonly store:Store) {}

  recordId():Observable<string | undefined>{
    return this.store.select(selectModal)
    .pipe(
      map((value) => value.data!.recordId)
    )
  }
}

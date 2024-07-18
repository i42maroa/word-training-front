import { Component } from '@angular/core';
import { EXAMPLE_RECORD, RecordInterface } from '../../data/record.interface';
import { DefinitionComponent } from '../../core/components/definition/definition.component';
import { Store } from '@ngrx/store';
import { showModal } from '../../state/actions/context.actions';

@Component({
  selector: 'app-record-detail-page',
  standalone: true,
  imports: [DefinitionComponent],
  templateUrl: './record-detail-page.component.html',
  styleUrl: './record-detail-page.component.css'
})
export class RecordDetailPageComponent {

  record:RecordInterface = EXAMPLE_RECORD;

  constructor(private readonly store:Store){
  }

  showModal(){
    this.store.dispatch(showModal({title:"Nueva palabra"}));
  }
}

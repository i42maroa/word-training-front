import { Component, Input } from '@angular/core';
import { RecordInterface } from '../../data/record.interface';
import { DefinitionComponent } from '../../core/components/definition/definition.component';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectRecordDetail } from '../../state/selectors/data.selector';
import { detailPageTakeOff } from '../../state/actions/navigation.actions';

@Component({
  selector: 'app-record-detail-page',
  standalone: true,
  imports: [DefinitionComponent, CommonModule],
  templateUrl: './record-detail-page.component.html',
  styleUrl: './record-detail-page.component.css'
})
export class RecordDetailPageComponent {

  @Input() set recordId(recordId: string) {
    if(recordId)
      this.store.dispatch(detailPageTakeOff({recordId}));
  }

  constructor(private readonly store:Store){}

  get record$(): Observable<RecordInterface| undefined>{
    return this.store.select(selectRecordDetail);
  }
}

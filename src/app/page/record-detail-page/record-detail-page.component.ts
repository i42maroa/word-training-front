import { Component, Input, OnDestroy } from '@angular/core';
import { RecordInterface } from '../../data/record.interface';
import { DefinitionComponent } from '../../core/components/definition/definition.component';
import { RecordService } from '../../core/services/record/record.service';
import { CommonModule } from '@angular/common';
import { BehaviorSubject,  Subscription } from 'rxjs';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { recordDetail, showModal } from '../../state/actions/context.actions';

@Component({
  selector: 'app-record-detail-page',
  standalone: true,
  imports: [RouterLink, DefinitionComponent, CommonModule],
  templateUrl: './record-detail-page.component.html',
  styleUrl: './record-detail-page.component.css'
})
export class RecordDetailPageComponent implements OnDestroy {

  record$ = new BehaviorSubject<RecordInterface|undefined>(undefined);
  subscription!: Subscription;

  @Input() set recordId(recordId: string) {
    this.store.dispatch(recordDetail({recordId}));
    this.subscription = this.recordService.getRecordDetail(recordId)
    .subscribe(record => this.record$.next(record))
  }

  constructor(private readonly recordService:RecordService, private readonly store:Store){}

  editRecord(recordId:string){
    this.store.dispatch(showModal({modalType:'modify-record', modalData:{recordId}}));
  }

  deleteRecord(recordId:string){
    this.store.dispatch(showModal({modalType:'delete-record', modalData:{recordId}}))
  }

  ngOnDestroy(): void {
   this.subscription.unsubscribe();
  }
}

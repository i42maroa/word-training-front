import { Component, Input } from '@angular/core';
import { EXAMPLE_RECORD, RecordInterface } from '../../data/record.interface';
import { DefinitionComponent } from '../../core/components/definition/definition.component';
import { RecordService } from '../../core/services/record/record.service';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-record-detail-page',
  standalone: true,
  imports: [RouterLink, DefinitionComponent, CommonModule],
  templateUrl: './record-detail-page.component.html',
  styleUrl: './record-detail-page.component.css'
})
export class RecordDetailPageComponent {

  record$ = new BehaviorSubject<RecordInterface|undefined>(undefined);

  @Input() set recordId(recordId: string) {
    this.recordService.getRecordDetail(recordId)
    .subscribe(record => this.record$.next(record))
  }

  constructor(private readonly recordService:RecordService){}

}

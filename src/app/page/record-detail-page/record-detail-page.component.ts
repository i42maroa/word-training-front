import { Component } from '@angular/core';
import { EXAMPLE_RECORD, RecordInterface } from '../../data/record.interface';
import { DefinitionComponent } from '../../core/components/definition/definition.component';

@Component({
  selector: 'app-record-detail-page',
  standalone: true,
  imports: [DefinitionComponent],
  templateUrl: './record-detail-page.component.html',
  styleUrl: './record-detail-page.component.css'
})
export class RecordDetailPageComponent {

  record:RecordInterface = EXAMPLE_RECORD;
}

import { Component, Input } from '@angular/core';
import { RecordInterface } from '../../../data/record.interface';
import { Store } from '@ngrx/store';
import { goToDetail } from '../../../state/actions/navigation.actions';
import { CommonModule } from '@angular/common';
import { DatesPipe } from '../../pipes/dates.pipe';

@Component({
  selector: 'app-record',
  standalone: true,
  imports: [CommonModule, DatesPipe],
  templateUrl: './record.component.html',
  styleUrl: './record.component.css'
})
export class RecordComponent {

  @Input() record !: RecordInterface;

  constructor(private readonly store:Store) {}

  toDetail(record:RecordInterface){
    this.store.dispatch(goToDetail({record}))
  }
}

import { Component, OnInit } from '@angular/core';
import { RecordService } from '../../core/services/record/record.service';
import { Observable } from 'rxjs';
import { RecordInterface } from '../../data/record.interface';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { recordList } from '../../state/actions/context.actions';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit{

  constructor(private readonly recordService:RecordService, private readonly store:Store){}

  get recordList():Observable<Map<string, RecordInterface>>{
    const filter = null;
    return this.recordService.getRecordsByFilters(filter);
  }

  ngOnInit(): void {
    this.store.dispatch(recordList())
  }
}

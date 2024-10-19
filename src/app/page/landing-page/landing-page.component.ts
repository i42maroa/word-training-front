import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadRecordList } from '../../state/actions/context.actions';
import { selectRecordList } from '../../state/selectors/data.selector';
import { PaginationRecordResponse } from '../../data/pagination.interface';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit{

  constructor(private readonly store:Store){}

  get recordList():Observable<PaginationRecordResponse>{
    return this.store.select(selectRecordList);
  }

  ngOnInit(): void {
    this.store.dispatch(loadRecordList())
  }
}

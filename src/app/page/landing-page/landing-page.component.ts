import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectRecordList } from '../../state/selectors/data.selector';
import { PaginationRecordResponse } from '../../data/pagination.interface';
import { PaginatorComponent } from '../../core/components/paginator/paginator.component';
import { landingPageTakeOff } from '../../state/actions/navigation.actions';
import { FiltersComponent } from '../../core/components/filters/filters.component';
import { isLoadingRecords } from '../../state/selectors/loading.selector';
import { LoaderComponent } from '../../core/components/loader/loader.component';
import { RecordComponent } from '../../core/components/record/record.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule,PaginatorComponent, FiltersComponent, LoaderComponent, RecordComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit{

  constructor(private readonly store:Store){}

  get recordList():Observable<PaginationRecordResponse>{
    return this.store.select(selectRecordList);
  }

  ngOnInit(): void {
    this.store.dispatch(landingPageTakeOff())
  }

  get isLoadingRecords():Observable<boolean>{
    return this.store.select(isLoadingRecords);
  }
}

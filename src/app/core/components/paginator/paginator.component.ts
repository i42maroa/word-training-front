import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { selectPageInfo, selectPagination } from '../../../state/selectors/data.selector';
import { Pageable } from '../../../data/pagination.interface';
import { CommonModule } from '@angular/common';
import { changePaginationPage } from '../../../state/actions/data.actions';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.css'
})
export class PaginatorComponent {

  page$ = new BehaviorSubject<number>(0);

  constructor(private readonly store:Store){
    this.store.select(selectPagination)
      .subscribe(pagination => this.page$.next(pagination.page))
  }

  get pageInfo():Observable<Pageable>{
    return this.store.select(selectPageInfo);
  }

  prevPage(){
    this.store.dispatch(changePaginationPage({page: this.page$.value-1}))
  }

  nextPage(){
    this.store.dispatch(changePaginationPage({page: this.page$.value+1}))
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { changeFilters } from '../../../state/actions/data.actions';
import { selectFilters } from '../../../state/selectors/data.selector';
import { map, Observable } from 'rxjs';
import { FILTER_TYPE_IN_OPTION, INITIAL_FILTERS } from '../../../data/filters';
import { FormToggleComponent } from '../form/form-toggle/form-toggle.component';
import { SearchSVGComponent } from '../../svg/seach-svg/seach-svg.component';
import { showModal } from '../../../state/actions/context.actions';
import { FormRowComponent } from '../form/form-row/form-row.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [ReactiveFormsModule, FormToggleComponent, SearchSVGComponent, FormRowComponent, SearchSVGComponent, CommonModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent implements OnInit{

  filters: FormGroup = new FormGroup({});
  options = FILTER_TYPE_IN_OPTION;

  constructor(private readonly store:Store){
    this.filters.addControl('pending', new FormControl(false))
  }

  ngOnInit(): void {
      this.store.select(selectFilters)
      .pipe(map(filters => this.filters.patchValue({pending:filters.pending})))
      .subscribe()
  }

  changeToggle(){
    const filters = {...this.filters.value};
    this.store.dispatch(changeFilters({filters}));
  }

  showSearchModal(){
    this.store.dispatch(showModal({ modalType:'search-record'}));
  }

  resetFilters(){
    this.store.dispatch(changeFilters({filters:INITIAL_FILTERS}))
  }

  showResetFilters():Observable<boolean>{
    return this.store.select(selectFilters)
    .pipe( map(filters => JSON.stringify(filters) !== JSON.stringify(INITIAL_FILTERS)));
  }
}

import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { changeFilters } from '../../../state/actions/data.actions';
import { selectFilters } from '../../../state/selectors/data.selector';
import { map } from 'rxjs';
import { FILTER_TYPE_IN_OPTION } from '../../../data/filters';
import { FormToggleComponent } from '../form/form-toggle/form-toggle.component';
import { SearchSVGComponent } from '../../svg/seach-svg/seach-svg.component';
import { showModal } from '../../../state/actions/context.actions';
import { FormRowComponent } from '../form/form-row/form-row.component';


@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [ReactiveFormsModule, FormToggleComponent, SearchSVGComponent, FormRowComponent, SearchSVGComponent],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent implements OnInit{

  filters: FormGroup = new FormGroup({});
  options = FILTER_TYPE_IN_OPTION;

  constructor(private readonly store:Store){}
  ngOnInit(): void {

    this.store.select(selectFilters)
    .pipe(
      map(filters => {
        this.filters.addControl('pending', new FormControl(filters.pending));
      })
    )
    .subscribe()
  }

  search(){
    const filters = {...this.filters.value};

    this.store.dispatch(changeFilters({filters}));
  }


  showSearchModal(){
    this.store.dispatch(showModal({ modalType:'search-record'}));
  }

}

import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { changeFilters } from '../../../state/actions/data.actions';
import { selectFilters } from '../../../state/selectors/data.selector';
import { map } from 'rxjs';
import { FILTER_TYPE_IN_OPTION } from '../../../data/filters';


@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [ReactiveFormsModule],
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
        this.filters.addControl('text', new FormControl(filters.text));
        this.filters.addControl('typeIn', new FormArray(this.addTypeIn(filters.typeIn)));
      })
    )
    .subscribe()
  }

  addTypeIn(typeIn:boolean[]):FormControl[]{
    return typeIn.map(value => new FormControl(value));
  }

  resetFilters(){
      this.filters.patchValue({
        pending:false,
        text:"",
        typeIn:[true, true, true]
      })
      this.search();
  }

  search(){
    const filters = {...this.filters.value};

    this.store.dispatch(changeFilters({filters}));
  }

  types(): FormArray {
    return this.filters.get('typeIn') as FormArray;
  }
}

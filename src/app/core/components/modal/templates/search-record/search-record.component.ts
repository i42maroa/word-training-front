import { Component, OnInit } from '@angular/core';
import { FormToggleComponent } from '../../../form/form-toggle/form-toggle.component';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FILTER_TYPE_IN_OPTION } from '../../../../../data/filters';
import { Store } from '@ngrx/store';
import { selectFilters } from '../../../../../state/selectors/data.selector';
import { map } from 'rxjs';
import { FormContainerComponent } from '../../../form/form-container/form-container.component';
import { FormRowComponent } from '../../../form/form-row/form-row.component';
import { SearchSVGComponent } from '../../../../svg/seach-svg/seach-svg.component';
import { CheckSVGComponent } from '../../../../svg/check-svg/check-svg.component';

@Component({
  selector: 'app-search-record',
  standalone: true,
  imports: [ReactiveFormsModule, FormToggleComponent, FormContainerComponent, FormRowComponent, SearchSVGComponent, CheckSVGComponent],
  templateUrl: './search-record.component.html',
  styleUrl: './search-record.component.css'
})
export class SearchRecordComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({});
  options = FILTER_TYPE_IN_OPTION;

  constructor(private readonly store:Store){}
  ngOnInit(): void {

    this.store.select(selectFilters)
    .pipe(
      map(filters => {
        this.formGroup.addControl('text', new FormControl(filters.text));
        this.formGroup.addControl('typeIn', new FormArray(this.addTypeIn(filters.typeIn)));
      })
    )
    .subscribe()
  }

  addTypeIn(typeIn:boolean[]):FormControl[]{
    return typeIn.map(value => new FormControl(value));
  }

  resetFilters(){
      this.formGroup.patchValue({
        text:"",
        typeIn:[true, true, true]
      })
  }

  selectAll(){
    if(this.allSelected){
      this.formGroup.patchValue({
        typeIn:[false, false, false]
      })
    }else{
      this.formGroup.patchValue({
        typeIn:[true, true, true]
      })
    }
  }


  types(): FormArray {
    return this.formGroup.get('typeIn') as FormArray;
  }

  get allSelected():boolean{
    return this.types().value.every((v:boolean) => v === true)
  }
}

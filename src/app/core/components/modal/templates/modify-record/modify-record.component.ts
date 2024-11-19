import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormButtonSecundaryComponent } from '../../../buttons/form-button-secundary/form-button-secundary.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormContainerComponent } from '../../../form/form-container/form-container.component';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { DeleteSvgComponent } from '../../../../svg/delete-svg/delete-svg.component';
import { FormButtonComponent } from '../../../buttons/form-button/form-button.component';
import { selectRecordDetail } from '../../../../../state/selectors/data.selector';
import { FormService } from '../../../../services/form/form.service';
import { FormRowComponent } from '../../../form/form-row/form-row.component';
import { FormSelectFieldComponent } from '../../../form/form-select-field/form-select-field.component';
import { FormFieldComponent } from '../../../form/form-field/form-field.component';

@Component({
  selector: 'app-modify-record-modal',
  standalone: true,
  imports: [FormContainerComponent, ReactiveFormsModule,FormButtonSecundaryComponent, FormButtonComponent, DeleteSvgComponent, FormFieldComponent, FormSelectFieldComponent, FormRowComponent],
  templateUrl: './modify-record.component.html',
  styleUrl: './modify-record.component.css'
})
export class ModifyRecordComponent implements OnInit, OnDestroy{

  subscriber!:Subscription;

  constructor(
    private readonly store:Store,
    private readonly formService:FormService){ }

  ngOnInit(): void {
    this.subscriber = this.store.select(selectRecordDetail)
      .subscribe(record => this.formService.initializateRecordForm(record));
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

  get fs():FormService{
    return this.formService;
  }

  exampleLabel(num:number):string{
    return `Ejemplo ${num + 1}`;
  }
}

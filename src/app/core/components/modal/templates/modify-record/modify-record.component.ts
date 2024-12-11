import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormButtonSecundaryComponent } from '../../../buttons/form-button-secundary/form-button-secundary.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { first, Subscription } from 'rxjs';
import { DeleteSvgComponent } from '../../../../svg/delete-svg/delete-svg.component';
import { FormButtonComponent } from '../../../buttons/form-button/form-button.component';
import { selectRecordDetail } from '../../../../../state/selectors/data.selector';
import { FormService } from '../../../../services/form/form.service';
import { FormRowComponent } from '../../../form/form-row/form-row.component';
import { FormSelectFieldComponent } from '../../../form/form-select-field/form-select-field.component';
import { FormFieldComponent } from '../../../form/form-field/form-field.component';
import { closeModal, modifyRecord } from '../../../../../state/actions/context.actions';
import { FormButtonContainerComponent } from '../../../form/form-button-container/form-button-container.component';
import { FormCleanerService } from '../../../../services/form/form-cleaner.service';
import { selectModalDataRecordId } from '../../../../../state/selectors/context.selector';
import { FormDefinitionButtonComponent } from '../../../buttons/form-definition-button/form-definition-button.component';

@Component({
  selector: 'app-modify-record-modal',
  standalone: true,
  imports: [ReactiveFormsModule, FormDefinitionButtonComponent, FormButtonSecundaryComponent, FormButtonComponent, DeleteSvgComponent, FormFieldComponent, FormSelectFieldComponent, FormRowComponent, FormButtonContainerComponent],
  templateUrl: './modify-record.component.html',
  styleUrl: './modify-record.component.css'
})
export class ModifyRecordComponent implements OnInit, OnDestroy{

  subscriber!:Subscription;

  constructor(
    private readonly store:Store,
    private readonly formCleanerService:FormCleanerService,
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

  sendForm(){
    const recordRequest = this.formCleanerService.cleanFormRecord(this.fs.formGroup);
    if(recordRequest){
      this.store.select(selectModalDataRecordId)
        .pipe(first())
          .subscribe(recordId => this.store.dispatch(modifyRecord({recordId, recordRequest})));
      this.store.dispatch(closeModal());
    }
  }

  push(){
    console.log("hola")
  }
}

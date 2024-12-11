import { Component} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormButtonSecundaryComponent } from '../../../buttons/form-button-secundary/form-button-secundary.component';
import { DeleteSvgComponent } from '../../../../svg/delete-svg/delete-svg.component';
import { FormService } from '../../../../services/form/form.service';
import { FormFieldComponent } from '../../../form/form-field/form-field.component';
import { FormSelectFieldComponent } from '../../../form/form-select-field/form-select-field.component';
import { FormRowComponent } from '../../../form/form-row/form-row.component';
import { FormButtonContainerComponent } from '../../../form/form-button-container/form-button-container.component';
import { FormCleanerService } from '../../../../services/form/form-cleaner.service';
import { Store } from '@ngrx/store';
import { closeModal, saveNewRecord } from '../../../../../state/actions/context.actions';
import { FormDefinitionButtonComponent } from '../../../buttons/form-definition-button/form-definition-button.component';


@Component({
  selector: 'app-add-modal',
  standalone: true,
  imports: [ReactiveFormsModule, FormButtonSecundaryComponent, FormDefinitionButtonComponent, FormButtonSecundaryComponent, DeleteSvgComponent, FormFieldComponent, FormSelectFieldComponent, FormRowComponent, FormButtonContainerComponent],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddModalComponent {

  constructor(private readonly formService:FormService,
    private readonly formCleanerService:FormCleanerService,
    private readonly store:Store) {
      this.formService.initializateRecordForm(undefined);
  }


  get fs():FormService{
    return this.formService;
  }

  exampleLabel(num:number):string{
    return `Ejemplo ${num + 1}`;
  }

  sendForm(){
    const recordCleaned = this.formCleanerService.cleanFormRecord(this.fs.formGroup);

    if(recordCleaned){
      this.store.dispatch(saveNewRecord({recordRequest:recordCleaned}));
      this.store.dispatch(closeModal());
    }
  }
}

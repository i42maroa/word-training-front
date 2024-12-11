import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormService } from '../../../../services/form/form.service';
import { DeleteSvgComponent } from '../../../../svg/delete-svg/delete-svg.component';
import { FormButtonSecundaryComponent } from '../../../buttons/form-button-secundary/form-button-secundary.component';
import { FormSelectFieldComponent } from '../../../form/form-select-field/form-select-field.component';
import { FormFieldComponent } from '../../../form/form-field/form-field.component';
import { FormRowComponent } from '../../../form/form-row/form-row.component';
import { FormCleanerService } from '../../../../services/form/form-cleaner.service';
import { Store } from '@ngrx/store';
import { FormButtonContainerComponent } from '../../../form/form-button-container/form-button-container.component';
import { closeModal, saveNewDefinition } from '../../../../../state/actions/context.actions';
import { selectModalDataRecordId } from '../../../../../state/selectors/context.selector';
import { first } from 'rxjs';

@Component({
  selector: 'app-add-definition-modal',
  standalone: true,
  imports: [ReactiveFormsModule, FormRowComponent, FormFieldComponent, FormSelectFieldComponent, FormButtonSecundaryComponent, DeleteSvgComponent, FormButtonContainerComponent],
  templateUrl: './add-definition.component.html',
  styleUrl: './add-definition.component.css'
})
export class AddDefinitionComponent {


  constructor(private readonly formService:FormService,
    private readonly formCleanerService:FormCleanerService,
    private readonly store:Store) {
    this.formService.initializateDefinitionForm(undefined);
  }

  get fs():FormService {
    return this.formService;
  }

  sendForm(){
    const definitionRequest = this.formCleanerService.cleanFormDefinition(this.fs.formGroup);
    if(definitionRequest){
      this.store.select(selectModalDataRecordId)
        .pipe(first())
        .subscribe(recordId => this.store.dispatch(saveNewDefinition({recordId, definitionRequest})));
      this.store.dispatch(closeModal())
    }
  }
}

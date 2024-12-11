import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormService } from '../../../../services/form/form.service';
import { FormFieldComponent } from '../../../form/form-field/form-field.component';
import { FormCleanerService } from '../../../../services/form/form-cleaner.service';
import { Store } from '@ngrx/store';
import { closeModal, saveNewExample } from '../../../../../state/actions/context.actions';
import { FormButtonContainerComponent } from '../../../form/form-button-container/form-button-container.component';
import { selectModalData} from '../../../../../state/selectors/context.selector';
import { first } from 'rxjs';

@Component({
  selector: 'app-add-example-modal',
  standalone: true,
  imports: [ReactiveFormsModule, FormFieldComponent, ReactiveFormsModule,FormButtonContainerComponent],
  templateUrl: './add-example.component.html',
  styleUrl: './add-example.component.css'
})
export class AddExampleComponent {

  constructor(private readonly formService:FormService,
    private readonly formCleanerService:FormCleanerService,
    private readonly store:Store) {
    this.formService.initializateExampleForm();
  }

  get fs():FormService{
    return this.formService;
  }

  sendForm(){
    const exampleRequest = this.formCleanerService.cleanFormExample(this.fs.formGroup);
    if(exampleRequest){
      this.store.select(selectModalData)
          .pipe(first())
          .subscribe(data => this.store.dispatch(saveNewExample({recordId:data!.recordId, definitionId:data!.definitionId!, exampleRequest})));
      this.store.dispatch(closeModal())
    }
  }
}

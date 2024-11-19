import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormService } from '../../../../services/form/form.service';
import { DeleteSvgComponent } from '../../../../svg/delete-svg/delete-svg.component';
import { FormButtonSecundaryComponent } from '../../../buttons/form-button-secundary/form-button-secundary.component';
import { FormSelectFieldComponent } from '../../../form/form-select-field/form-select-field.component';
import { FormFieldComponent } from '../../../form/form-field/form-field.component';
import { FormRowComponent } from '../../../form/form-row/form-row.component';
import { FormContainerComponent } from '../../../form/form-container/form-container.component';

@Component({
  selector: 'app-add-definition-modal',
  standalone: true,
  imports: [ReactiveFormsModule, FormRowComponent, FormFieldComponent, FormSelectFieldComponent, FormButtonSecundaryComponent, DeleteSvgComponent, FormContainerComponent],
  templateUrl: './add-definition.component.html',
  styleUrl: './add-definition.component.css'
})
export class AddDefinitionComponent {


  constructor(private readonly formService:FormService) {
    this.formService.initializateDefinitionForm(undefined);
  }

  get fs():FormService {
    return this.formService;
  }

}

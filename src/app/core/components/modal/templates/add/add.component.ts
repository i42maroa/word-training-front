import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormButtonSecundaryComponent } from '../../../buttons/form-button-secundary/form-button-secundary.component';
import { FormContainerComponent } from '../../../form/form-container/form-container.component';
import { FormButtonComponent } from '../../../buttons/form-button/form-button.component';
import { DeleteSvgComponent } from '../../../../svg/delete-svg/delete-svg.component';
import { FormService } from '../../../../services/form/form.service';
import { FormFieldComponent } from '../../../form/form-field/form-field.component';
import { FormSelectFieldComponent } from '../../../form/form-select-field/form-select-field.component';
import { FormRowComponent } from '../../../form/form-row/form-row.component';


@Component({
  selector: 'app-add-modal',
  standalone: true,
  imports: [FormContainerComponent, ReactiveFormsModule, FormButtonComponent, FormButtonSecundaryComponent, DeleteSvgComponent, FormFieldComponent, FormSelectFieldComponent, FormRowComponent],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddModalComponent{

  constructor(private readonly formService:FormService) {
    this.formService.initializateRecordForm(undefined);
  }

  get fs():FormService{
    return this.formService;
  }

  exampleLabel(num:number):string{
    return `Ejemplo ${num + 1}`;
  }
}

import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormContainerComponent } from '../../../form/form-container/form-container.component';
import { FormService } from '../../../../services/form/form.service';
import { FormFieldComponent } from '../../../form/form-field/form-field.component';

@Component({
  selector: 'app-add-example-modal',
  standalone: true,
  imports: [FormContainerComponent, ReactiveFormsModule, FormFieldComponent, ReactiveFormsModule, FormContainerComponent],
  templateUrl: './add-example.component.html',
  styleUrl: './add-example.component.css'
})
export class AddExampleComponent {

  constructor(private readonly formService:FormService) {
    this.formService.initializateExampleForm();
  }

  get fs():FormService{
    return this.formService;
  }
}

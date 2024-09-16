import { Component } from '@angular/core';
import { FormTemplateDefinitionComponent } from '../../../form/templates/definition/definition.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormContainerComponent } from '../../../form/form-container/form-container.component';

@Component({
  selector: 'app-add-definition-modal',
  standalone: true,
  imports: [FormContainerComponent, ReactiveFormsModule, FormTemplateDefinitionComponent],
  templateUrl: './add-definition.component.html',
  styleUrl: './add-definition.component.css'
})
export class AddDefinitionComponent {

  formGroup:FormGroup =new FormGroup({})

}

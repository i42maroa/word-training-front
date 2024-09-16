import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormTemplateExamplesComponent } from '../../../form/templates/examples/examples.component';
import { FormContainerComponent } from '../../../form/form-container/form-container.component';

@Component({
  selector: 'app-add-example-modal',
  standalone: true,
  imports: [FormContainerComponent, ReactiveFormsModule, FormTemplateExamplesComponent],
  templateUrl: './add-example.component.html',
  styleUrl: './add-example.component.css'
})
export class AddExampleComponent {

  formGroup:FormGroup = new FormGroup({
    exampleGroup:new FormGroup({})
  })
}

import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormFieldComponent } from '../../form-field/form-field.component';

@Component({
  selector: 'app-form-template-examples',
  standalone: true,
  imports: [FormFieldComponent, ReactiveFormsModule],
  templateUrl: './examples.component.html',
  styleUrl: './examples.component.css'
})
export class FormTemplateExamplesComponent implements OnInit{

  @Input() formGroup!: FormGroup;

  ngOnInit(): void {
    this.formGroup.addControl('sentence', new FormControl());
    this.formGroup.addControl('translation', new FormControl());
  }

}

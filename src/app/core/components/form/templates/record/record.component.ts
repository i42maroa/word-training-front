import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RECORD_TYPE_OPTIONS, RecordType } from '../../../../../data/record.interface';
import { FormFieldComponent } from '../../form-field/form-field.component';
import { FormSelectFieldComponent } from '../../form-select-field/form-select-field.component';
import { FormRowComponent } from '../../form-row/form-row.component';

@Component({
  selector: 'app-form-template-record',
  standalone: true,
  imports: [ReactiveFormsModule, FormRowComponent, FormFieldComponent, FormSelectFieldComponent],
  templateUrl: './record.component.html',
  styleUrl: './record.component.css'
})
export class FormTemplateRecordComponent implements OnInit{

  @Input() formGroup!: FormGroup;

  optionSelect: {label:string; value:RecordType}[] = RECORD_TYPE_OPTIONS;

  ngOnInit(): void {
    this.formGroup.addControl('value', new FormControl());
    this.formGroup.addControl('type', new FormControl('WORD'));
  }
}

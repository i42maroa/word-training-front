import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormRowComponent } from '../../form-row/form-row.component';
import { FormFieldComponent } from '../../form-field/form-field.component';
import { FormSelectFieldComponent } from '../../form-select-field/form-select-field.component';
import { DEFINITION_TYPE_OPTIONS, DefinitionType } from '../../../../../data/record.interface';
import { FormTemplateExamplesComponent } from '../examples/examples.component';
import { FormButtonSecundaryComponent } from '../../../buttons/form-button-secundary/form-button-secundary.component';
import { DeleteSvgComponent } from '../../../../svg/delete-svg/delete-svg.component';

@Component({
  selector: 'app-form-templates-definition',
  standalone: true,
  imports: [ReactiveFormsModule, FormRowComponent, FormFieldComponent, FormSelectFieldComponent, FormTemplateExamplesComponent, FormButtonSecundaryComponent, DeleteSvgComponent],
  templateUrl: './definition.component.html',
  styleUrl: './definition.component.css'
})
export class FormTemplateDefinitionComponent implements OnInit{

  @Input() formGroup!: FormGroup;

  optionDefinitionSelect: {label:string; value:DefinitionType}[] = DEFINITION_TYPE_OPTIONS;

  ngOnInit(): void {
    this.formGroup.addControl('translation', new FormControl());
    this.formGroup.addControl('type', new FormControl('NOUN'));
    this.formGroup.addControl('examples', new FormArray([this.newExample()]));
  }

  examples(): FormArray {
    return this.formGroup.get('examples') as FormArray;
  }

  exampleGroup(index:number){
    return this.examples().at(index) as FormGroup
  }

  addExample(){
    this.examples().push(this.newExample())
  }

  newExample(){
    return new FormGroup({
      sentence:new FormControl(),
      translation:new FormControl()
    });
  }
}

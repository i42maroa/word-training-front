import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { DEFINITION_TYPE_OPTIONS, DefinitionInterface, DefinitionType, ExampleInterface, RECORD_TYPE_OPTIONS, RecordInterface, RecordType } from '../../../../../data/record.interface';
import { closeModal } from '../../../../../state/actions/context.actions';
import { Store } from '@ngrx/store';
import { DeleteSvgComponent } from '../../../../svg/delete-svg/delete-svg.component';
import { FormInputComponent } from '../../../../../shared/components/form/form-input/form-input.component';
import { FormButtonComponent } from '../../../buttons/form-button/form-button.component';
import { FormButtonSecundaryComponent } from '../../../buttons/form-button-secundary/form-button-secundary.component';
import { FormRowComponent } from '../../../form/form-row/form-row.component';
import { FormFieldComponent } from '../../../form/form-field/form-field.component';
import { FormSelectFieldComponent } from '../../../form/form-select-field/form-select-field.component';


@Component({
  selector: 'app-add-modal',
  standalone: true,
  imports: [ReactiveFormsModule, DeleteSvgComponent, FormInputComponent, FormButtonComponent, FormButtonSecundaryComponent, FormSelectFieldComponent, FormRowComponent, FormFieldComponent],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddModalComponent {

  form:FormGroup =new FormGroup({
    value: new FormControl(),
    type: new FormControl('WORD'),
    definitions: new FormArray([
      new FormGroup({
        translation:new FormControl(),
        defType:new FormControl('NOUN'),
        info:new FormControl(),
        examples:new FormArray([
          new FormGroup({
            sentence:new FormControl(),
            translation:new FormControl(),
            info: new FormControl()
          })
        ])
      })
    ])
});

constructor(private readonly store:Store){
}

  optionSelect: {label:string; value:RecordType}[] = RECORD_TYPE_OPTIONS;
  optionDefinitionSelect: {label:string; value:DefinitionType}[] = DEFINITION_TYPE_OPTIONS;

  definitions(): FormArray {
    return this.form.get('definitions') as FormArray;
  }

  examples(defIndex:number): FormArray {
    return this.definitions().at(defIndex).get('examples') as FormArray;
  }

  addDefinition(){
    this.definitions().push(this.newDefinition())
  }

  addExample(defIndex:number){
    this.examples(defIndex).push(this.newExample())
  }

  removeDefinition(defIndex: number) {
    this.definitions().removeAt(defIndex);
  }

  newDefinition(){
    return  new FormGroup({
        translation:new FormControl(),
        defType:new FormControl('NOUN'),
        info:new FormControl(),
        examples:new FormArray([
          new FormGroup({
            sentence:new FormControl(),
            translation:new FormControl(),
            info: new FormControl()
          })
        ])
      })

  }

  newExample(){
    return  new FormGroup({
        sentence:new FormControl(),
        translation:new FormControl(),
        info: new FormControl()
      });
  }

  showRemoveDefinition(){
    return this.definitions().length > 1
  }

  showRemoveExample(defIndex:number){
    return this.examples(defIndex).length > 1
  }
  saveRecord(){
   const form =  this.form.value;
    const cleanedForm = this.cleanObject(form)
    console.log(cleanedForm)
  }

  closeModal(){
    this.store.dispatch(closeModal());
  }

  cleanObject(form:any):RecordInterface{
    console.log(form)

      const defs = form.definitions.reduce((definitions:DefinitionInterface[], definitionForm:any) => {

        if(definitionForm.translation){
          const exampleFromRed = definitionForm.examples.reduce((examples:ExampleInterface[], exampleForm:ExampleInterface) => {
            if(exampleForm.sentence || exampleForm.translation){
              examples.push(exampleForm)
            }
            return examples;
          }, [])

          const def:DefinitionInterface = {
            definitionId:"d",
            translation:definitionForm.translation,
            type:definitionForm.defType,
            examples:exampleFromRed
          }
          definitions.push(def)
        }
        return definitions;
      }, [])

    return {
      creationDate: new Date(),
      definitions: defs,
      modificationDate: new Date(),
      type:form.type,
      value:form.value,
      _id:""
    }
  }
}

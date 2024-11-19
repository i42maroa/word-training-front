import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { DEFINITION_TYPE_OPTIONS, DefinitionInterface, DefinitionType, ExampleInterface, RECORD_TYPE_OPTIONS, RecordInterface, RecordType } from '../../../data/record.interface';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private selectedDefinition = 0;
  private form:FormGroup = new FormGroup({});

  private optionSelect: {label:string; value:RecordType}[] = RECORD_TYPE_OPTIONS;
  private optionDefinitionSelect: {label:string; value:DefinitionType}[] = DEFINITION_TYPE_OPTIONS;


  //TODO: clean
  initializateRecordForm(record:RecordInterface|undefined){
    if(record){
      this.form = this.createNewRecordFormGroup(record);
    }
    else{
      this.form = this.createEmptyRecordFormGroup();
    }
  }

  initializateDefinitionForm(definition: DefinitionInterface | undefined){
    if(definition){
      this.form = this.createNewDefinitionFormGroup(definition);
    }else{
      this.form = this.createEmptyDefinitionFormGroup();
    }
  }

  initializateExampleForm(){
     this.form = this.createEmptyExampleFormGroup();
  }

  createNewRecordFormGroup(record:RecordInterface){
    const definitions = record? record.definitions
    .map(definition => this.createNewDefinitionFormGroup(definition)) : [];
    return  new FormGroup({
      value: new FormControl(record.value),
      type: new FormControl(record.type),
      definitions: new FormArray(definitions)
    });
  }

  createNewDefinitionFormGroup(definition:DefinitionInterface){
    const examples = definition? definition.examples
    .map(example => this.createNewExampleFormGroup(example)) : [];

    return  new FormGroup({
        definitionId:new FormControl(definition.definitionId),
        translation:new FormControl(definition.translation),
        type:new FormControl(definition.type),
        examples:new FormArray(examples)
      })
  }

  createNewExampleFormGroup(example:ExampleInterface){
      return new FormGroup({
        exampleId:new FormControl(example.exampleId),
        sentence:new FormControl(example.sentence),
        translation:new FormControl(example.translation)
      })
  }

  createEmptyRecordFormGroup(){
    return  new FormGroup({
      value: new FormControl(),
      type: new FormControl('WORD'),
      definitions: new FormArray([this.createEmptyDefinitionFormGroup()])
    });
  }

  createEmptyDefinitionFormGroup(){
    return  new FormGroup({
        definitionId:new FormControl(),
        translation:new FormControl(),
        type:new FormControl(''),
        examples:new FormArray([this.createEmptyExampleFormGroup()])
      })
  }

  createEmptyExampleFormGroup(){
    return new FormGroup({
      exampleId:new FormControl(),
      sentence:new FormControl(),
      translation:new FormControl()
    })
  }


  //DEFINITION FORM OPERATIONS
  definitions(): FormArray {
    return this.formGroup.get('definitions') as FormArray;
  }

  definitionGroup(index:number):FormGroup{
    return this.definitions().at(index) as FormGroup
  }

  addDefinition(){
    this.definitions().push(this.createEmptyDefinitionFormGroup())
    this.changeDefinitionShow(this.definitions().length - 1)
  }

  changeDefinitionShow(definitionIndex:number){
    this.selectedDefinition = definitionIndex;
  }

  removeDefinition(defIndex: number) {
    this.definitions().removeAt(defIndex);
  }

  showRemoveDefinition(){
    return this.definitions().length > 1
  }


  //EXAMPLES FORM OPERATIONS
  examples(): FormArray {
    return this.definitionGroup(this.selectedDefinition).get('examples') as FormArray;
  }

  examplesInSingleDefinition(): FormArray {
    return this.formGroup.get('examples') as FormArray;
  }

  exampleGroup(index:number){
    return this.examples().at(index) as FormGroup
  }

  addExample(){
    this.examples().push(this.createEmptyExampleFormGroup())
  }


  get formGroup(){
    return this.form;
  }

  get definitionSelected():number{
    return this.selectedDefinition;
  }

  get optionRecordType(){
    return this.optionSelect;
  }

  get optionDefinitionType(){
    return this.optionDefinitionSelect;
  }
}

import { Injectable } from '@angular/core';
import { DefinitionNewRequest, ExampleNewRequest, RecordNewRequest } from '../../../data/api.interface';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormCleanerService {

  isRecordRequestValid = (recordRequest:RecordNewRequest) => recordRequest.value;
  isDefinitionRequestValid = (definitionRequest:DefinitionNewRequest) => definitionRequest.translation;
  isExampleRequestValid = (exampleRequest:ExampleNewRequest) => exampleRequest.sentence || exampleRequest.translation;

  cleanFormRecord(recordForm:FormGroup):RecordNewRequest | undefined{
    const recordValue:RecordNewRequest = recordForm.value;
    return this.isRecordRequestValid(recordValue) ?
      { ...recordValue, definitions: this.cleanDefinitionFormArray(recordValue)} : undefined;
  }

  cleanFormDefinition(definitionForm:FormGroup):DefinitionNewRequest | undefined{
    const definitionValue:DefinitionNewRequest = definitionForm.value;
    return this.isDefinitionRequestValid(definitionValue)?
      { ...definitionValue, examples:this.cleanExampleFormArray(definitionValue) } : undefined;
  }

  cleanFormExample(exampleForm:FormGroup): ExampleNewRequest | undefined{
    const exampleValue:ExampleNewRequest = exampleForm.value;
    return this.isExampleRequestValid(exampleValue)? { ...exampleValue } : undefined;
  }

  cleanDefinitionFormArray(recordRequestValue:RecordNewRequest): DefinitionNewRequest[]{
    return recordRequestValue.definitions.reduce((definitions:DefinitionNewRequest[], definitionRequest:DefinitionNewRequest) => {
      if(this.isDefinitionRequestValid(definitionRequest)){
        const def:DefinitionNewRequest = { ...definitionRequest,  examples:this.cleanExampleFormArray(definitionRequest)}
        definitions.push(def)
      }
      return definitions;
    }, []);
  }

  cleanExampleFormArray(definitionFormValue:DefinitionNewRequest): ExampleNewRequest[]{
    return definitionFormValue.examples.reduce((examples:ExampleNewRequest[], exampleRequest:ExampleNewRequest) => {
      if(this.isExampleRequestValid(exampleRequest)){
        examples.push({ ...exampleRequest})
      }
      return examples;
    }, [])
  }
}

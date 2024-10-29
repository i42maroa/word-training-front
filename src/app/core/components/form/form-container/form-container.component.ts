import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { closeModal, modifyRecord, removeRecord, saveNewDefinition, saveNewExample, saveNewRecord } from '../../../../state/actions/context.actions';
import { FormButtonComponent } from '../../buttons/form-button/form-button.component';
import { DefinitionInterface, ExampleInterface } from '../../../../data/record.interface';
import { selectModal } from '../../../../state/selectors/context.selector';
import { map, Observable } from 'rxjs';
import {  ModalState } from '../../../../data/modal.interface';
import { DefinitionNewRequest, ExampleNewRequest, RequestNewRecord } from '../../../../data/api.interface';

@Component({
  selector: 'app-form-container',
  standalone: true,
  imports: [ReactiveFormsModule, FormButtonComponent],
  templateUrl: './form-container.component.html',
  styleUrl: './form-container.component.css'
})
export class FormContainerComponent {

  @Input() formGroup: FormGroup  =new FormGroup({});
  @Input() recordId?:string | null;

  constructor(private readonly store:Store
  ){ }

  closeModal(){
    this.store.dispatch(closeModal());
  }

  get modalData(): Observable<ModalState>{
    return this.store.select(selectModal);
  }

  saveRecord(){
    const sub = this.modalData
      .pipe( map((val) => this.saveSwitch(val))).subscribe();

      sub.unsubscribe();
     this.store.dispatch(closeModal());
   }


   saveSwitch(modalState:ModalState){
    const form =  this.formGroup.value;
    const data = modalState.data;
      switch(modalState.type){
        case 'new-record': {
          const recordCleaned = this.cleanRecord(form);
          if(recordCleaned){
            this.store.dispatch(saveNewRecord({recordRequest:recordCleaned}))
          }
          break;
        }
        case 'modify-record': {
          const recordRequest = this.cleanModifyRecord(form);
          if(recordRequest){
            this.store.dispatch(modifyRecord({recordId:modalState.data!.recordId, recordRequest}))
          }
          break;
        }
        case 'delete-record': {
          this.store.dispatch(removeRecord({recordId:modalState.data!.recordId}));
          break;
        }
        case 'new-definition':{
          const definitionRequest = this.cleanDefinition(form);
          if(definitionRequest){
            this.store.dispatch(saveNewDefinition({recordId:modalState.data!.recordId, definitionRequest}));
          }
          break;
        }
        case 'new-example':{
          const exampleRequest = this.cleanExample(form);
          if(exampleRequest){
            this.store.dispatch(saveNewExample({recordId:modalState.data!.recordId, definitionId:data!.definitionId!, exampleRequest}));
          }
          break;
        }
        default:
      }
   }

   cleanModifyRecord(recordForm:any):RequestNewRecord | undefined{
    const defs = this.cleanModificationDefinitionArray(recordForm);

    if (recordForm.value){
      return {
        definitions: defs,
        type:recordForm.type,
        value:recordForm.value
      }
    }
    return undefined;
  }

  cleanModificationDefinitionArray(form:any):DefinitionNewRequest[]{
    return form.definitions.reduce((definitions:DefinitionInterface[], definitionForm:any) => {

      if(definitionForm.translation){
        const def:DefinitionInterface = {
          definitionId:definitionForm.definitionId,
          translation:definitionForm.translation,
          type:definitionForm.defType,
          examples:this.cleanModificationExampleArray(definitionForm)
        }
        definitions.push(def)
      }
      return definitions;
    }, []);
  }

  cleanModificationExampleArray(definitionForm:any): ExampleInterface[]{
    return definitionForm.examples.reduce((examples:ExampleInterface[], exampleForm:ExampleInterface) => {
      if(exampleForm.sentence || exampleForm.translation){
        examples.push({
          exampleId: exampleForm.exampleId,
          sentence:exampleForm.sentence,
          translation: exampleForm.translation
        })
      }
      return examples;
    }, [])
  }



   cleanRecord(recordForm:any):RequestNewRecord | undefined{
    const defs = this.cleanDefinitionArray(recordForm);

    if (recordForm.value){
      return {
        definitions: defs,
        type:recordForm.type,
        value:recordForm.value
      }
    }
    return undefined;
  }

  cleanDefinition(definitionForm:any):DefinitionNewRequest | undefined{
    if(definitionForm.translation){
      return {
        translation:definitionForm.translation,
        type:definitionForm.type,
        examples:this.cleanExampleArray(definitionForm)
      }
    }
    return undefined;
  }

  cleanDefinitionArray(form:any){
    return form.definitions.reduce((definitions:DefinitionNewRequest[], definitionForm:DefinitionNewRequest) => {

      if(definitionForm.translation){
        const def:DefinitionNewRequest = {
          translation:definitionForm.translation,
          type:definitionForm.type,
          examples:this.cleanExampleArray(definitionForm)
        }
        definitions.push(def)
      }
      return definitions;
    }, []);

  }

  cleanExampleArray(definitionForm:any): ExampleNewRequest[]{
    return definitionForm.examples.reduce((examples:ExampleNewRequest[], exampleForm:ExampleNewRequest) => {
      if(exampleForm.sentence || exampleForm.translation){
        examples.push({
          sentence:exampleForm.sentence,
          translation: exampleForm.translation
        })
      }
      return examples;
    }, [])
  }

  cleanExample(exampleForm:any): ExampleNewRequest | undefined{
      if(exampleForm.sentence || exampleForm.translation){
        return {
          sentence:exampleForm.sentence,
          translation: exampleForm.translation
        }
      }
      return undefined;
  }
}

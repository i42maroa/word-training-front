import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { RecordService } from '../../../services/record/record.service';
import { closeModal } from '../../../../state/actions/context.actions';
import { FormButtonComponent } from '../../buttons/form-button/form-button.component';
import { DefinitionInterface, ExampleInterface, RecordInterface } from '../../../../data/record.interface';
import { selectModal } from '../../../../state/selectors/context.selector';
import { map, Observable } from 'rxjs';
import {  ModalState } from '../../../../data/modal.interface';

@Component({
  selector: 'app-form-container',
  standalone: true,
  imports: [ReactiveFormsModule, FormButtonComponent],
  templateUrl: './form-container.component.html',
  styleUrl: './form-container.component.css'
})
export class FormContainerComponent {

  @Input() formGroup: FormGroup  =new FormGroup({});

  constructor(private readonly store:Store,
    private readonly recordService:RecordService
  ){
  }

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
    console.log(data, 'modal data')
      switch(modalState.type){
        case 'new-record': {
          const recordCleaned = this.cleanRecord(form);
          if(recordCleaned){
            this.recordService.addNewRecord(recordCleaned);
          }
          break;
        }
        case 'modify-record': {
          const recordCleaned = this.cleanModifyRecord(form);
          if(recordCleaned){
            this.recordService.modificateRecord(recordCleaned);
          }
          break;
        }
        case 'new-definition':{
          const definitionCleaned = this.cleanDefinition(form);
          if(definitionCleaned){
            this.recordService.addNewDefinition(data!.recordId, definitionCleaned);
          }
          break;
        }
        case 'new-example':{
          const exampleCleaned = this.cleanExample(form);
          if(exampleCleaned){
            this.recordService.addNewExample(data!.recordId, data!.definitionId!, exampleCleaned);
          }
          break;
        }
        default:
      }
   }

   cleanModifyRecord(recordForm:any):RecordInterface | undefined{
    const defs = this.cleanModificationDefinitionArray(recordForm);

    if (recordForm.value){
      return {
        definitions: defs,
        modificationDate: new Date(),
        type:recordForm.type,
        value:recordForm.value,
        _id:recordForm._id ?? crypto.randomUUID()
      }
    }
    return undefined;
  }

  cleanModificationDefinitionArray(form:any){
    return form.definitions.reduce((definitions:DefinitionInterface[], definitionForm:any) => {

      if(definitionForm.translation){
        const def:DefinitionInterface = {
          definitionId:definitionForm.definitionId ?? crypto.randomUUID(),
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
          exampleId: exampleForm.exampleId ?? crypto.randomUUID(),
          sentence:exampleForm.sentence,
          translation: exampleForm.translation
        })
      }
      return examples;
    }, [])
  }



   cleanRecord(recordForm:any):RecordInterface | undefined{
    const defs = this.cleanDefinitionArray(recordForm);

    if (recordForm.value){
      return {
        creationDate: new Date(),
        definitions: defs,
        modificationDate: new Date(),
        type:recordForm.type,
        value:recordForm.value,
        _id:crypto.randomUUID()
      }
    }
    return undefined;
  }

  cleanDefinition(definitionForm:any):DefinitionInterface | undefined{
    if(definitionForm.translation){
      return {
        definitionId:crypto.randomUUID(),
        translation:definitionForm.translation,
        type:definitionForm.defType,
        examples:this.cleanExampleArray(definitionForm)
      }
    }
    return undefined;

  }

  cleanDefinitionArray(form:any){
    return form.definitions.reduce((definitions:DefinitionInterface[], definitionForm:any) => {

      if(definitionForm.translation){
        const def:DefinitionInterface = {
          definitionId:crypto.randomUUID(),
          translation:definitionForm.translation,
          type:definitionForm.defType,
          examples:this.cleanExampleArray(definitionForm)
        }
        definitions.push(def)
      }
      return definitions;
    }, []);

  }

  cleanExampleArray(definitionForm:any): ExampleInterface[]{
    return definitionForm.examples.reduce((examples:ExampleInterface[], exampleForm:ExampleInterface) => {
      if(exampleForm.sentence || exampleForm.translation){
        examples.push({
          exampleId: crypto.randomUUID(),
          sentence:exampleForm.sentence,
          translation: exampleForm.translation
        })
      }
      return examples;
    }, [])
  }

  cleanExample(exampleForm:any): ExampleInterface | undefined{
      if(exampleForm.sentence || exampleForm.translation){
        return {
          exampleId: crypto.randomUUID(),
          sentence:exampleForm.sentence,
          translation: exampleForm.translation
        }
      }
      return undefined;
  }
}

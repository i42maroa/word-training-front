import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormTemplateDefinitionComponent } from '../../../form/templates/definition/definition.component';
import { FormTemplateRecordComponent } from '../../../form/templates/record/record.component';
import { FormButtonSecundaryComponent } from '../../../buttons/form-button-secundary/form-button-secundary.component';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormContainerComponent } from '../../../form/form-container/form-container.component';
import { Store } from '@ngrx/store';
import { RecordService } from '../../../../services/record/record.service';
import { selectModal } from '../../../../../state/selectors/context.selector';
import { combineLatest, map, mergeMap, of, Subscription } from 'rxjs';
import { DefinitionInterface, ExampleInterface, RecordInterface } from '../../../../../data/record.interface';
import { DeleteSvgComponent } from '../../../../svg/delete-svg/delete-svg.component';
import { FormButtonComponent } from '../../../buttons/form-button/form-button.component';

@Component({
  selector: 'app-modify-record-modal',
  standalone: true,
  imports: [FormContainerComponent, ReactiveFormsModule,FormButtonSecundaryComponent, FormTemplateRecordComponent,FormTemplateDefinitionComponent, FormButtonComponent, DeleteSvgComponent],
  templateUrl: './modify-record.component.html',
  styleUrl: './modify-record.component.css'
})
export class ModifyRecordComponent implements OnInit, OnDestroy{

  formGroup:FormGroup = new FormGroup({
    _id: new FormControl(),
    value: new FormControl(),
    type: new FormControl('WORD'),
    definitions: new FormArray([])
  });

  subscriber!:Subscription;

  constructor(private readonly recordService:RecordService,
    private readonly store:Store){}

  ngOnInit(): void {
    this.subscriber = this.store.select(selectModal)
      .pipe(
        map((value) => value.data!.recordId),
        mergeMap((value) => combineLatest([of(value), this.recordService.getRecordDetail(value)])),
        map(([, res2]) => {
          const record = res2 as RecordInterface;
          this.formGroup.patchValue({
            value:record.value,
            type:record.type,
            recordId:record.recordId
          })

          if(record.definitions){
            record.definitions.forEach((definition:DefinitionInterface) => {
              const def = this.newDefinition();
              def.patchValue({
                  definitionId:definition.definitionId,
                  translation:definition.translation,
                  defType:definition.type
              })

              if(definition.examples){
                definition.examples.forEach((example:ExampleInterface) => {
                  const examp = this.newExampleGroup();

                  examp.patchValue({
                    sentence:example.sentence,
                    translation:example.translation,
                    exampleId:example.exampleId
                  })
                  const defGroup = def.get('examples') as FormArray;
                  defGroup.push(examp);
                })
              }

              this.definitions().push(def);
            })
          }
        }
      )
      )
      .subscribe()
  }

  definitions(): FormArray {
    return this.formGroup.get('definitions') as FormArray;
  }

  definitionGroup(index:number){
    return this.definitions().at(index) as FormGroup
  }


  addDefinition(){
    this.definitions().push(this.newDefinition())
  }

  removeDefinition(defIndex: number) {
    this.definitions().removeAt(defIndex);
  }

  newDefinition(){
    return  new FormGroup({
        definitionId:new FormControl(),
        translation:new FormControl(),
        defType:new FormControl('NOUN'),
        examples:new FormArray([])
      })
  }

  newExampleGroup(){
    return new FormGroup({
      exampleId:new FormControl(),
      sentence:new FormControl(),
      translation:new FormControl()
    })
  }

  showRemoveDefinition(){
    return this.definitions().length > 1
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

}

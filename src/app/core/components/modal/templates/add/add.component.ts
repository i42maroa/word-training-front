import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { FormButtonSecundaryComponent } from '../../../buttons/form-button-secundary/form-button-secundary.component';
import { FormTemplateRecordComponent } from '../../../form/templates/record/record.component';
import { FormTemplateDefinitionComponent } from '../../../form/templates/definition/definition.component';
import { FormContainerComponent } from '../../../form/form-container/form-container.component';
import { FormButtonComponent } from '../../../buttons/form-button/form-button.component';
import { DeleteSvgComponent } from '../../../../svg/delete-svg/delete-svg.component';


@Component({
  selector: 'app-add-modal',
  standalone: true,
  imports: [FormContainerComponent, ReactiveFormsModule, FormButtonComponent, FormButtonSecundaryComponent, FormTemplateRecordComponent,FormTemplateDefinitionComponent, DeleteSvgComponent],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddModalComponent{

  formGroup:FormGroup =new FormGroup({
    value: new FormControl(),
    type: new FormControl('WORD'),
    definitions: new FormArray([this.newDefinition()])
  });


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
        translation:new FormControl(),
        type:new FormControl(""),
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

  showRemoveDefinition(){
    return this.definitions().length > 1
  }

}

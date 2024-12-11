import { Component, Input } from '@angular/core';
import { DefinitionInterface } from '../../../data/record.interface';
import { ExampleComponent } from '../example/example.component';
import { DefinitionTypePipe } from '../../pipes/definition-type.pipe';
import { InfoSVGComponent } from '../../svg/info-svg/info-svg.component';
import { FormButtonSecundaryComponent } from '../buttons/form-button-secundary/form-button-secundary.component';
import { Store } from '@ngrx/store';
import { showModal } from '../../../state/actions/context.actions';

@Component({
  selector: 'app-definition',
  standalone: true,
  imports: [ExampleComponent, DefinitionTypePipe, InfoSVGComponent, FormButtonSecundaryComponent],
  templateUrl: './definition.component.html',
  styleUrl: './definition.component.css'
})
export class DefinitionComponent {

  @Input() definition?: DefinitionInterface;
  @Input() recordId!: string;

  showAdditionalInfo = false;


  constructor(private readonly store:Store){}


  toggleShowAdditionalInfo(){
    this.showAdditionalInfo = !this.showAdditionalInfo;
  }

  get isMoreInfo(){
    return this.definition &&
    (this.definition.info || this.definition.examples.length > 0)
  }

  addExample(definitionId:string){
    this.store.dispatch(showModal({modalType:'new-example', modalData:{recordId: this.recordId, definitionId}}));
  }

}

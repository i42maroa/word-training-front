import { Component, Input } from '@angular/core';
import { DefinitionInterface } from '../../../data/record.interface';
import { ExampleComponent } from '../example/example.component';
import { DefinitionTypePipe } from '../../pipes/definition-type.pipe';
import { InfoSVGComponent } from '../../svg/info-svg/info-svg.component';

@Component({
  selector: 'app-definition',
  standalone: true,
  imports: [ExampleComponent, DefinitionTypePipe, InfoSVGComponent],
  templateUrl: './definition.component.html',
  styleUrl: './definition.component.css'
})
export class DefinitionComponent {

  @Input() definition?: DefinitionInterface;

  showAdditionalInfo = false;


  toggleShowAdditionalInfo(){
    this.showAdditionalInfo = !this.showAdditionalInfo;
  }

  get isMoreInfo(){
    return this.definition &&
    (this.definition.info || this.definition.examples.length > 0)
  }
}

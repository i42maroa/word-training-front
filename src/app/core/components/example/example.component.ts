import { Component, Input } from '@angular/core';
import { ExampleInterface } from '../../../data/record.interface';
import { InfoSVGComponent } from '../../svg/info-svg/info-svg.component';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [InfoSVGComponent],
  templateUrl: './example.component.html',
  styleUrl: './example.component.css'
})
export class ExampleComponent {

  @Input() example?: ExampleInterface;

  showAdditionalInfo = false;


  toggleShowAdditionalInfo(){
    this.showAdditionalInfo = !this.showAdditionalInfo;
  }

  get isMoreInfo(){
    return this.example && (this.example.info || this.example.translation)
  }
}

import { Component, Input } from '@angular/core';
import { ControlValueAccessor,  FormsModule,  NG_VALUE_ACCESSOR } from '@angular/forms';
import { SpainSVGComponent } from '../../../svg/spain-svg/spain-svg.component';
import { EnglishSVGComponent } from '../../../svg/english-svg/english-svg.component';

type IconType = 'none' | 'spain' | 'english';

@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [FormsModule, SpainSVGComponent,  EnglishSVGComponent],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.css',
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: FormFieldComponent
    }
  ]
})
export class FormFieldComponent implements ControlValueAccessor{

  @Input() typeInput = "text";
  @Input() name!:string;
  @Input() labelText= "";
  @Input() icon:IconType = 'none';

  input = "";
   onChange: any = () => {}
   onTouch: any = () => {}

   registerOnChange(fn: any): void {
     this.onChange = fn;
   }

   registerOnTouched(fn: any): void {
     this.onTouch = fn;
   }

   writeValue(input: string) {
     this.input = input;
   }

}

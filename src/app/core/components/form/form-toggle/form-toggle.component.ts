import { Component, Input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-form-toggle',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-toggle.component.html',
  styleUrl: './form-toggle.component.css',
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: FormToggleComponent
    }
  ]
})
export class FormToggleComponent implements ControlValueAccessor{

  @Input() value = true;
  @Input() labelTextTrue= "";
  @Input() labelTextFalse= "";
  @Input() name!:string;

    input = true;
   onChange: any = () => {}
   onTouch: any = () => {}

   registerOnChange(fn: any): void {
     this.onChange = fn;
   }

   registerOnTouched(fn: any): void {
     this.onTouch = fn;
   }

   writeValue(input: boolean) {
     this.input = input;
   }

   get textLabelByInput(){
    return this.input? this.labelTextTrue : this.labelTextFalse;
   }
}

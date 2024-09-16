import { Component, Input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-form-select-field',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-select-field.component.html',
  styleUrl: './form-select-field.component.css',
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: FormSelectFieldComponent
    }
  ]
})
export class FormSelectFieldComponent implements ControlValueAccessor{
  
  @Input() name!:string;
  @Input() labelText:string = "";
  @Input() options:{label:string; value:any}[] = [];

  input: string = "";
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
import { Component, Input } from '@angular/core';
import { InputDataInterface } from '../../../../data/components/input.interface';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.css'
})
export class FormInputComponent {
  @Input() data!:InputDataInterface;
  @Input() controlName!:string;
}

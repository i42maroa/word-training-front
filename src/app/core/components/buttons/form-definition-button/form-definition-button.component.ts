import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-definition-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-definition-button.component.html',
  styleUrl: './form-definition-button.component.css'
})
export class FormDefinitionButtonComponent {

  @Input() focus = false;
}

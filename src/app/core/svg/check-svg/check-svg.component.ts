import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-check-svg',
  standalone: true,
  imports: [],
  templateUrl: './check-svg.component.html',
  styleUrl: './check-svg.component.css'
})
export class CheckSVGComponent {

  @Input() fillMode!:boolean;

}

import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { selectMenuShow } from '../../../state/selectors/context.selector';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  constructor(private readonly store:Store) {}

  get showMenu():Observable<boolean>{
    return this.store.select(selectMenuShow);
  }

}

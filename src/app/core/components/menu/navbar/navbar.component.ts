import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MenuType } from '../../../../data/modal.interface';
import { CommonModule } from '@angular/common';
import { RootNavbarComponent } from './templates/root-navbar/root-navbar.component';
import { DetailNavbarComponent } from './templates/detail-navbar/detail-navbar.component';
import { selectMenuType } from '../../../../state/selectors/context.selector';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RootNavbarComponent, DetailNavbarComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private readonly store:Store){  }

  get menuType():Observable<MenuType>{
    return this.store.select(selectMenuType);
  }
}

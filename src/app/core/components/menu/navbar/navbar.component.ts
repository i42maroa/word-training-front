import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PageUbication } from '../../../../data/modal.interface';
import { CommonModule } from '@angular/common';
import { selectPage } from '../../../../state/selectors/context.selector';
import { RootNavbarComponent } from './templates/root-navbar/root-navbar.component';
import { DetailNavbarComponent } from './templates/detail-navbar/detail-navbar.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RootNavbarComponent, DetailNavbarComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private readonly store:Store){  }

  get page():Observable<PageUbication>{
    return this.store.select(selectPage);
  }
}

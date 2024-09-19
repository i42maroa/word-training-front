import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { closeMenu, showMenu } from '../../../state/actions/context.actions';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { selectMenuShow } from '../../../state/selectors/context.selector';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private readonly store:Store){}

  showMenu(){
      this.store.dispatch(showMenu());
  }

  closeMenu(){
    this.store.dispatch(closeMenu());
  }

  get menu():Observable<boolean>{
    return this.store.select(selectMenuShow);
  }
}

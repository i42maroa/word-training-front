import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { showModal } from '../../../../state/actions/context.actions';
import { Observable } from 'rxjs';
import { selectShowButtons, selectTypeButtons } from '../../../../state/selectors/context.selector';
import { CommonModule } from '@angular/common';
import { ButtonType } from '../../../../data/modal.interface';

@Component({
  selector: 'app-float-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './float-button.component.html',
  styleUrl: './float-button.component.css'
})
export class FloatButtonComponent {

  showFloatButton$: Observable<boolean>;
  typeFloatButton$: Observable<ButtonType>;

  constructor(private readonly store:Store){
    this.showFloatButton$ = this.store.select(selectShowButtons);
    this.typeFloatButton$ = this.store.select(selectTypeButtons);
  }

  dispatchNewWordModal(){
    this.store.dispatch(showModal({title:"New word"}));
  }
}

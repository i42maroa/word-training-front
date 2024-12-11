import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { showModal } from '../../../../state/actions/context.actions';
import { map, Observable, Subscription, take } from 'rxjs';
import { selectShowButtons, selectTypeButtons } from '../../../../state/selectors/context.selector';
import { CommonModule } from '@angular/common';
import { ButtonType } from '../../../../data/modal.interface';
import { selectRecordDetail } from '../../../../state/selectors/data.selector';

@Component({
  selector: 'app-float-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './float-button.component.html',
  styleUrl: './float-button.component.css'
})
export class FloatButtonComponent implements OnDestroy {

  showFloatButton$: Observable<boolean>;
  typeFloatButton$: Observable<ButtonType>;
  subsciber?: Subscription;

  constructor(private readonly store:Store){
    this.showFloatButton$ = this.store.select(selectShowButtons);
    this.typeFloatButton$ = this.store.select(selectTypeButtons);
  }


  dispatchNewWordModal(){
    this.store.dispatch(showModal({ modalType:'new-record'}));
  }

  dispatchNewDefinitionModal(){
    this.subsciber = this.store.select(selectRecordDetail)
      .pipe(
        map(data => data!.recordId),
        take(1),
        map(recordId => this.store.dispatch(showModal({ modalType:'new-definition', modalData:{recordId}})))
      ).subscribe();

  }

  ngOnDestroy(): void {
    if(this.subsciber)
      this.subsciber.unsubscribe();
  }
}

import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { showModal } from '../../../../../../state/actions/context.actions';
import { map, Subscription, take } from 'rxjs';
import { selectModalData } from '../../../../../../state/selectors/context.selector';

@Component({
  selector: 'app-detail-navbar',
  standalone: true,
  imports: [],
  templateUrl: './detail-navbar.component.html',
  styleUrl: './detail-navbar.component.css'
})
export class DetailNavbarComponent implements OnDestroy {

  subsciber?: Subscription;

  constructor(private readonly store:Store){}

  modifyRecord(){
    this.subsciber = this.store.select(selectModalData)
      .pipe(
        map(modal => modal!.recordId),
        take(1),
        map(recordId => this.store.dispatch(showModal({modalType:'modify-record', modalData:{recordId}})))
      ).subscribe();
  }

  removeRecord(){
    this.subsciber = this.store.select(selectModalData)
      .pipe(
        map(modal => modal!.recordId),
        take(1),
        map(recordId => this.store.dispatch(showModal({modalType:'delete-record', modalData:{recordId}})))
      ).subscribe();
  }

  ngOnDestroy(): void {
    if(this.subsciber)
      this.subsciber.unsubscribe();
  }
}

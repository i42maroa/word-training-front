import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { closeModal } from '../../../../state/actions/context.actions';
import { Store } from '@ngrx/store';
import { FormButtonComponent } from '../../buttons/form-button/form-button.component';
import { FormService } from '../../../services/form/form.service';

@Component({
  selector: 'app-form-button-container',
  standalone: true,
  imports: [FormButtonComponent],
  templateUrl: './form-button-container.component.html',
  styleUrl: './form-button-container.component.css'
})
export class FormButtonContainerComponent implements OnDestroy {


  @Output() sendButton = new EventEmitter<void>();

  constructor(private readonly store:Store, private readonly formService:FormService){ }

  ngOnDestroy(): void {
    console.log("close")
    this.formService.resetForm()
  }

  closeModal(){
    this.store.dispatch(closeModal());
  }

  send(){
    this.sendButton.emit();
  }

}

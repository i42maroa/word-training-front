import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormButtonContainerComponent } from './form-button-container.component';

describe('FormButtonContainerComponent', () => {
  let component: FormButtonContainerComponent;
  let fixture: ComponentFixture<FormButtonContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormButtonContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormButtonContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormButtonSecundaryComponent } from './form-button-secundary.component';

describe('FormButtonSecundaryComponent', () => {
  let component: FormButtonSecundaryComponent;
  let fixture: ComponentFixture<FormButtonSecundaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormButtonSecundaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormButtonSecundaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

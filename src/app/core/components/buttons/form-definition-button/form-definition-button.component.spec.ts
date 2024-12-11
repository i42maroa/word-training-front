import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDefinitionButtonComponent } from './form-definition-button.component';

describe('FormDefinitionButtonComponent', () => {
  let component: FormDefinitionButtonComponent;
  let fixture: ComponentFixture<FormDefinitionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormDefinitionButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDefinitionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

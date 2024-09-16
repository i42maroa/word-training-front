import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTemplateExamplesComponent } from './examples.component';

describe('ExamplesComponent', () => {
  let component: FormTemplateExamplesComponent;
  let fixture: ComponentFixture<FormTemplateExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormTemplateExamplesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTemplateExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

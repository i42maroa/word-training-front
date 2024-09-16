import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTemplateRecordComponent } from './record.component';

describe('RecordComponent', () => {
  let component: FormTemplateRecordComponent;
  let fixture: ComponentFixture<FormTemplateRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormTemplateRecordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTemplateRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

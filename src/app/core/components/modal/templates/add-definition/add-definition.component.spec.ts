import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDefinitionComponent } from './add-definition.component';

describe('AddDefinitionComponent', () => {
  let component: AddDefinitionComponent;
  let fixture: ComponentFixture<AddDefinitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddDefinitionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

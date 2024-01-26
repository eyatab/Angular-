import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationmodifierComponent } from './operationmodifier.component';

describe('OperationmodifierComponent', () => {
  let component: OperationmodifierComponent;
  let fixture: ComponentFixture<OperationmodifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationmodifierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationmodifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

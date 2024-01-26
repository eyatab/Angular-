import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypetransactionComponent } from './typetransaction.component';

describe('TypetransactionComponent', () => {
  let component: TypetransactionComponent;
  let fixture: ComponentFixture<TypetransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypetransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypetransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

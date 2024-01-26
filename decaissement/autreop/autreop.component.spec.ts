import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutreopComponent } from './autreop.component';

describe('AutreopComponent', () => {
  let component: AutreopComponent;
  let fixture: ComponentFixture<AutreopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutreopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutreopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

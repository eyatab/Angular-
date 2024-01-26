import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterbqComponent } from './ajouterbq.component';

describe('AjouterbqComponent', () => {
  let component: AjouterbqComponent;
  let fixture: ComponentFixture<AjouterbqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterbqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterbqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

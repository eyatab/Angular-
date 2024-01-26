import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutercaiComponent } from './ajoutercai.component';

describe('AjoutercaiComponent', () => {
  let component: AjoutercaiComponent;
  let fixture: ComponentFixture<AjoutercaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutercaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutercaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

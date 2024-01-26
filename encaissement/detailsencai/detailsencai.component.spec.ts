import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsencaiComponent } from './detailsencai.component';

describe('DetailsencaiComponent', () => {
  let component: DetailsencaiComponent;
  let fixture: ComponentFixture<DetailsencaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsencaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsencaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

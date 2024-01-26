import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsdecaiComponent } from './detailsdecai.component';

describe('DetailsdecaiComponent', () => {
  let component: DetailsdecaiComponent;
  let fixture: ComponentFixture<DetailsdecaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsdecaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsdecaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

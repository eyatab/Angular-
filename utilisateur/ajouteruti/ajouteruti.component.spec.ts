import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterutiComponent } from './ajouteruti.component';

describe('AjouterutiComponent', () => {
  let component: AjouterutiComponent;
  let fixture: ComponentFixture<AjouterutiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterutiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterutiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

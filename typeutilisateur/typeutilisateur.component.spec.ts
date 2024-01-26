import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeutilisateurComponent } from './typeutilisateur.component';

describe('TypeutilisateurComponent', () => {
  let component: TypeutilisateurComponent;
  let fixture: ComponentFixture<TypeutilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeutilisateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeutilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

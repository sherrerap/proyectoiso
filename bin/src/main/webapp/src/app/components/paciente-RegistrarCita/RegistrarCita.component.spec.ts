import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarCitaComponent } from './RegistrarCita.component';

describe('RegistrarCitaComponent', () => {
  let component: RegistrarCitaComponent;
  let fixture: ComponentFixture<RegistrarCitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({ 
      declarations: [ RegistrarCitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

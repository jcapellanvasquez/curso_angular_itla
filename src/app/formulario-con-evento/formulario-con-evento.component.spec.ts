import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioConEventoComponent } from './formulario-con-evento.component';

describe('FormularioConEventoComponent', () => {
  let component: FormularioConEventoComponent;
  let fixture: ComponentFixture<FormularioConEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioConEventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioConEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

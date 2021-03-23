import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoentidadComponent } from './tipoentidad.component';

describe('TipoentidadComponent', () => {
  let component: TipoentidadComponent;
  let fixture: ComponentFixture<TipoentidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoentidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoentidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

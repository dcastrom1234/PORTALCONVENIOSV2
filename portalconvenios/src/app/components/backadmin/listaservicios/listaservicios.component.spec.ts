import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaserviciosComponent } from './listaservicios.component';

describe('ListaserviciosComponent', () => {
  let component: ListaserviciosComponent;
  let fixture: ComponentFixture<ListaserviciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaserviciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaserviciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

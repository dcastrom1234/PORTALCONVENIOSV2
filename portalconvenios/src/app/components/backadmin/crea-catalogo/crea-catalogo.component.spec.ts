import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaCatalogoComponent } from './crea-catalogo.component';

describe('CreaCatalogoComponent', () => {
  let component: CreaCatalogoComponent;
  let fixture: ComponentFixture<CreaCatalogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreaCatalogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

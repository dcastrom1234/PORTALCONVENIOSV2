import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacoordinadorComponent } from './creacoordinador.component';

describe('CreacoordinadorComponent', () => {
  let component: CreacoordinadorComponent;
  let fixture: ComponentFixture<CreacoordinadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreacoordinadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreacoordinadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

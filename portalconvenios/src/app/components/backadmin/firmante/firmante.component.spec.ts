import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmanteComponent } from './firmante.component';

describe('FirmanteComponent', () => {
  let component: FirmanteComponent;
  let fixture: ComponentFixture<FirmanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirmanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirmanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

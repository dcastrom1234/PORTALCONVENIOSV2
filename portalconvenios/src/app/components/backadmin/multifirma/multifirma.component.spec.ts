import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultifirmaComponent } from './multifirma.component';

describe('MultifirmaComponent', () => {
  let component: MultifirmaComponent;
  let fixture: ComponentFixture<MultifirmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultifirmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultifirmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

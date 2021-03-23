import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetserviciosentComponent } from './detserviciosent.component';

describe('DetserviciosentComponent', () => {
  let component: DetserviciosentComponent;
  let fixture: ComponentFixture<DetserviciosentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetserviciosentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetserviciosentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

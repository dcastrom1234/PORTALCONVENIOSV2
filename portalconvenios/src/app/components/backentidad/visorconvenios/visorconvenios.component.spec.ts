import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisorconveniosComponent } from './visorconvenios.component';

describe('VisorconveniosComponent', () => {
  let component: VisorconveniosComponent;
  let fixture: ComponentFixture<VisorconveniosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisorconveniosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisorconveniosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

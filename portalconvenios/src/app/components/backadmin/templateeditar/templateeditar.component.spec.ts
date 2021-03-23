import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateeditarComponent } from './templateeditar.component';

describe('TemplateeditarComponent', () => {
  let component: TemplateeditarComponent;
  let fixture: ComponentFixture<TemplateeditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateeditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateeditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

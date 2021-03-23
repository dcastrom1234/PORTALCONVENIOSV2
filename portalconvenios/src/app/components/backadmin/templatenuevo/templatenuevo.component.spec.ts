import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatenuevoComponent } from './templatenuevo.component';

describe('TemplatenuevoComponent', () => {
  let component: TemplatenuevoComponent;
  let fixture: ComponentFixture<TemplatenuevoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplatenuevoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatenuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

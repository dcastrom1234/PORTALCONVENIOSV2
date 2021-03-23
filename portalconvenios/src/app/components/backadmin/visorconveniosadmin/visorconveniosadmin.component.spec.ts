import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisorconveniosadminComponent } from './visorconveniosadmin.component';

describe('VisorconveniosadminComponent', () => {
  let component: VisorconveniosadminComponent;
  let fixture: ComponentFixture<VisorconveniosadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisorconveniosadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisorconveniosadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

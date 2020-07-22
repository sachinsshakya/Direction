import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceScienceComponent } from './advance-science.component';

describe('AdvanceScienceComponent', () => {
  let component: AdvanceScienceComponent;
  let fixture: ComponentFixture<AdvanceScienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvanceScienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvanceScienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

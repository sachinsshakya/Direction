import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateElementComponent } from './update-element.component';

describe('UpdateElementComponent', () => {
  let component: UpdateElementComponent;
  let fixture: ComponentFixture<UpdateElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

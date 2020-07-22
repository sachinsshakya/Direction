import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LawsphysicsComponent } from './lawsphysics.component';

describe('LawsphysicsComponent', () => {
  let component: LawsphysicsComponent;
  let fixture: ComponentFixture<LawsphysicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LawsphysicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LawsphysicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

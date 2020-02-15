import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMechcnicsComponent } from './view-mechcnics.component';

describe('ViewMechcnicsComponent', () => {
  let component: ViewMechcnicsComponent;
  let fixture: ComponentFixture<ViewMechcnicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMechcnicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMechcnicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

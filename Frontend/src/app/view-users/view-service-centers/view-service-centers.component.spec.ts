import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewServiceCentersComponent } from './view-service-centers.component';

describe('ViewServiceCentersComponent', () => {
  let component: ViewServiceCentersComponent;
  let fixture: ComponentFixture<ViewServiceCentersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewServiceCentersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewServiceCentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

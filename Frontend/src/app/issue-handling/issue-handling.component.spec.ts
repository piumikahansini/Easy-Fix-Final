import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueHandlingComponent } from './issue-handling.component';

describe('IssueHandlingComponent', () => {
  let component: IssueHandlingComponent;
  let fixture: ComponentFixture<IssueHandlingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueHandlingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueHandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

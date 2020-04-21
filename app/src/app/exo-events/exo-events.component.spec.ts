import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ExoEventsComponent} from './exo-events.component';

describe('ExoEventsComponent', () => {
  let component: ExoEventsComponent;
  let fixture: ComponentFixture<ExoEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExoEventsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

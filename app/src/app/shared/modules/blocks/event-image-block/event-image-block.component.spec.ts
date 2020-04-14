import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EventImageBlockComponent} from './event-image-block.component';

describe('EventImageBlockComponent', () => {
  let component: EventImageBlockComponent;
  let fixture: ComponentFixture<EventImageBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventImageBlockComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventImageBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MarchEventsBlockComponent} from './march-events-block.component';

describe('MarchEventsBlockComponent', () => {
  let component: MarchEventsBlockComponent;
  let fixture: ComponentFixture<MarchEventsBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MarchEventsBlockComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarchEventsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

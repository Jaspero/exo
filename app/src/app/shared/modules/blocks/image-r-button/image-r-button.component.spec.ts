import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ImageRButtonComponent} from './image-r-button.component';

describe('ImageRButtonComponent', () => {
  let component: ImageRButtonComponent;
  let fixture: ComponentFixture<ImageRButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ImageRButtonComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageRButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

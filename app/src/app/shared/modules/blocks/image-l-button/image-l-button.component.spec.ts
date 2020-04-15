import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ImageLButtonComponent} from './image-l-button.component';

describe('ImageLButtonComponent', () => {
  let component: ImageLButtonComponent;
  let fixture: ComponentFixture<ImageLButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ImageLButtonComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageLButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

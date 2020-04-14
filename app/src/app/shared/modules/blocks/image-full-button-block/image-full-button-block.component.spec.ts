import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ImageFullButtonBlockComponent} from './image-full-button-block.component';

describe('ImageFullButtonBlockComponent', () => {
  let component: ImageFullButtonBlockComponent;
  let fixture: ComponentFixture<ImageFullButtonBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ImageFullButtonBlockComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageFullButtonBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

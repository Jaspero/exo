import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageLargeBlockComponent } from './image-large-block.component';

describe('ImageLargeBlockComponent', () => {
  let component: ImageLargeBlockComponent;
  let fixture: ComponentFixture<ImageLargeBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageLargeBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageLargeBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

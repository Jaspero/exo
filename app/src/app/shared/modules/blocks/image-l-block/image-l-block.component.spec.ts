import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageLBlockComponent } from './image-l-block.component';

describe('ImageLBlockComponent', () => {
  let component: ImageLBlockComponent;
  let fixture: ComponentFixture<ImageLBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageLBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageLBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

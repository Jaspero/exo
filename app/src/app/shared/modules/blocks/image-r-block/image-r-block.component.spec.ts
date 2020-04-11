import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageRBlockComponent } from './image-r-block.component';

describe('ImageRBlockComponent', () => {
  let component: ImageRBlockComponent;
  let fixture: ComponentFixture<ImageRBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageRBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageRBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

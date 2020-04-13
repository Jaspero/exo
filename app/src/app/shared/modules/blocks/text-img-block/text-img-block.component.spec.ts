import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TextImgBlockComponent} from './text-img-block.component';

describe('TextImgBlockComponent', () => {
  let component: TextImgBlockComponent;
  let fixture: ComponentFixture<TextImgBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TextImgBlockComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextImgBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

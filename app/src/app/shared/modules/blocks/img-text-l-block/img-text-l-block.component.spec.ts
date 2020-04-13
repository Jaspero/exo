import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ImgTextLBlockComponent} from './img-text-l-block.component';

describe('ImgTextLBlockComponent', () => {
  let component: ImgTextLBlockComponent;
  let fixture: ComponentFixture<ImgTextLBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ImgTextLBlockComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgTextLBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

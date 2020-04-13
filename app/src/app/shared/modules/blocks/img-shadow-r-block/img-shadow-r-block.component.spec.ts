import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ImgShadowRBlockComponent} from './img-shadow-r-block.component';

describe('ImgShadowRBlockComponent', () => {
  let component: ImgShadowRBlockComponent;
  let fixture: ComponentFixture<ImgShadowRBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ImgShadowRBlockComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgShadowRBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

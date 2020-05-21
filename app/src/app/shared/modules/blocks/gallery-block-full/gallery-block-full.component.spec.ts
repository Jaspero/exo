import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GalleryBlockFullComponent} from './gallery-block-full.component';

describe('GalleryBlockFullComponent', () => {
  let component: GalleryBlockFullComponent;
  let fixture: ComponentFixture<GalleryBlockFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryBlockFullComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryBlockFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

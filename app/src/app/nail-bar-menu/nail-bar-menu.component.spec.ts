import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NailBarMenuComponent } from './nail-bar-menu.component';

describe('NailBarMenuComponent', () => {
  let component: NailBarMenuComponent;
  let fixture: ComponentFixture<NailBarMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NailBarMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NailBarMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

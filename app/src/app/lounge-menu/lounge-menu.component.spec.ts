import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoungeMenuComponent } from './lounge-menu.component';

describe('LoungeMenuComponent', () => {
  let component: LoungeMenuComponent;
  let fixture: ComponentFixture<LoungeMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoungeMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoungeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

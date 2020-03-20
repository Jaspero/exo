import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NailBarComponent } from './nail-bar.component';

describe('NailBarComponent', () => {
  let component: NailBarComponent;
  let fixture: ComponentFixture<NailBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NailBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NailBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VidoeViewComponent } from './vidoe-view.component';

describe('VidoeViewComponent', () => {
  let component: VidoeViewComponent;
  let fixture: ComponentFixture<VidoeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VidoeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VidoeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandViewComponent } from './hand-view.component';

describe('HandViewComponent', () => {
  let component: HandViewComponent;
  let fixture: ComponentFixture<HandViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

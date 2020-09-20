import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHeaderTopComponent } from './app-header-top.component';

describe('AppHeaderTopComponent', () => {
  let component: AppHeaderTopComponent;
  let fixture: ComponentFixture<AppHeaderTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppHeaderTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHeaderTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

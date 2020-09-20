import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KamazonLayoutComponent } from './kamazon-layout.component';

describe('KamazonLayoutComponent', () => {
  let component: KamazonLayoutComponent;
  let fixture: ComponentFixture<KamazonLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KamazonLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KamazonLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

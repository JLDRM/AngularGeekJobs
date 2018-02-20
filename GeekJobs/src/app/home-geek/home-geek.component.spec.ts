import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGeekComponent } from './home-geek.component';

describe('HomeGeekComponent', () => {
  let component: HomeGeekComponent;
  let fixture: ComponentFixture<HomeGeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeGeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeGeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLoginGeekComponent } from './form-login-geek.component';

describe('FormLoginGeekComponent', () => {
  let component: FormLoginGeekComponent;
  let fixture: ComponentFixture<FormLoginGeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormLoginGeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLoginGeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

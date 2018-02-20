import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLoginEmpComponent } from './form-login-emp.component';

describe('FormLoginEmpComponent', () => {
  let component: FormLoginEmpComponent;
  let fixture: ComponentFixture<FormLoginEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormLoginEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLoginEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

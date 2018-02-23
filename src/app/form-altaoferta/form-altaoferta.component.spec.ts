import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAltaofertaComponent } from './form-altaoferta.component';

describe('FormAltaofertaComponent', () => {
  let component: FormAltaofertaComponent;
  let fixture: ComponentFixture<FormAltaofertaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAltaofertaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAltaofertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

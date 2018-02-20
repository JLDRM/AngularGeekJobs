import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroOfertaComponent } from './registro-oferta.component';

describe('RegistroOfertaComponent', () => {
  let component: RegistroOfertaComponent;
  let fixture: ComponentFixture<RegistroOfertaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroOfertaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroOfertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

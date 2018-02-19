import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Empresa } from '../../models/empresa';


@Component({
  selector: 'app-form-empresa',
  templateUrl: './form-empresa.component.html',
  styleUrls: ['./form-empresa.component.css']
})
export class FormEmpresaComponent implements OnInit {
  empresaForm: FormGroup;
  empresa: Empresa;

  nom_ePattern: "[A-Z ÁÉÍÓÚ][a-z áéíóú]*";
  ema_ePattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$";
  pass_ePattern: "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$";
  nif_ePattern="[A-Za-z][0-9]{8}";
  tel_ePattern:"^(\+34|0034|34)?[6|7|9][0-9]{8}$";
  

  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.empresaForm = this.fb.group({
      nombre_emp: ['', Validators.required],
      apellido_emp: ['', Validators.required],
      email_emp: ['', Validators.required],
      password_emp: ['', Validators.required],
      cpassword_emp: ['', Validators.required],
      empresa_emp: ['', Validators.required],
      nif_emp: ['', Validators.required],
      telefono_emp: ['', Validators.required],
      stack_emp: [],
      chk_emp: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.empresaForm = new FormGroup({
      'nombre_emp': new FormControl(this.empresa.nombre_emp, [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(this.nom_ePattern)
      ]),
      'apellido_emp': new FormControl(this.empresa.nombre_emp, [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(this.nom_ePattern)
      ]),
      'email_emp': new FormControl(this.empresa.nombre_emp, [
        Validators.required,
        Validators.pattern(this.ema_ePattern)
      ]),
      'password_emp': new FormControl(this.empresa.nombre_emp, [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(this.pass_ePattern)
      ]),
      'cpassword_emp': new FormControl(this.empresa.nombre_emp, [
        Validators.required,
        Validators.minLength(6),
  
      ]),
      'empresa_emp': new FormControl(this.empresa.nombre_emp, [
        Validators.required,
        Validators.minLength(3),
      ]),
      'nif_emp': new FormControl(this.empresa.nombre_emp, [
        Validators.required,
        Validators.pattern(this.tel_ePattern)
      ]),
      'telefono_emp': new FormControl(this.empresa.nombre_emp, [
        Validators.required,
        Validators.pattern(this.nif_ePattern)
      ]),
      'stack_emp': new FormControl(this.empresa.nombre_emp, [
      ]),
      'chk_emp': new FormControl(this.empresa.nombre_emp, [
        Validators.required,
      ])
    });
  }
  ngOnChanges() {
  }

}
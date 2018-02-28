import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Empresa } from '../../models/empresa';
import { EmpresaService } from '../servicios/empresa.service';

@Component({
  selector: 'app-form-empresa',
  templateUrl: './form-empresa.component.html',
  styleUrls: ['./form-empresa.component.css']
})
export class FormEmpresaComponent implements OnInit {
  empresaForm: FormGroup;
  empresa: Empresa = {
    nombre_emp: '',
    apellido_emp: '',
    email_emp: '',
    password_emp: '',
    cpassword_emp: '',
    empresa_emp: '',
    nif_emp: '',
    telefono_emp: 123456789,
    stack_emp: []
    //chk_emp: ''
  };

  constructor(private fb: FormBuilder, private post: EmpresaService) {
    this.createForm();
  }
  createForm() {
    this.empresaForm = this.fb.group({
      nombre_emp: '',
      apellido_emp: '',
      email_emp: '',
      password_emp: '',
      cpassword_emp: '',
      empresa_emp: '',
      nif_emp: '',
      telefono_emp: '',
      stack_emp: []
      //chk_emp: ''
    })
  }

  ngOnInit(): void {
    this.empresaForm = new FormGroup({
      'nombre_emp': new FormControl(this.empresa.nombre_emp, [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern("[A-Z ÁÉÍÓÚ][a-z áéíóú]*")
      ]),
      'apellido_emp': new FormControl(this.empresa.nombre_emp, [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern("[A-Z ÁÉÍÓÚ][a-z áéíóú]*")
      ]),
      'email_emp': new FormControl(this.empresa.nombre_emp, [
        Validators.required,
        Validators.email
      ]),
      'password_emp': new FormControl(this.empresa.nombre_emp, [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$")
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
        Validators.pattern("[A-Za-z][0-9]{8}")
      ]),
      'telefono_emp': new FormControl(this.empresa.nombre_emp, [
        Validators.required,
        Validators.pattern("[0-9]{9}")
      ]),
      'stack_emp': new FormControl(this.empresa.nombre_emp, [
      ])
      /* 'chk_emp': new FormControl(this.empresa.nombre_emp, [
         Validators.required,
       ])*/
    });
  }
  ngOnChanges() {
  }

  onSubmit(dta) {
    let id;
    if (this.empresaForm.valid) {
      this.post.postEmpresaForm(dta).subscribe(x => {
        console.log(x);
        id = x['_id'];
      });
      console.log(id);
      console.log('Registrado correctamente');
    } else {
      alert('Lo sentimos, se ha producido un error')
    }
  }
}
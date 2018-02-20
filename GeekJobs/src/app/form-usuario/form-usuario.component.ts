import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { Geek } from '../../models/geek';


@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})

export class FormUsuarioComponent implements OnInit {

  usuarioForm: FormGroup;
  usuario: Geek = {
    nombre: '',
    apellidos: '',
    fotoPerfil: '',
    descripcion: '',
    habilidadesPrincipales: '',
    habilidades: '',
    portafolio: '',
    experiencia: '',
    formacion: '',
    email: '',
    password: '',
    confirmacionpass: '',
    telefono: '',
    hobby: ''
  };

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.usuarioForm = this.fb.group({
      nombre: '',
      apellido: '',
      email: '',
      password: '',
      confirmacionpass: '',
      telefono: '',
      habilidades: '',
      hobby: '',
      cv: ''
    })
  }

  ngOnInit(): void {
    this.usuarioForm = new FormGroup({
      'nombre': new FormControl(this.usuario.nombre, [
        Validators.required,
        Validators.pattern('[A-Z ÁÉÍÓÚ][a-z áéíóú]*')

      ]),
      'apellido': new FormControl(this.usuario.apellidos, [
        Validators.required,
        Validators.pattern('[A-Z ÁÉÍÓÚ][a-z áéíóú]*')

      ]),
      'email': new FormControl(this.usuario.email, [
        Validators.required,
        Validators.email

      ]),
      'password': new FormControl(this.usuario.password, [
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$')

      ]),
      'confirmacionpass': new FormControl(this.usuario.confirmacionpass, [
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$')

      ]),
      'telefono': new FormControl(this.usuario.telefono, [
        Validators.required,
        Validators.pattern('[0-9]{9}')

      ]),
      'habilidades': new FormControl(this.usuario.habilidades, [
        Validators.required,
        Validators.pattern('[A-Z ÁÉÍÓÚ][a-z áéíóú]*')

      ]),
      'hobby': new FormControl(this.usuario.hobby, [
        Validators.required,
        Validators.pattern('[A-Z ÁÉÍÓÚ][a-z áéíóú]*')

      ])

    })
  }

}

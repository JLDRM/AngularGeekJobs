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
  usuario: Geek;

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
          Validators.minLength(4),
        ]),
        'apellido': new FormControl(this.usuario.email,[
          Validators.required,
          Validators.minLength(4),
        ]),
        'email': new FormControl(this.usuario.email,[
          Validators.required,
          Validators.minLength(4),
        ]),
        'contraseña': new FormControl(this.usuario.password,[
          Validators.required,
          Validators.minLength(4),
        ]),
        'conficontraseña': new FormControl(this.usuario.confirmacionpass,[
          Validators.required,
          Validators.minLength(4),
        ]),
        'telefono': new FormControl(this.usuario.telefono,[
          Validators.required,
          Validators.minLength(4),
        ]),
        'habilidades': new FormControl(this.usuario.habilidades,[
          Validators.required,
          Validators.minLength(4),
        ]),
        'hobby': new FormControl(this.usuario.hobby,[
          Validators.required,
          Validators.minLength(4),
          Validators.pattern('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$')
        ]),
        'cv': new FormControl()
      })
    }

  }

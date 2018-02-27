import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { matchOtherValidator } from '../directivas/custom-validator-pass-equal';

import { GeekService } from '../servicios/geek.service';

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
    fotoPortada: '',
    descripcion: '',
    habilidadesPrincipales: '',
    habilidades: '',
    portafolio: '',
    experiencia: '',
    formacion: '',
    telefono: '',
    confirmacionpass: '',
    email: '',
    password: ''
  };

  constructor(private fb: FormBuilder,
    private post: GeekService) {
    this.createForm();
  }

  createForm() {
    this.usuarioForm = this.fb.group({
      nombre: '',
      apellidos: '',
      email: '',
      password: '',
      confirmacionpass: '',
      telefono: '',
      habilidades: '',
      descripcion: '',
      fotoPerfil: ''
    });
  }

  ngOnInit(): void {
    this.usuarioForm = new FormGroup({
      'nombre': new FormControl(this.usuario.nombre, [
        Validators.required,
        Validators.pattern('[A-Z ÁÉÍÓÚ][a-z áéíóú]*')

      ]),
      'apellidos': new FormControl(this.usuario.apellidos, [
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
        Validators.pattern('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$'),
        matchOtherValidator('password')

      ]),
      'telefono': new FormControl(this.usuario.telefono, [
        Validators.required,
        Validators.pattern('[0-9]{9}')

      ]),
      'habilidades': new FormControl(this.usuario.habilidades, [
        Validators.required,
        Validators.pattern('[A-Z ÁÉÍÓÚ][a-z áéíóú]*')

      ]),
      'descripcion': new FormControl(this.usuario.descripcion, [
        Validators.required,
        Validators.pattern('[A-Z ÁÉÍÓÚ][a-z áéíóú]*')

      ])

    });
  }

  onSubmitado(data) {
    let id;
    if (this.usuarioForm.valid) {
      this.post.postUsuarioFromForm(data).subscribe(x => {
        console.log(x);
        id = x['_id'];
      });
      console.log(id);

    } else {
      alert('El Formulario contiene errores');
    }

  }

}


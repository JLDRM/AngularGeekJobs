import { Component, OnInit, AfterViewInit, Input, OnChanges, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { matchOtherValidator } from '../customValidator/custom-validator-pass-equal';
import { BsModalService, ModalDirective } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';

import { GeekService } from '../servicios/geek.service';

import { Geek } from '../../models/geek';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})

export class FormUsuarioComponent implements OnInit {
  modalRef: BsModalRef;
  @ViewChild('ok') ok: any;
  @ViewChild('fail') fail: any;
  @ViewChild('badFill') badFill: any;

  usuarioForm: FormGroup;

  usuario: Geek = {
    nombre: 'Josep',
    apellidos: 'Lopez',
    fotoPerfil: '',
    fotoPortada: '',
    descripcion: 'Jooooo',
    habilidadesPrincipales: '',
    habilidades: 'Tuuuu',
    portafolio: '',
    experiencia: '',
    formacion: '',
    telefono: '679032345',
    confirmacionpass: 'Nojodas4!',
    email: 'jldr244@gmail.com',
    password: 'Nojodas4!'
  };

  constructor(private fb: FormBuilder, private post: GeekService,
    private modalService: BsModalService, private router: Router) {
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

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  nosVamos() {
    console.log('hola');
    this.router.navigateByUrl('login-geek');
  }

  onSubmitado(data) {
    if (this.usuarioForm.valid) {
      this.post.postUsuarioFromForm(data).subscribe(response => {
        if (response.status === 200) {
          this.openModal(this.ok);
          this.nosVamos();
        } else {
          this.openModal(this.fail);
        }
        console.log(response);
        response.json();
        console.log(response.json());
      });
    } else {
      this.openModal(this.badFill);
    }
  }
}

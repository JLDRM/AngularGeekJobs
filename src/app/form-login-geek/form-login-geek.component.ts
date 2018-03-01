import { Component, OnInit, Input, OnChanges, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginGeek } from '../../models/loginGeek';
import { GeekService } from '../servicios/geek.service';
import { Router } from '@angular/router';
import { BsModalService, ModalDirective } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


@Component({
  selector: 'app-form-login-geek',
  templateUrl: './form-login-geek.component.html',
  styleUrls: ['./form-login-geek.component.css']
})

export class FormLoginGeekComponent implements OnInit, OnChanges {
  loginGeekForm: FormGroup;

  modalRef: BsModalRef;

  @ViewChild('badFill') badFill: any;
  @ViewChild('badLog') badLog: any;

  login: LoginGeek = {
    email_geek: '',
    password_geek: ''
  };

  constructor(private fb: FormBuilder, private post: GeekService, private router: Router,
    private modalService: BsModalService) {
    this.createForm();
  }

  createForm() {
    this.loginGeekForm = this.fb.group({
      email_geek: ['', Validators.required],
      password_geek: ['', Validators.required],
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit(): void {
    this.loginGeekForm = new FormGroup({
      'email_geek': new FormControl(this.login.email_geek, [
        Validators.required,
        Validators.minLength(3),
        Validators.email
      ]),
      'password_geek': new FormControl(this.login.password_geek, [
        Validators.required
      ]),
    });
  }

  ngOnChanges() {
  }

  onSubmit(dat) {
    let id;
    if (this.loginGeekForm.valid) {
      console.log(dat);
      this.post.postLoginUsuario(dat).subscribe((x) => {
        console.log(x.status);

        if (x.status === 200) {
          id = x['_body'];

          // localStorage para guardar id de Usuario
          if (window.localStorage) {
            localStorage.setItem('idUsuario', id);
          }
          this.router.navigateByUrl('perfil-usuario');

        }

      }, (err) => {
        if (err.status == 401) {
          this.openModal(this.badLog);
        }

      });

    } else {
      this.openModal(this.badFill);
    }
  }
}



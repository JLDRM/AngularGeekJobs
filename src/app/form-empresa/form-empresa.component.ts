import { Component, OnInit, Input, OnChanges, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Empresa } from '../../models/empresa';
import { EmpresaService } from '../servicios/empresa.service';
import { BsModalService, ModalDirective } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-empresa',
  templateUrl: './form-empresa.component.html',
  styleUrls: ['./form-empresa.component.css']
})
export class FormEmpresaComponent implements OnInit {
  modalRef: BsModalRef;
  @ViewChild('ok') ok: any;
  @ViewChild('fail') fail: any;
  @ViewChild('badFill') badFill: any;

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

  constructor(private fb: FormBuilder, private post: EmpresaService,
    private modalService: BsModalService, private router: Router) {
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

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  nosVamosEmpresa() {
    console.log('hola');
    this.router.navigateByUrl('login-emp');
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
        if (x.status == 200) {
          this.openModal(this.ok);
          this.nosVamosEmpresa();
        } else {
          this.openModal(this.fail);
        }

        console.log(x);
        id = x['_id'];
      });

    } else {
      this.openModal(this.badFill);
    }
  }
}
import { Component, OnInit, Input, OnChanges, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginEmp } from '../../models/loginEmp';
import { EmpresaService } from '../servicios/empresa.service';
import { Router } from '@angular/router';
import { BsModalService, ModalDirective } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


@Component({
  selector: 'app-form-login-emp',
  templateUrl: './form-login-emp.component.html',
  styleUrls: ['./form-login-emp.component.css']
})
export class FormLoginEmpComponent implements OnInit, OnChanges {
  loginEmpForm: FormGroup;
  login: LoginEmp = {
    email_emp: '',
    password_emp: ''
  };
  modalRef: BsModalRef;

  @ViewChild('badFill') badFill: any;
  @ViewChild('badLog') badLog: any;

  constructor(private fb: FormBuilder, private post: EmpresaService, private router: Router,
    private modalService: BsModalService) {
    this.createForm();
  }

  createForm() {
    this.loginEmpForm = this.fb.group({
      email_emp: '',
      password_emp: ''
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit(): void {
    this.loginEmpForm = new FormGroup({
      'email_emp': new FormControl(this.login.email_emp, [
        Validators.required,
        Validators.minLength(3),
        Validators.email
      ]),
      'password_emp': new FormControl(this.login.password_emp, [
        Validators.required,
      ]),
    });
  }

  ngOnChanges() { }

  onSubmit(data) {
    let id;
    if (this.loginEmpForm.valid) {
      console.log(data)
      this.post.postLoginEmpresa(data).subscribe((x) => {
        if (x.status === 200) {
          console.log(x);
          id = x['_id'];
          this.router.navigateByUrl('form-oferta');
        }
      }), (err) => {
        if (err.status == 401) {
          this.openModal(this.badLog);
        }
      }
    } else {
      this.openModal(this.badFill);
    }
  }
}

